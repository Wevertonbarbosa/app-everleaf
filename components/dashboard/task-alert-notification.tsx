'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Clock } from 'lucide-react';

interface TaskAlertNotificationProps {
    isOpen: boolean;
    onClose: () => void;
    taskTitle: string;
    minutesRemaining: number;
}

export function TaskAlertNotification({
    isOpen,
    onClose,
    taskTitle,
    minutesRemaining,
}: TaskAlertNotificationProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md bg-gray-800 border-green-500 border-2">
                <AlertDialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-green-500/20 rounded-full">
                            <Clock className="w-6 h-6 text-green-500" />
                        </div>
                        <AlertDialogTitle className="text-xl text-white">
                            Lembrete de Tarefa
                        </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-gray-300 text-base pt-2">
                        <span className="font-semibold text-green-500">
                            "{taskTitle}"
                        </span>{' '}
                        começa em{' '}
                        <span className="font-bold text-green-400">
                            {minutesRemaining} minuto
                            {minutesRemaining !== 1 ? 's' : ''}
                        </span>
                        !
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={onClose}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full sm:w-auto"
                    >
                        Entendi
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
