// Component - Seção de histórico de datas
'use client';

import { DateHistoryCard } from './date-history-card';
import type { DailyProgress } from '@/types/progress.types';

interface DateHistorySectionProps {
    history: DailyProgress[];
}

export function DateHistorySection({ history }: DateHistorySectionProps) {
    return (
        <div className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide px-1">
                Histórico
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {history.map((progress, index) => (
                    <DateHistoryCard key={index} progress={progress} />
                ))}
            </div>
        </div>
    );
}
