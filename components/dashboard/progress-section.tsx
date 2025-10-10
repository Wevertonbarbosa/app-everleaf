// Component - Seção de progresso hoje
'use client';

import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProgressSectionProps {
    completed: number;
    total: number;
    percentage: number;
}

export function ProgressSection({
    completed,
    total,
    percentage,
}: ProgressSectionProps) {
    return (
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-green-500" />
                <h2 className="text-white font-bold text-base uppercase tracking-wide">
                    Progresso Hoje
                </h2>
            </div>

            <div className="text-center mb-5">
                <div className="text-6xl font-bold text-green-500 mb-2">
                    {percentage}%
                </div>
                <div className="text-gray-400 text-sm">
                    {completed}/{total} tarefas
                </div>
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-5 text-sm uppercase tracking-wide">
                Ver Relatório Completo
            </Button>
        </div>
    );
}
