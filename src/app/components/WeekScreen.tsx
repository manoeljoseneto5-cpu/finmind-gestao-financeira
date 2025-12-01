"use client"

import { AlertTriangle, CheckCircle2, TrendingDown } from "lucide-react"

export function WeekScreen() {
  const days = [
    { day: "SEG", date: "13", amount: 85, status: "ok", spent: 82 },
    { day: "TER", date: "14", amount: 87, status: "current", spent: 42 },
    { day: "QUA", date: "15", amount: 87, status: "future", spent: 0 },
    { day: "QUI", date: "16", amount: 87, status: "future", spent: 0 },
    { day: "SEX", date: "17", amount: 87, status: "future", spent: 0 },
    { day: "SÁB", date: "18", amount: 120, status: "risk", spent: 0 },
    { day: "DOM", date: "19", amount: 95, status: "future", spent: 0 },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Semana Planejada
          </h1>
          <p className="text-gray-400 mt-1">13 a 19 de Janeiro</p>
        </div>

        {/* Ajuste automático da IA */}
        <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <TrendingDown className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-purple-300 font-semibold mb-1">Ajuste automático</h3>
              <p className="text-purple-200 text-sm">
                Por causa do gasto extra no sábado passado, reduzi R$ 13/dia de segunda a quinta para equilibrar.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de dias */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {days.map((item, index) => (
            <div
              key={index}
              className={`
                relative p-5 rounded-2xl border transition-all duration-300
                ${item.status === "current" 
                  ? "bg-gradient-to-br from-purple-900/40 to-purple-800/30 border-purple-500/50 shadow-lg shadow-purple-500/20" 
                  : item.status === "ok"
                  ? "bg-green-500/10 border-green-500/30"
                  : item.status === "risk"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-white/5 border-purple-500/20"
                }
              `}
            >
              {/* Status indicator */}
              {item.status === "current" && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              )}
              {item.status === "ok" && (
                <CheckCircle2 className="absolute top-3 right-3 w-4 h-4 text-green-400" />
              )}
              {item.status === "risk" && (
                <AlertTriangle className="absolute top-3 right-3 w-4 h-4 text-yellow-400" />
              )}

              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-xs font-medium">{item.day}</p>
                  <p className="text-2xl font-bold text-white">{item.date}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">Limite</p>
                  <p className="text-xl font-bold text-purple-400">R$ {item.amount}</p>
                </div>

                {item.spent > 0 && (
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-gray-400 text-xs mb-1">Gasto</p>
                    <p className="text-sm font-semibold text-white">R$ {item.spent}</p>
                    <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                        style={{ width: `${(item.spent / item.amount) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Resumo da semana */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Resumo da semana</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Total planejado</p>
              <p className="text-2xl font-bold text-white">R$ 648</p>
            </div>
            
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Gasto até agora</p>
              <p className="text-2xl font-bold text-white">R$ 124</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <p className="text-gray-400 text-xs mb-1">Disponível na semana</p>
            <p className="text-3xl font-bold text-purple-400">R$ 524</p>
          </div>
        </div>

        {/* Zona de risco */}
        <div className="bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-yellow-300 font-semibold mb-1">Zona de risco detectada</h3>
              <p className="text-yellow-200 text-sm">
                Sábado tem limite maior. A IA identificou que você tende a gastar mais nos finais de semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
