// Types - Definições de tipos para tarefas
export interface Task {
    id: string;
    title: string;
    description: string;
    isActive: boolean;
    isPredefined: boolean;
    createdAt: Date;
    startDate: string; 
    startTime: string;
}

export interface TaskToggleEvent {
    taskId: string;
    isActive: boolean;
}

export interface CreateTaskInput {
    title: string;
    description: string;
    startDate: string;
    startTime: string;
}
