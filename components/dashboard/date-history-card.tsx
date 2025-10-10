// Component - Card de histórico de data
'use client';

import type { DailyProgress } from '@/types/progress.types';

interface DateHistoryCardProps {
    progress: DailyProgress;
}

export function DateHistoryCard({ progress }: DateHistoryCardProps) {
    return (
        <div className="bg-white rounded-xl p-4 border border-gray-200 min-w-[140px]">
            <div className="text-gray-900 font-bold text-base mb-1">
                {progress.date}
            </div>
            <div className="text-gray-500 text-sm">
                {progress.completedTasks}/{progress.totalTasks} tarefas (
                {progress.percentage}%)
            </div>
        </div>
    );
}
