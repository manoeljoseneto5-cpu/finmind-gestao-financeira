"use client"

import { useState } from "react"
import { Send, Sparkles } from "lucide-react"

export function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Sou sua consultora financeira com IA. Como posso te ajudar hoje?"
    }
  ])
  const [input, setInput] = useState("")

  const exampleQuestions = [
    "Tô com vontade de gastar com besteira",
    "Como posso economizar mais?",
    "Por que gasto tanto à noite?",
    "Me ajude a criar uma meta"
  ]

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")

    // Simular resposta da IA
    setTimeout(() => {
      const responses = [
        "Isso acontece quando você tem estresse acumulado. Respire 30s. Vamos ajustar sua meta de hoje para aliviar sua ansiedade.",
        "Identifiquei que você pode economizar R$ 280/mês reduzindo delivery. Quer que eu crie um plano?",
        "Seus gastos noturnos estão ligados à fadiga. Vou configurar alertas especiais após 20h para te ajudar.",
        "Ótimo! Qual é seu objetivo? Me conte o valor e o prazo que você tem em mente."
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] pb-32 px-4 md:px-6 pt-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Consultoria IA 24h
              </h1>
              <p className="text-gray-400 text-sm">Plano Ultra • Sempre disponível</p>
            </div>
          </div>
        </div>

        {/* Perguntas rápidas */}
        {messages.length <= 1 && (
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
            <p className="text-gray-400 text-sm mb-4">Perguntas rápidas:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl text-left text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat messages */}
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                    : "bg-white/5 backdrop-blur-sm border border-purple-500/20 text-gray-200"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 text-xs font-semibold">IA Financeira</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recursos da IA */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">O que posso fazer por você:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <span className="text-xl">💡</span>
              <div>
                <p className="text-purple-300 text-sm font-medium">Conselhos personalizados</p>
                <p className="text-gray-400 text-xs">Baseados no seu perfil</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-purple-300 text-sm font-medium">Ajustes na hora</p>
                <p className="text-gray-400 text-xs">Reorganizo seu planejamento</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-purple-300 text-sm font-medium">Sugestões de hábitos</p>
                <p className="text-gray-400 text-xs">Para melhorar seu controle</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <span className="text-xl">🧠</span>
              <div>
                <p className="text-purple-300 text-sm font-medium">Análise emocional</p>
                <p className="text-gray-400 text-xs">Entendo seus gatilhos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input fixo */}
      <div className="fixed bottom-20 left-0 right-0 px-4 md:px-6 pb-4 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B] to-transparent pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua pergunta..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-3"
            />
            <button
              onClick={handleSend}
              className="p-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
