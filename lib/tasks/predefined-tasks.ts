// Lib - Tarefas predefinidas do sistema
import type { Task } from '@/types/task.types';

export const PREDEFINED_TASKS: Task[] = [
    {
        id: 'task-1',
        title: 'Revisar relatórios mensais',
        description:
            'Analisar e aprovar os relatórios financeiros do mês anterior',
        isActive: false,
        isPredefined: true,
        createdAt: new Date(),
        startDate: new Date().toISOString().split('T')[0],
        startTime: '09:00',
    },
    {
        id: 'task-2',
        title: 'Reunião com equipe',
        description: 'Alinhamento semanal com o time de desenvolvimento',
        isActive: false,
        isPredefined: true,
        createdAt: new Date(),
        startDate: new Date().toISOString().split('T')[0],
        startTime: '14:30',
    },
];
