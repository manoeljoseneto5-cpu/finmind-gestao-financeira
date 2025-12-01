"use client"

import { useState } from "react"
import { OnboardingScreen } from "./components/OnboardingScreen"
import { SignupScreen } from "./components/SignupScreen"
import { DashboardScreen } from "./components/DashboardScreen"
import { DayScreen } from "./components/DayScreen"
import { WeekScreen } from "./components/WeekScreen"
import { ProfileScreen } from "./components/ProfileScreen"
import { AlertsScreen } from "./components/AlertsScreen"
import { GoalsScreen } from "./components/GoalsScreen"
import { RecoveryScreen } from "./components/RecoveryScreen"
import { PlansScreen } from "./components/PlansScreen"
import { ReportsScreen } from "./components/ReportsScreen"
import { ChatScreen } from "./components/ChatScreen"
import { SettingsScreen } from "./components/SettingsScreen"
import { Navigation } from "./components/Navigation"

export type Screen = 
  | "onboarding" 
  | "signup" 
  | "dashboard" 
  | "day" 
  | "week" 
  | "profile" 
  | "alerts" 
  | "goals" 
  | "recovery" 
  | "plans" 
  | "reports" 
  | "chat" 
  | "settings"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("onboarding")
  const [userProfile, setUserProfile] = useState({
    income: "",
    challenge: "",
    feeling: "",
    nightSpender: "",
    goalType: ""
  })

  const renderScreen = () => {
    switch (currentScreen) {
      case "onboarding":
        return <OnboardingScreen onNext={() => setCurrentScreen("signup")} />
      case "signup":
        return <SignupScreen 
          onComplete={(profile) => {
            setUserProfile(profile)
            setCurrentScreen("dashboard")
          }} 
        />
      case "dashboard":
        return <DashboardScreen />
      case "day":
        return <DayScreen />
      case "week":
        return <WeekScreen />
      case "profile":
        return <ProfileScreen />
      case "alerts":
        return <AlertsScreen />
      case "goals":
        return <GoalsScreen />
      case "recovery":
        return <RecoveryScreen />
      case "plans":
        return <PlansScreen />
      case "reports":
        return <ReportsScreen />
      case "chat":
        return <ChatScreen />
      case "settings":
        return <SettingsScreen />
      default:
        return <OnboardingScreen onNext={() => setCurrentScreen("signup")} />
    }
  }

  const showNavigation = !["onboarding", "signup"].includes(currentScreen)

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {renderScreen()}
      {showNavigation && <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </div>
  )
}
