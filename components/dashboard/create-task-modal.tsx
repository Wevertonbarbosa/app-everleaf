// Component - Modal para criar nova tarefa
'use client';

import type React from 'react';

import { useState } from 'react';
import type { CreateTaskInput } from '@/types/task.types';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock } from 'lucide-react';

interface CreateTaskModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreateTask: (task: CreateTaskInput) => void;
}

export function CreateTaskModal({
    open,
    onOpenChange,
    onCreateTask,
}: CreateTaskModalProps) {
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

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md mx-4 sm:mx-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-white">
                        Criar Nova Tarefa
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Preencha os campos abaixo para adicionar uma nova tarefa
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    {/* Título */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="title"
                            className="text-sm font-medium text-gray-300"
                        >
                            Título da Tarefa *
                        </Label>
                        <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            placeholder="Ex: Reunião com cliente"
                            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500"
                            required
                        />
                    </div>

                    {/* Descrição */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="description"
                            className="text-sm font-medium text-gray-300"
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
                            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500 min-h-[80px] resize-none"
                            rows={3}
                        />
                    </div>

                    {/* Data e Horário */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Label
                                htmlFor="startDate"
                                className="text-sm font-medium text-gray-300 flex items-center gap-1"
                            >
                                <Calendar className="w-3.5 h-3.5" />
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
                                className="bg-gray-900 border-gray-700 text-white focus:border-green-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="startTime"
                                className="text-sm font-medium text-gray-300 flex items-center gap-1"
                            >
                                <Clock className="w-3.5 h-3.5" />
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
                                className="bg-gray-900 border-gray-700 text-white focus:border-green-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="flex gap-3 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold"
                        >
                            Criar Tarefa
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
