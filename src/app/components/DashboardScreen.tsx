"use client"

import { TrendingUp, TrendingDown, AlertTriangle, Sparkles } from "lucide-react"

export function DashboardScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-1">Visão geral das suas finanças</p>
        </div>

        {/* Saldo e Previsão */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Previsão de final do mês</p>
              <h2 className="text-4xl font-bold text-white">R$ 1.847,00</h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Baixo</span>
            </div>
          </div>
          
          {/* Barômetro Emocional */}
          <div className="mt-6 pt-6 border-t border-purple-500/20">
            <p className="text-gray-400 text-sm mb-3">Barômetro emocional do mês</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500 w-[65%]"></div>
              </div>
              <span className="text-sm text-gray-300">Estável</span>
            </div>
          </div>
        </div>

        {/* Quanto pode gastar hoje */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-2">Quanto você pode gastar HOJE</p>
          <h3 className="text-5xl font-bold text-purple-400 mb-3">R$ 87,00</h3>
          <p className="text-gray-300 text-sm">Dentro do plano. Boa disciplina até agora.</p>
        </div>

        {/* Previsões da IA */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Previsões da IA</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-yellow-200 text-sm">Risco de aperto no dia 22.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <TrendingUp className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-purple-200 text-sm">Seu gasto emocional subiu 12% nas últimas 48h.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5">
            <p className="text-gray-400 text-xs mb-1">Gastos do mês</p>
            <p className="text-2xl font-bold text-white">R$ 2.153</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingDown className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs">-8% vs mês anterior</span>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5">
            <p className="text-gray-400 text-xs mb-1">Economia</p>
            <p className="text-2xl font-bold text-white">R$ 847</p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs">+15% vs mês anterior</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
