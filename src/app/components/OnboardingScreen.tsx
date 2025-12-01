"use client"

import { Sparkles } from "lucide-react"

interface OnboardingScreenProps {
  onNext: () => void
}

export function OnboardingScreen({ onNext }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#0B0B0B] via-[#1a0a2e] to-[#0B0B0B]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-30 rounded-full"></div>
            <Sparkles className="w-20 h-20 text-purple-400 relative" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
          Bem-vindo ao FinMind
        </h1>

        {/* Subtítulos */}
        <div className="space-y-4 text-gray-300">
          <p className="text-xl md:text-2xl font-light">
            O dinheiro nunca mais vai controlar a sua vida.
          </p>
          <p className="text-lg md:text-xl text-purple-300">
            Agora você terá uma IA que entende o seu estilo de vida.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={onNext}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
          >
            Começar
          </button>
          <button
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Conhecer planos
          </button>
        </div>

        {/* Decoração */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
        </div>
      </div>
    </div>
  )
}
