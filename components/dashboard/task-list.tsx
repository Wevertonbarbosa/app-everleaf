// Component - Lista de tarefas
'use client';

import { useState } from 'react';
import type { Task } from '@/types/task.types';
import { TaskCard } from './task-card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { PREDEFINED_TASKS } from '@/lib/tasks/predefined-tasks';
import { Circle } from 'lucide-react'; // Declared Circle for use

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(PREDEFINED_TASKS);

    const handleToggleTask = (taskId: string, isActive: boolean) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isActive } : task
            )
        );
    };

    const handleCreateTask = () => {
        console.log('Criar nova tarefa - funcionalidade em desenvolvimento');
    };

    const activeTasks = tasks.filter((task) => task.isActive);
    const inactiveTasks = tasks.filter((task) => !task.isActive);

    return (
        <div className="space-y-6">
            {/* Botão de criar tarefa */}
            <Button
                onClick={handleCreateTask}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-base shadow-lg shadow-green-500/20"
            >
                <Plus className="w-5 h-5 mr-2" />
                Criar Nova Tarefa
            </Button>

            {/* Tarefas ativas */}
            {activeTasks.length > 0 && (
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide px-1">
                        Tarefas Ativas ({activeTasks.length})
                    </h2>
                    {activeTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggle={handleToggleTask}
                        />
                    ))}
                </div>
            )}

            {/* Tarefas sugeridas/inativas */}
            {inactiveTasks.length > 0 && (
                <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide px-1">
                        Tarefas Sugeridas ({inactiveTasks.length})
                    </h2>
                    {inactiveTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggle={handleToggleTask}
                        />
                    ))}
                </div>
            )}

            {/* Estado vazio */}
            {tasks.length === 0 && (
                <div className="text-center py-12">
                    <Circle className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-400 text-base">
                        Nenhuma tarefa disponível
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        Crie sua primeira tarefa para começar
                    </p>
                </div>
            )}
        </div>
    );
}
