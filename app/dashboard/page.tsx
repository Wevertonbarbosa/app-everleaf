// Page - Dashboard de tarefas do dia
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { TaskList } from '@/components/dashboard/task-list';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-900">
            <DashboardHeader />
            <main className="max-w-2xl mx-auto px-4 py-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Tarefas de Hoje
                    </h2>
                    <p className="text-gray-400 text-sm">
                        {new Date().toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
                <TaskList />
            </main>
        </div>
    );
}
