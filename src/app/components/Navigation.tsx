"use client"

import { Home, Calendar, TrendingUp, User, Settings, Bell, Target } from "lucide-react"
import type { Screen } from "../page"

interface NavigationProps {
  currentScreen: Screen
  onNavigate: (screen: Screen) => void
}

export function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "dashboard" as Screen, icon: Home, label: "Início" },
    { id: "day" as Screen, icon: Calendar, label: "Dia" },
    { id: "goals" as Screen, icon: Target, label: "Metas" },
    { id: "profile" as Screen, icon: User, label: "Perfil" },
    { id: "settings" as Screen, icon: Settings, label: "Config" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-gray-900 to-gray-900/95 border-t border-purple-500/20 backdrop-blur-lg">
      <div className="flex items-center justify-around px-4 py-3 max-w-2xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive 
                  ? "text-purple-400 bg-purple-500/10" 
                  : "text-gray-400 hover:text-purple-300"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""} transition-transform`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
