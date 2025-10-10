// Page - Página principal de autenticação
import { Logo } from '@/components/auth/logo';
import { AuthTabs } from '@/components/auth/auth-tabs';
import { Toaster } from '@/components/ui/toaster';

export default function AuthPage() {
    return (
        <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Logo />
                <AuthTabs />
            </div>
            <Toaster />
        </main>
    );
}
