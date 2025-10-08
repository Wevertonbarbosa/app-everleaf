import type { LoginCredentials, RegisterData, AuthResponse } from "@/types/auth.types"

const VALID_EMAIL = "suporte@everleaf.com"
const VALID_PASSWORD = "suporte"

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // Simulação de delay de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (credentials.email === VALID_EMAIL && credentials.password === VALID_PASSWORD) {
    return {
      success: true,
      message: "Login realizado com sucesso!",
    }
  }

  return {
    success: false,
    message: "Email ou senha inválidos",
  }
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  // Simulação de delay de API
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Validação básica
  if (!data.name || !data.email || !data.password) {
    return {
      success: false,
      message: "Todos os campos são obrigatórios",
    }
  }

  if (data.password.length < 6) {
    return {
      success: false,
      message: "A senha deve ter no mínimo 6 caracteres",
    }
  }

  return {
    success: true,
    message: "Conta criada com sucesso!",
  }
}
