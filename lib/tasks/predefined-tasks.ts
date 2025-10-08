// Lib - Tarefas predefinidas do sistema
import { Task } from "@/types/task.types";

export const PREDEFINED_TASKS: Task[] = [
    {
        id: 'task-1',
        title: 'Revisar relatórios mensais',
        description:
            'Analisar e aprovar os relatórios financeiros do mês anterior',
        isActive: false,
        isPredefined: true,
        createdAt: new Date(),
    },
    {
        id: 'task-2',
        title: 'Reunião com equipe',
        description: 'Alinhamento semanal com o time de desenvolvimento',
        isActive: false,
        isPredefined: true,
        createdAt: new Date(),
    },
];
