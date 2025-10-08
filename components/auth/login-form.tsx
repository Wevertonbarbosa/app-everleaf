// Component - Formulário de login
'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const VALID_EMAIL = 'suporte@everleaf.com';
const VALID_PASSWORD = 'suporte';

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Email inválido');
            return;
        }

        setLoading(true);

        // Simulação de delay de API
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            router.push('/dashboard');
        } else {
            setLoading(false);
            setError('Email ou senha inválidos');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="login-email" className="text-gray-300">
                    Email
                </Label>
                <Input
                    id="login-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500"
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="login-password" className="text-gray-300">
                    Senha
                </Label>
                <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500"
                    required
                />
            </div>

            {error && (
                <div className="text-red-400 text-sm bg-red-950/30 border border-red-900 rounded-lg p-3">
                    {error}
                </div>
            )}

            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-semibold"
            >
                {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
                Demo: suporte@everleaf.com / suporte
            </p>
        </form>
    );
}
