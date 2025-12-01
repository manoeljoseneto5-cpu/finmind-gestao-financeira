"use client"

import { Target, TrendingUp, Calendar, Zap } from "lucide-react"

export function GoalsScreen() {
  const goals = [
    {
      name: "Moto 160cc",
      target: 15000,
      current: 3200,
      months: 11,
      status: "Estável, porém com risco médio nos fins de semana",
      speed: "normal"
    },
    {
      name: "Viagem para o Nordeste",
      target: 5000,
      current: 1800,
      months: 6,
      status: "Ótimo progresso, mantendo disciplina",
      speed: "fast"
    },
    {
      name: "Reserva de emergência",
      target: 10000,
      current: 4500,
      months: 8,
      status: "Progresso lento, considere aumentar aportes",
      speed: "slow"
    }
  ]

  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case "fast":
        return "text-green-400 bg-green-500/10 border-green-500/30"
      case "slow":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30"
      default:
        return "text-purple-400 bg-purple-500/10 border-purple-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Objetivos Premium
          </h1>
          <p className="text-gray-400 mt-1">Suas metas financeiras com IA</p>
        </div>

        {/* Botão adicionar objetivo */}
        <button className="w-full p-5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]">
          + Adicionar novo objetivo
        </button>

        {/* Lista de objetivos */}
        <div className="space-y-6">
          {goals.map((goal, index) => {
            const percentage = (goal.current / goal.target) * 100
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                {/* Header do objetivo */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{goal.name}</h3>
                      <p className="text-gray-400 text-sm">Meta: R$ {goal.target.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getSpeedColor(goal.speed)}`}>
                    {goal.speed === "fast" ? "Rápido" : goal.speed === "slow" ? "Lento" : "Normal"}
                  </div>
                </div>

                {/* Progresso */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Progresso</span>
                    <span className="text-purple-400 font-semibold text-sm">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-xs">R$ {goal.current.toLocaleString()}</span>
                    <span className="text-gray-400 text-xs">R$ {goal.target.toLocaleString()}</span>
                  </div>
                </div>

                {/* Linha do tempo */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm">Conclusão estimada: <span className="text-purple-400 font-semibold">{goal.months} meses</span></span>
                </div>

                {/* Status da IA */}
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <p className="text-gray-300 text-sm">
                    <span className="text-purple-400 font-semibold">Comportamento:</span> {goal.status}
                  </p>
                </div>

                {/* Simulações */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-xs mb-3">Simulações de velocidade:</p>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl hover:bg-yellow-500/20 transition-all">
                      <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                      <p className="text-yellow-400 text-xs font-medium">Lenta</p>
                      <p className="text-gray-400 text-xs">{goal.months + 6}m</p>
                    </button>
                    
                    <button className="p-3 bg-purple-500/20 border border-purple-500/40 rounded-xl hover:bg-purple-500/30 transition-all">
                      <TrendingUp className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                      <p className="text-purple-400 text-xs font-medium">Normal</p>
                      <p className="text-gray-400 text-xs">{goal.months}m</p>
                    </button>
                    
                    <button className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl hover:bg-green-500/20 transition-all">
                      <Zap className="w-4 h-4 text-green-400 mx-auto mb-1" />
                      <p className="text-green-400 text-xs font-medium">Agressiva</p>
                      <p className="text-gray-400 text-xs">{Math.max(3, goal.months - 3)}m</p>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
