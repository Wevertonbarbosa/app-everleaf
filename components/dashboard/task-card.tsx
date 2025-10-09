// Component - Card de tarefa individual
'use client';

import type { Task } from '@/types/task.types';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { CheckCircle2, Circle, Clock, Calendar } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/tasks/task-utils';

interface TaskCardProps {
    task: Task;
    onToggle: (taskId: string, isActive: boolean) => void;
}

export function TaskCard({ task, onToggle }: TaskCardProps) {
    return (
        <Card
            className={`p-4 transition-all duration-300 ${
                task.isActive
                    ? 'bg-gray-800 border-green-500/50 shadow-lg shadow-green-500/10'
                    : 'bg-gray-800/50 border-gray-700'
            }`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                    {task.isActive ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                        <Circle className="w-5 h-5 text-gray-500" />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <h3
                        className={`font-semibold text-base mb-1 ${
                            task.isActive ? 'text-white' : 'text-gray-300'
                        }`}
                    >
                        {task.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">
                        {task.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(task.startDate)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{formatTime(task.startTime)}</span>
                        </div>
                    </div>

                    {task.isPredefined && (
                        <span className="inline-block text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                            Tarefa Sugerida
                        </span>
                    )}
                </div>
                <div className="flex-shrink-0">
                    <Switch
                        checked={task.isActive}
                        onCheckedChange={(checked) =>
                            onToggle(task.id, checked)
                        }
                        className="data-[state=checked]:bg-green-500"
                    />
                </div>
            </div>
        </Card>
    );
}
