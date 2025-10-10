'use client';

import type React from 'react';
import { useState } from 'react';
import type { CreateTaskInput } from '@/types/task.types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock } from 'lucide-react';

interface CreateTaskFormProps {
    onCreateTask: (task: CreateTaskInput) => void;
}

export function CreateTaskForm({ onCreateTask }: CreateTaskFormProps) {
    const [formData, setFormData] = useState<CreateTaskInput>({
        title: '',
        description: '',
        startDate: new Date().toISOString().split('T')[0],
        startTime: '09:00',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            return;
        }

        onCreateTask(formData);

        // Resetar formulário
        setFormData({
            title: '',
            description: '',
            startDate: new Date().toISOString().split('T')[0],
            startTime: '09:00',
        });
    };

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6">
            <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                    Criar Nova Tarefa
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                    Preencha os campos abaixo para adicionar uma nova tarefa
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Título */}
                <div className="space-y-1.5 sm:space-y-2">
                    <Label
                        htmlFor="title"
                        className="text-xs sm:text-sm font-medium text-gray-300"
                    >
                        Título da Tarefa *
                    </Label>
                    <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        placeholder="Ex: Reunião com cliente"
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 text-sm sm:text-base h-9 sm:h-10"
                        required
                    />
                </div>

                {/* Descrição */}
                <div className="space-y-1.5 sm:space-y-2">
                    <Label
                        htmlFor="description"
                        className="text-xs sm:text-sm font-medium text-gray-300"
                    >
                        Descrição
                    </Label>
                    <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        placeholder="Descreva os detalhes da tarefa..."
                        className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 min-h-[70px] sm:min-h-[80px] resize-none text-sm sm:text-base"
                        rows={3}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5 sm:space-y-2">
                        <Label
                            htmlFor="startDate"
                            className="text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-1"
                        >
                            <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            Data de Início *
                        </Label>
                        <Input
                            id="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    startDate: e.target.value,
                                })
                            }
                            className="bg-gray-900 border-gray-700 text-white focus:border-green-500 text-sm sm:text-base h-9 sm:h-10"
                            required
                        />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                        <Label
                            htmlFor="startTime"
                            className="text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-1"
                        >
                            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            Horário *
                        </Label>
                        <Input
                            id="startTime"
                            type="time"
                            value={formData.startTime}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    startTime: e.target.value,
                                })
                            }
                            className="bg-gray-900 border-gray-700 text-white focus:border-green-500 text-sm sm:text-base h-9 sm:h-10"
                            required
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm sm:text-base h-10 sm:h-11 mt-2"
                >
                    Criar Tarefa
                </Button>
            </form>
        </div>
    );
}
