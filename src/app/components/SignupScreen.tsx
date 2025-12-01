"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface SignupScreenProps {
  onComplete: (profile: any) => void
}

export function SignupScreen({ onComplete }: SignupScreenProps) {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState({
    income: "",
    challenge: "",
    feeling: "",
    nightSpender: "",
    goalType: ""
  })

  const questions = [
    {
      question: "Qual sua renda média?",
      field: "income",
      options: ["Até R$ 2.000", "R$ 2.000 - R$ 5.000", "R$ 5.000 - R$ 10.000", "Acima de R$ 10.000"]
    },
    {
      question: "Qual seu maior desafio com dinheiro?",
      field: "challenge",
      options: ["Controlar gastos", "Poupar", "Investir", "Pagar dívidas"]
    },
    {
      question: "Como você se sente ao pensar sobre finanças?",
      field: "feeling",
      options: ["Ansioso", "Confiante", "Confuso", "Estressado"]
    },
    {
      question: "Você costuma gastar mais à noite?",
      field: "nightSpender",
      options: ["Sim, muito", "Às vezes", "Raramente", "Nunca"]
    },
    {
      question: "Prefere metas rígidas ou flexíveis?",
      field: "goalType",
      options: ["Rígidas", "Flexíveis", "Equilibradas", "Não sei"]
    }
  ]

  const currentQuestion = questions[step]

  const handleSelect = (value: string) => {
    const newProfile = { ...profile, [currentQuestion.field]: value }
    setProfile(newProfile)

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => onComplete(newProfile), 300)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0B0B0B]">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between mb-2 text-sm text-gray-400">
            <span>Pergunta {step + 1} de {questions.length}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full p-5 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl text-left hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-200 group-hover:text-white transition-colors">
                  {option}
                </span>
                <ChevronRight className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {/* Skip */}
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-8 text-gray-400 hover:text-purple-400 transition-colors text-sm"
          >
            ← Voltar
          </button>
        )}
      </div>
    </div>
  )
}
