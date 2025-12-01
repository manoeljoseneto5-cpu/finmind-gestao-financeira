"use client"

import { RefreshCw, Sparkles } from "lucide-react"

export function RecoveryScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-purple-500/20 rounded-2xl">
              <RefreshCw className="w-12 h-12 text-purple-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Modo Vida Real
          </h1>
          <p className="text-gray-400 mt-2">Quando você erra, a gente reorganiza</p>
        </div>

        {/* Mensagem principal */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Aconteceu. Tudo bem.
          </h2>
          <p className="text-2xl text-purple-300 mb-6">
            Vamos reorganizar.
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A vida não é perfeita, e suas finanças também não precisam ser. 
            A IA vai recalcular automaticamente o resto do mês para você voltar aos trilhos.
          </p>
        </div>

        {/* Situação detectada */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Situação detectada</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-red-300 font-medium mb-1">Gasto extra identificado</p>
              <p className="text-gray-300 text-sm">R$ 350,00 acima do planejado no fim de semana</p>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 font-medium mb-1">Impacto no mês</p>
              <p className="text-gray-300 text-sm">Sem ajustes, você ficaria R$ 180 negativo no dia 28</p>
            </div>
          </div>
        </div>

        {/* Plano de recuperação */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Plano de recuperação da IA</h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-green-300 font-medium">Ajuste diário</p>
                <span className="text-green-400 font-bold">-R$ 18/dia</span>
              </div>
              <p className="text-gray-300 text-sm">Reduzi seu limite diário nos próximos 14 dias</p>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-purple-300 font-medium">Novo limite diário</p>
                <span className="text-purple-400 font-bold">R$ 69/dia</span>
              </div>
              <p className="text-gray-300 text-sm">Antes era R$ 87/dia</p>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-blue-300 font-medium">Previsão de recuperação</p>
                <span className="text-blue-400 font-bold">14 dias</span>
              </div>
              <p className="text-gray-300 text-sm">Você volta ao normal no dia 28</p>
            </div>
          </div>
        </div>

        {/* Dicas da IA */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Dicas para não repetir</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm font-bold">1</span>
              </div>
              <p className="text-gray-300 text-sm">Evite decisões financeiras após 20h (seu horário de maior risco)</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm font-bold">2</span>
              </div>
              <p className="text-gray-300 text-sm">Configure alertas para compras acima de R$ 100</p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-sm font-bold">3</span>
              </div>
              <p className="text-gray-300 text-sm">Respire 30 segundos antes de confirmar compras impulsivas</p>
            </div>
          </div>
        </div>

        {/* Botão de confirmação */}
        <button className="w-full p-5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]">
          Entendi, vamos reorganizar
        </button>
      </div>
    </div>
  )
}
