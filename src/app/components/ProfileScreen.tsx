"use client"

import { Brain, Clock, ShoppingBag, TrendingUp } from "lucide-react"

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Perfil Emocional Financeiro
          </h1>
          <p className="text-gray-400 mt-1">Entenda seu comportamento com dinheiro</p>
        </div>

        {/* Perfil Principal */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-purple-500/20 rounded-2xl">
              <Brain className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Impulsivo Noturno</h2>
              <p className="text-purple-300 text-sm">Seu perfil comportamental</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Você tende a tomar decisões financeiras mais impulsivas durante a noite, especialmente após as 20h. 
            Seu controle é excelente durante o dia, mas a fadiga e o estresse acumulado podem afetar suas escolhas no período noturno.
          </p>
        </div>

        {/* Outros perfis possíveis */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Outros perfis identificados</h3>
          
          <div className="space-y-3">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-purple-300 font-medium text-sm">Equilibrado Racional</p>
              <p className="text-gray-400 text-xs mt-1">Presente em 30% das suas decisões</p>
            </div>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-purple-300 font-medium text-sm">Ansioso Planejador</p>
              <p className="text-gray-400 text-xs mt-1">Presente em 15% das suas decisões</p>
            </div>
          </div>
        </div>

        {/* Horário de maior gasto */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Horário que você mais gasta</h3>
          </div>

          <div className="space-y-4">
            {/* Gráfico de barras horizontal */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">20h - 23h</span>
                <span className="text-purple-400 font-semibold text-sm">45%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-400 w-[45%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">12h - 14h</span>
                <span className="text-purple-400 font-semibold text-sm">25%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 w-[25%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">18h - 20h</span>
                <span className="text-purple-400 font-semibold text-sm">20%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 w-[20%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Outros horários</span>
                <span className="text-purple-400 font-semibold text-sm">10%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tipo de compra */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Tipo de compra que te leva ao erro</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <span className="text-gray-200 text-sm">Delivery e comida</span>
              <span className="text-red-400 font-semibold">38%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <span className="text-gray-200 text-sm">Compras online impulsivas</span>
              <span className="text-orange-400 font-semibold">28%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <span className="text-gray-200 text-sm">Entretenimento</span>
              <span className="text-yellow-400 font-semibold">22%</span>
            </div>
          </div>
        </div>

        {/* Emoções predominantes */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Emoções predominantes</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-1">😰</p>
              <p className="text-gray-300 text-sm font-medium">Ansiedade</p>
              <p className="text-purple-400 text-xs mt-1">35%</p>
            </div>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-1">😴</p>
              <p className="text-gray-300 text-sm font-medium">Cansaço</p>
              <p className="text-purple-400 text-xs mt-1">30%</p>
            </div>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-1">😊</p>
              <p className="text-gray-300 text-sm font-medium">Felicidade</p>
              <p className="text-purple-400 text-xs mt-1">20%</p>
            </div>
            
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-1">😔</p>
              <p className="text-gray-300 text-sm font-medium">Tristeza</p>
              <p className="text-purple-400 text-xs mt-1">15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
