'use client';

import { Home, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';

type NavItem = 'tarefas' | 'progresso' | 'perfil';

interface BottomNavigationProps {
    activeTab?: NavItem;
    onTabChange?: (tab: NavItem) => void;
}

export function BottomNavigation({
    activeTab = 'tarefas',
    onTabChange,
}: BottomNavigationProps) {
    const [active, setActive] = useState<NavItem>(activeTab);

    const handleTabClick = (tab: NavItem) => {
        setActive(tab);
        onTabChange?.(tab);
    };

    const navItems = [
        {
            id: 'tarefas' as NavItem,
            label: 'TAREFAS',
            icon: Home,
        },
        {
            id: 'progresso' as NavItem,
            label: 'PROGRESSO',
            icon: TrendingUp,
        },
        {
            id: 'perfil' as NavItem,
            label: 'PERFIL',
            icon: User,
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
            <div className="flex items-center justify-around h-16 max-w-2xl mx-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
                        >
                            <Icon
                                className={`w-6 h-6 mb-1 transition-colors ${
                                    isActive
                                        ? 'text-green-500'
                                        : 'text-gray-400'
                                }`}
                            />
                            <span
                                className={`text-xs font-medium transition-colors ${
                                    isActive
                                        ? 'text-green-500'
                                        : 'text-gray-400'
                                }`}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
