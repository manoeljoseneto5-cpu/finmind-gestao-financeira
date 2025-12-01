"use client"

import { CheckCircle2, AlertCircle } from "lucide-react"

export function DayScreen() {
  const spent = 42.50
  const limit = 87.00
  const percentage = (spent / limit) * 100

  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Dia Financeiro
          </h1>
          <p className="text-gray-400 mt-1">Terça-feira, 14 de Janeiro</p>
        </div>

        {/* Gráfico Circular */}
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <div className="flex flex-col items-center">
            {/* Círculo de progresso */}
            <div className="relative w-48 h-48 mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="rgba(139, 92, 246, 0.1)"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="url(#gradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${percentage * 5.53} 553`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-gray-400 text-sm">Gasto hoje</p>
                <p className="text-4xl font-bold text-white">R$ {spent.toFixed(2)}</p>
                <p className="text-purple-400 text-sm mt-1">{percentage.toFixed(0)}% do limite</p>
              </div>
            </div>

            {/* Limite diário */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">Limite diário</p>
              <p className="text-2xl font-bold text-white">R$ {limit.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Mensagem da IA */}
        <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-green-300 font-semibold mb-1">Bom controle hoje!</h3>
              <p className="text-green-200 text-sm">Seus gastos impulsivos diminuíram 40%.</p>
            </div>
          </div>
        </div>

        {/* Alertas inteligentes */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Alertas do dia</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-200 text-sm">Você ainda tem R$ 44,50 disponível</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-200 text-sm">Evite gastos após 20h (seu horário de risco)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Histórico do dia */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Gastos de hoje</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border-b border-white/5">
              <div>
                <p className="text-gray-200 text-sm font-medium">Almoço</p>
                <p className="text-gray-400 text-xs">12:30</p>
              </div>
              <p className="text-white font-semibold">R$ 28,00</p>
            </div>
            
            <div className="flex items-center justify-between p-3 border-b border-white/5">
              <div>
                <p className="text-gray-200 text-sm font-medium">Café</p>
                <p className="text-gray-400 text-xs">09:15</p>
              </div>
              <p className="text-white font-semibold">R$ 8,50</p>
            </div>
            
            <div className="flex items-center justify-between p-3">
              <div>
                <p className="text-gray-200 text-sm font-medium">Transporte</p>
                <p className="text-gray-400 text-xs">07:45</p>
              </div>
              <p className="text-white font-semibold">R$ 6,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
