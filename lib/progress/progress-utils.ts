// Utils - Funções utilitárias para cálculo de progresso
import type { Task } from '@/types/task.types';
import type { DailyProgress, StreakData } from '@/types/progress.types';

export function calculateDailyProgress(tasks: Task[]): {
    completed: number;
    total: number;
    percentage: number;
} {
    const activeTasks = tasks.filter((task) => task.isActive);
    const total = activeTasks.length;
    const completed = 0; // Por enquanto, nenhuma tarefa está completa
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { completed, total, percentage };
}

export function getStreakData(): StreakData {
    // Por enquanto retorna valores iniciais
    // Futuramente pode buscar do localStorage ou API
    return {
        currentStreak: 0,
        longestStreak: 0,
    };
}

export function generateDateHistory(days = 4): DailyProgress[] {
    const history: DailyProgress[] = [];
    const today = new Date();

    for (let i = 0; i < days; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        history.push({
            date: date.toLocaleDateString('pt-BR'),
            completedTasks: 0,
            totalTasks: 0,
            percentage: 0,
        });
    }

    return history;
}
