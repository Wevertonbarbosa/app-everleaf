export interface DailyProgress {
    date: string; 
    completedTasks: number;
    totalTasks: number;
    percentage: number;
}

export interface StreakData {
    currentStreak: number;
    longestStreak: number;
}
