'use client';

import { useState } from 'react';
import type { Task, CreateTaskInput } from '@/types/task.types';
import { TaskCard } from './task-card';
import { CreateTaskForm } from './create-task-form';
import { Circle } from 'lucide-react';
import { sortTasksByTime } from '@/lib/tasks/task-utils';
import { useToast } from '@/hooks/use-toast';

interface TaskTabsProps {
    tasks: Task[];
    onTasksChange: (tasks: Task[]) => void;
}

export function TaskTabs({ tasks, onTasksChange }: TaskTabsProps) {
    const [activeTab, setActiveTab] = useState<'tasks' | 'create'>('tasks');
    const { toast } = useToast();

    const handleToggleTask = (taskId: string, isActive: boolean) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, isActive } : task
        );
        onTasksChange(updatedTasks);
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

        onTasksChange([...tasks, newTask]);

        toast({
            title: 'Tarefa criada com sucesso!',
            description: `"${newTask.title}" foi adicionada às suas tarefas.`,
        });

        // Voltar para a aba de tarefas após criar
        setActiveTab('tasks');
    };

    const sortedTasks = sortTasksByTime(tasks);
    const activeTasks = sortedTasks.filter((task) => task.isActive);
    const inactiveTasks = sortedTasks.filter((task) => !task.isActive);

    return (
        <div className="space-y-4">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-700">
                <button
                    onClick={() => setActiveTab('tasks')}
                    className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
                        activeTab === 'tasks'
                            ? 'text-green-500'
                            : 'text-gray-400 hover:text-gray-300'
                    }`}
                >
                    Tarefas
                    {activeTab === 'tasks' && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('create')}
                    className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
                        activeTab === 'create'
                            ? 'text-green-500'
                            : 'text-gray-400 hover:text-gray-300'
                    }`}
                >
                    Criar Tarefa
                    {activeTab === 'create' && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500" />
                    )}
                </button>
            </div>

            {/* Conteúdo das Tabs */}
            <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50 hover:scrollbar-thumb-gray-600 pr-2">
                {activeTab === 'tasks' ? (
                    <div className="space-y-6">
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
                ) : (
                    <CreateTaskForm onCreateTask={handleCreateTask} />
                )}
            </div>
        </div>
    );
}
