// Component - Tabs para alternar entre login e registro
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { useToast } from '@/hooks/use-toast';

export function AuthTabs() {
    const [activeTab, setActiveTab] = useState('login');
    const { toast } = useToast();

    const handleRegisterSuccess = () => {
        toast({
            title: 'Conta criada!',
            description: 'Sua conta foi criada com sucesso',
            className: 'bg-green-500 text-gray-900 border-green-600',
        });
        setActiveTab('login');
    };

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800 border border-gray-700">
                <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-gray-900 text-gray-400"
                >
                    Login
                </TabsTrigger>
                <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-gray-900 text-gray-400"
                >
                    Criar Conta
                </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Bem-vindo de volta
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Entre com suas credenciais para acessar sua conta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="register">
                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">
                            Criar nova conta
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Preencha os dados abaixo para começar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm onSuccess={handleRegisterSuccess} />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
