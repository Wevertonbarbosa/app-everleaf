// Lib - Utilitários para manipulação de tarefas
import type { Task } from '@/types/task.types';

export function sortTasksByTime(tasks: Task[]): Task[] {
    return [...tasks].sort((a, b) => {
        // Primeiro ordena por data
        const dateComparison = a.startDate.localeCompare(b.startDate);
        if (dateComparison !== 0) return dateComparison;

        // Se as datas forem iguais, ordena por horário
        return a.startTime.localeCompare(b.startTime);
    });
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
    });
}

export function formatTime(timeString: string): string {
    return timeString;
}
