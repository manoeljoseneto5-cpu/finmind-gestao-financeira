"use client"

import { AlertTriangle, AlertCircle, TrendingUp, CreditCard, Sparkles } from "lucide-react"

export function AlertsScreen() {
  const alerts = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Esse gasto é emoção",
      message: "Respira antes de confirmar a compra.",
      time: "Agora"
    },
    {
      type: "info",
      icon: TrendingUp,
      title: "Você está prestes a sair do plano",
      message: "Ajustei sua semana automaticamente.",
      time: "2h atrás"
    },
    {
      type: "danger",
      icon: AlertCircle,
      title: "Risco financeiro detectado em 5 dias",
      message: "Reduza gastos não essenciais nos próximos dias.",
      time: "5h atrás"
    },
    {
      type: "warning",
      icon: CreditCard,
      title: "Seu cartão teve um gasto incomum",
      message: "Compra de R$ 250 detectada às 22h.",
      time: "Ontem"
    }
  ]

  const getAlertStyle = (type: string) => {
    switch (type) {
      case "danger":
        return "bg-red-500/10 border-red-500/30 text-red-300"
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
      case "info":
        return "bg-purple-500/10 border-purple-500/30 text-purple-300"
      default:
        return "bg-white/5 border-purple-500/20 text-gray-300"
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "danger":
        return "text-red-400"
      case "warning":
        return "text-yellow-400"
      case "info":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-24 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            Alertas da IA
          </h1>
          <p className="text-gray-400 mt-1">Mensagens inteligentes sobre suas finanças</p>
        </div>

        {/* Alerta em destaque */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2">IA está monitorando você</h3>
              <p className="text-purple-200 text-sm">
                Estou analisando seus padrões em tempo real. Você receberá alertas personalizados baseados no seu comportamento.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de alertas */}
        <div className="space-y-4">
          {alerts.map((alert, index) => {
            const Icon = alert.icon
            return (
              <div
                key={index}
                className={`backdrop-blur-sm border rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] ${getAlertStyle(alert.type)}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 ${getIconColor(alert.type)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{alert.title}</h3>
                      <span className="text-xs text-gray-400">{alert.time}</span>
                    </div>
                    <p className="text-sm text-gray-300">{alert.message}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Configurações de alertas */}
        <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Configurar alertas</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div>
                <p className="text-gray-200 text-sm font-medium">Alertas em tempo real</p>
                <p className="text-gray-400 text-xs mt-1">Receba notificações instantâneas</p>
              </div>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div>
                <p className="text-gray-200 text-sm font-medium">Alertas noturnos</p>
                <p className="text-gray-400 text-xs mt-1">Avisos especiais após 20h</p>
              </div>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div>
                <p className="text-gray-200 text-sm font-medium">Previsões semanais</p>
                <p className="text-gray-400 text-xs mt-1">Resumo toda segunda-feira</p>
              </div>
              <div className="w-12 h-6 bg-white/20 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
