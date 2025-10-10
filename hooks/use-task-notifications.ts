'use client';

import { useEffect, useRef, useState } from 'react';
import type { Task } from '@/types/task.types';

interface TaskNotification {
    taskId: string;
    taskTitle: string;
    minutesRemaining: number;
}

// Hook para gerenciar notificações de tarefas
export function useTaskNotifications(tasks: Task[]) {
    // Rastreia quais tarefas já foram notificadas para evitar duplicatas
    const notifiedTasksRef = useRef<Set<string>>(new Set());
    // Estado para controlar o alert atual
    const [currentNotification, setCurrentNotification] =
        useState<TaskNotification | null>(null);

    useEffect(() => {
        // Função que verifica se alguma tarefa precisa de notificação
        const checkTaskNotifications = () => {
            const now = new Date();
            const currentDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
            const currentTime = now.getTime();

            // Filtra apenas tarefas ativas
            const activeTasks = tasks.filter((task) => task.isActive);

            activeTasks.forEach((task) => {
                // Verifica se a tarefa é para hoje
                if (task.startDate !== currentDate) {
                    return;
                }

                // Cria um Date object com a data e hora da tarefa
                const [hours, minutes] = task.startTime.split(':').map(Number);
                const taskDateTime = new Date(now);
                taskDateTime.setHours(hours, minutes, 0, 0);
                const taskTime = taskDateTime.getTime();

                // Calcula a diferença em minutos
                const diffInMs = taskTime - currentTime;
                const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

                // Se faltam exatamente 5 minutos (com margem de 1 minuto para garantir que pegue)
                // e ainda não foi notificada
                if (
                    diffInMinutes <= 5 &&
                    diffInMinutes > 0 &&
                    !notifiedTasksRef.current.has(task.id)
                ) {
                    // Marca como notificada
                    notifiedTasksRef.current.add(task.id);

                    // Dispara o Alert
                    setCurrentNotification({
                        taskId: task.id,
                        taskTitle: task.title,
                        minutesRemaining: diffInMinutes,
                    });

                    console.log(
                        `[v0] Notificação disparada para tarefa: ${task.title} (${diffInMinutes} minutos)`
                    );
                }

                // Se a tarefa já passou, remove do set de notificadas
                if (diffInMinutes < 0) {
                    notifiedTasksRef.current.delete(task.id);
                }
            });
        };

        // Verifica imediatamente ao montar
        checkTaskNotifications();

        // Verifica a cada 30 segundos
        const interval = setInterval(checkTaskNotifications, 30000);

        // Cleanup
        return () => {
            clearInterval(interval);
        };
    }, [tasks]);

    // Limpa as notificações quando as tarefas mudam (ex: tarefa desativada)
    useEffect(() => {
        const activeTaskIds = new Set(
            tasks.filter((t) => t.isActive).map((t) => t.id)
        );

        // Remove notificações de tarefas que foram desativadas
        notifiedTasksRef.current.forEach((taskId) => {
            if (!activeTaskIds.has(taskId)) {
                notifiedTasksRef.current.delete(taskId);
            }
        });
    }, [tasks]);

    return {
        currentNotification,
        closeNotification: () => setCurrentNotification(null),
    };
}
