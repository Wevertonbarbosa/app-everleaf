// Component - Lista de tarefas
'use client';

import { useState } from 'react';
import type { Task, CreateTaskInput } from '@/types/task.types';
import { TaskCard } from './task-card';
import { CreateTaskModal } from './create-task-modal';
import { Button } from '@/components/ui/button';
import { Plus, Circle } from 'lucide-react';
import { PREDEFINED_TASKS } from '@/lib/tasks/predefined-tasks';
import { sortTasksByTime } from '@/lib/tasks/task-utils';
import { useToast } from '@/hooks/use-toast';

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(PREDEFINED_TASKS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { toast } = useToast();

    const handleToggleTask = (taskId: string, isActive: boolean) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isActive } : task
            )
        );
    };

    const handleCreateTask = (taskInput: CreateTaskInput) => {
        const newTask: Task = {
            id: `task-${Date.now()}`,
            title: taskInput.title,
            description: taskInput.description,
            startDate: taskInput.startDate,
            startTime: taskInput.startTime,
            isActive: false,
            isPredefined: false,
            createdAt: new Date(),
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        toast({
            title: 'Tarefa criada com sucesso!',
            description: `"${newTask.title}" foi adicionada às suas tarefas.`,
        });
    };

    const sortedTasks = sortTasksByTime(tasks);
    const activeTasks = sortedTasks.filter((task) => task.isActive);
    const inactiveTasks = sortedTasks.filter((task) => !task.isActive);

    return (
        <div className="space-y-6">
            {/* Botão de criar tarefa */}
            <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-base shadow-lg shadow-green-500/20"
            >
                <Plus className="w-5 h-5 mr-2" />
                Criar Nova Tarefa
            </Button>

            <CreateTaskModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                onCreateTask={handleCreateTask}
            />

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
