"use client"

import { Bell, CreditCard, Building2, Vibrate, Moon, Sun, Lock, User, LogOut } from "lucide-react"

export function SettingsScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900/40 to-purple-600/20 p-6 pb-8">
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-purple-200/80">Personalize sua experiência</p>
      </div>

      {/* Settings Sections */}
      <div className="p-6 space-y-6">
        
        {/* Conta */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            Conta
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <span>Editar Perfil</span>
              <span className="text-purple-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <span>Alterar Senha</span>
              <span className="text-purple-400">→</span>
            </button>
          </div>
        </div>

        {/* Notificações */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-400" />
            Notificações
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
              <span>Alertas de Gastos</span>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
              <span>Previsões da IA</span>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
              <span>Lembretes de Metas</span>
              <div className="w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Conexões */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-purple-400" />
            Conexões
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-purple-400" />
                <span>Cartões Conectados</span>
              </div>
              <span className="text-purple-400">2</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-purple-400" />
                <span>Contas Bancárias</span>
              </div>
              <span className="text-purple-400">1</span>
            </button>
          </div>
        </div>

        {/* Aparência */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Moon className="w-5 h-5 text-purple-400" />
            Aparência
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
              <span>Modo Escuro</span>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <div className="flex items-center gap-3">
                <Vibrate className="w-5 h-5 text-purple-400" />
                <span>Vibração</span>
              </div>
              <span className="text-purple-400">Ativada</span>
            </button>
          </div>
        </div>

        {/* Segurança */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 border border-purple-500/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-400" />
            Segurança
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <span>Autenticação Biométrica</span>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all">
              <span>PIN de Segurança</span>
              <span className="text-purple-400">→</span>
            </button>
          </div>
        </div>

        {/* Sair */}
        <button className="w-full bg-red-600/20 border border-red-500/30 rounded-2xl p-4 flex items-center justify-center gap-2 hover:bg-red-600/30 transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Sair da Conta</span>
        </button>

        {/* Versão */}
        <div className="text-center text-gray-500 text-sm pt-4">
          FinMind v1.0.0
        </div>
      </div>
    </div>
  )
}
