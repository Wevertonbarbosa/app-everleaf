// Component - Seção de sequências
'use client';

import { Flame } from 'lucide-react';
import type { StreakData } from '@/types/progress.types';

interface StreakSectionProps {
    streakData: StreakData;
}

export function StreakSection({ streakData }: StreakSectionProps) {
    return (
        <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-green-500" />
                <h2 className="text-white font-bold text-base uppercase tracking-wide">
                    Sequências
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {/* Sequência Atual */}
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="text-3xl font-bold text-green-500 mb-1">
                        {streakData.currentStreak} dias
                    </div>
                    <div className="text-xs text-gray-400">sequência atual</div>
                </div>

                {/* Maior Sequência */}
                <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="text-3xl font-bold text-green-500 mb-1">
                        {streakData.longestStreak} dias
                    </div>
                    <div className="text-xs text-gray-400">maior sequência</div>
                </div>
            </div>
        </div>
    );
}
