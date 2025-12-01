"use client"

import { TrendingUp, TrendingDown, Clock, ShoppingBag, Calendar, Brain } from "lucide-react"

export function ReportsScreen() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Relatórios Profundos
          </h1>
          <p className="text-gray-400 mt-1">Análise emocional e comportamental (Plano Ultra)</p>
        </div>

        {/* Seu mês emocional */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Seu mês emocional</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Emoção predominante</p>
              <p className="text-2xl font-bold text-white mb-1">Ansiedade</p>
              <p className="text-purple-300 text-sm">35% do tempo</p>
            </div>

            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Impacto nos gastos</p>
              <p className="text-2xl font-bold text-white mb-1">+R$ 420</p>
              <p className="text-red-300 text-sm">Gastos emocionais</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm">
            Você gastou mais quando estava ansioso, especialmente em delivery e compras online. 
            A IA identificou que 68% dos seus gastos impulsivos aconteceram em momentos de estresse.
          </p>
        </div>

        {/* Horários mais perigosos */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Horários mais perigosos</h3>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-300 font-medium">21h - 23h</span>
                <span className="text-red-400 font-bold">Alto risco</span>
              </div>
              <p className="text-gray-300 text-sm">R$ 1.240 gastos nesse horário (42% do total)</p>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-yellow-300 font-medium">19h - 21h</span>
                <span className="text-yellow-400 font-bold">Médio risco</span>
              </div>
              <p className="text-gray-300 text-sm">R$ 680 gastos nesse horário (23% do total)</p>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-300 font-medium">8h - 18h</span>
                <span className="text-green-400 font-bold">Baixo risco</span>
              </div>
              <p className="text-gray-300 text-sm">R$ 1.030 gastos nesse horário (35% do total)</p>
            </div>
          </div>
        </div>

        {/* Categorias que mais te puxam */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Categorias que mais te puxam pra baixo</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Delivery e alimentação</span>
                <span className="text-purple-400 font-semibold text-sm">R$ 1.180</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-400 w-[40%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Compras online</span>
                <span className="text-purple-400 font-semibold text-sm">R$ 850</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 w-[29%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Entretenimento</span>
                <span className="text-purple-400 font-semibold text-sm">R$ 520</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 w-[18%]"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm">Transporte</span>
                <span className="text-purple-400 font-semibold text-sm">R$ 400</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[13%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Evolução do controle */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Evolução do controle financeiro</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Mês 1</p>
              <p className="text-2xl font-bold text-white">45%</p>
              <TrendingDown className="w-4 h-4 text-red-400 mx-auto mt-1" />
            </div>

            <div className="text-center p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Mês 2</p>
              <p className="text-2xl font-bold text-white">68%</p>
              <TrendingUp className="w-4 h-4 text-yellow-400 mx-auto mt-1" />
            </div>

            <div className="text-center p-4 bg-purple-500/20 border border-purple-500/40 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Mês 3</p>
              <p className="text-2xl font-bold text-purple-400">82%</p>
              <TrendingUp className="w-4 h-4 text-green-400 mx-auto mt-1" />
            </div>
          </div>

          <p className="text-gray-300 text-sm">
            Seu controle melhorou 37% desde que começou. Continue assim! 
            A IA prevê que você atingirá 90% de controle em 2 meses.
          </p>
        </div>

        {/* Previsão próximos 3 meses */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Previsão para próximos 3 meses</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">Fevereiro</span>
                <span className="text-green-400 font-bold">+R$ 320</span>
              </div>
              <p className="text-gray-300 text-sm">Economia prevista se manter disciplina atual</p>
            </div>

            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">Março</span>
                <span className="text-green-400 font-bold">+R$ 450</span>
              </div>
              <p className="text-gray-300 text-sm">Melhora esperada com novos hábitos</p>
            </div>

            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-medium">Abril</span>
                <span className="text-green-400 font-bold">+R$ 580</span>
              </div>
              <p className="text-gray-300 text-sm">Controle consolidado, economia máxima</p>
            </div>
          </div>
        </div>

        {/* Gráfico humor x gastos */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Gráfico de humor x gastos</h3>
          
          <div className="h-64 flex items-end justify-between gap-2">
            {[
              { mood: "😊", amount: 45, color: "bg-green-500" },
              { mood: "😐", amount: 68, color: "bg-yellow-500" },
              { mood: "😰", amount: 92, color: "bg-orange-500" },
              { mood: "😔", amount: 78, color: "bg-red-500" },
              { mood: "😴", amount: 85, color: "bg-purple-500" },
            ].map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-2xl">{item.mood}</div>
                <div 
                  className={`w-full ${item.color} rounded-t-lg transition-all duration-1000`}
                  style={{ height: `${item.amount}%` }}
                ></div>
                <span className="text-gray-400 text-xs">{item.amount}%</span>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-4 text-center">
            Você gasta mais quando está ansioso ou cansado
          </p>
        </div>
      </div>
    </div>
  )
}
