// Component - Header do dashboard
'use client';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function DashboardHeader() {
    const router = useRouter();

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <svg
                        className="w-8 h-8 text-green-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 21.35c-4.42 0-8-3.58-8-8 0-4.42 3.58-8 8-8s8 3.58 8 8c0 4.42-3.58 8-8 8zM12 5.35c-2.93 0-5.32 2.39-5.32 5.35 0 1.93.99 3.65 2.5 4.67C9.18 16.31 10.5 17 12 17c1.5 0 2.82-.69 3.82-1.63 1.51-1.02 2.5-2.74 2.5-4.67 0-2.96-2.39-5.35-5.32-5.35z" />
                    </svg>
                    <h1 className="text-xl font-bold text-green-500">
                        EverLeaf
                    </h1>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                    <LogOut className="w-5 h-5" />
                </Button>
            </div>
        </header>
    );
}
