// Component - Formulário de registro
'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RegisterFormProps {
    onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validações
        if (name.trim().length < 2) {
            setError('Nome deve ter no mínimo 2 caracteres');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Email inválido');
            return;
        }

        if (password.length < 6) {
            setError('Senha deve ter no mínimo 6 caracteres');
            return;
        }

        setLoading(true);

        // Simulação de delay de API
        await new Promise((resolve) => setTimeout(resolve, 800));

        setLoading(false);
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="register-name" className="text-gray-300">
                    Nome ou Apelido
                </Label>
                <Input
                    id="register-name"
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500"
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="register-email" className="text-gray-300">
                    Email
                </Label>
                <Input
                    id="register-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-green-500"
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="register-password" className="text-gray-300">
                    Senha
                </Label>
                <Input
                    id="register-password"
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
                {loading ? 'Criando conta...' : 'Criar Conta'}
            </Button>
        </form>
    );
}
