"use client"

import { Check, Sparkles, Zap, Crown } from "lucide-react"

export function PlansScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">
            Escolha seu plano
          </h1>
          <p className="text-gray-400 text-lg">Controle financeiro com inteligência artificial</p>
        </div>

        {/* Planos */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Plano Premium */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Premium</h2>
                <p className="text-gray-400 text-sm">Para quem quer controle real</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">R$ 39,90</span>
                <span className="text-gray-400">/mês</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">IA ativa analisando seu comportamento</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Alertas inteligentes em tempo real</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Planejamento semanal automático</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Perfil emocional financeiro</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Objetivos com simulações</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">Modo vida real (recuperação automática)</p>
              </div>
            </div>

            <button className="w-full p-4 bg-purple-600/20 border border-purple-500/50 rounded-xl font-semibold hover:bg-purple-600/30 transition-all duration-300">
              Assinar Premium
            </button>
          </div>

          {/* Plano Ultra */}
          <div className="relative bg-gradient-to-br from-purple-900/50 to-purple-800/40 backdrop-blur-sm border-2 border-purple-500/60 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            {/* Badge recomendado */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-1 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-xs font-bold text-white shadow-lg">
                RECOMENDADO
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl shadow-lg shadow-purple-500/50">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Ultra</h2>
                <p className="text-purple-300 text-sm">Análise emocional profunda</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">R$ 69,90</span>
                <span className="text-purple-300">/mês</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm font-medium">Tudo do Premium +</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Relatórios mensais profundos</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Análise de humor x gastos</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Previsão para próximos 3 meses</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Consultoria IA 24h via chat</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Sugestões de hábitos personalizadas</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm">Suporte prioritário</p>
              </div>
            </div>

            <button className="w-full p-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-[1.02]">
              Assinar Ultra
            </button>
          </div>
        </div>

        {/* Comparação */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Por que escolher o Ultra?</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-2">🧠</p>
              <p className="text-purple-300 font-medium text-sm mb-1">Análise Profunda</p>
              <p className="text-gray-400 text-xs">Entenda seus padrões emocionais</p>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-2">💬</p>
              <p className="text-purple-300 font-medium text-sm mb-1">Chat 24h</p>
              <p className="text-gray-400 text-xs">IA sempre disponível para ajudar</p>
            </div>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
              <p className="text-3xl mb-2">📊</p>
              <p className="text-purple-300 font-medium text-sm mb-1">Relatórios</p>
              <p className="text-gray-400 text-xs">Insights mensais detalhados</p>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            ✨ 7 dias de garantia • Cancele quando quiser • Sem taxas ocultas
          </p>
        </div>
      </div>
    </div>
  )
}
