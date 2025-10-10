'use client';

import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { TaskTabs } from '@/components/dashboard/task-tabs';
import { ProgressSection } from '@/components/dashboard/progress-section';
import { DateHistorySection } from '@/components/dashboard/date-history-section';
import { BottomNavigation } from '@/components/dashboard/bottom-navigation';
import { TaskAlertNotification } from '@/components/dashboard/task-alert-notification';
import { useState } from 'react';
import type { Task } from '@/types/task.types';
import { PREDEFINED_TASKS } from '@/lib/tasks/predefined-tasks';
import {
    calculateDailyProgress,
    generateDateHistory,
} from '@/lib/progress/progress-utils';
import { useTaskNotifications } from '@/hooks/use-task-notifications';

export default function DashboardPage() {
    const [tasks, setTasks] = useState<Task[]>(PREDEFINED_TASKS);

    const progress = calculateDailyProgress(tasks);
    const dateHistory = generateDateHistory(4);

    const { currentNotification, closeNotification } =
        useTaskNotifications(tasks);

    return (
        <div className="min-h-screen bg-gray-900">
            <DashboardHeader />
            <main className="max-w-2xl mx-auto px-4 py-6 pb-20 md:pb-6 space-y-6">
                <TaskTabs tasks={tasks} onTasksChange={setTasks} />

                {/* Seção de Progresso Hoje */}
                <ProgressSection
                    completed={progress.completed}
                    total={progress.total}
                    percentage={progress.percentage}
                />

                {/* Histórico de Datas */}
                <DateHistorySection history={dateHistory} />
            </main>

            <BottomNavigation />

            {currentNotification && (
                <TaskAlertNotification
                    isOpen={true}
                    onClose={closeNotification}
                    taskTitle={currentNotification.taskTitle}
                    minutesRemaining={currentNotification.minutesRemaining}
                />
            )}
        </div>
    );
}
