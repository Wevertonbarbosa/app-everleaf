// Types - Definições de tipos para tarefas
export interface Task {
    id: string;
    title: string;
    description: string;
    isActive: boolean;
    isPredefined: boolean;
    createdAt: Date;
}

export interface TaskToggleEvent {
    taskId: string;
    isActive: boolean;
}
