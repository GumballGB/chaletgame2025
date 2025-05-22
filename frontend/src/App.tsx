"use client"

import { useState } from "react";
import { Button } from "./components/Button";
import { Bomb, Zap, Sparkles, Brain, Lightbulb, X } from "lucide-react";

export default function QuizLanding() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div className="min-h-screen bg-yellow-300 overflow-x-hidden font-comic relative flex flex-col items-center justify-center">
      {/* Random shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-pink-500 rounded-full opacity-70 animate-bounce"></div>

      <header className="container mx-auto py-6 flex justify-center items-center relative z-30">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Bomb className="h-8 w-8 text-red-600 animate-bounce" />
            <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-spin" />
          </div>
          <span className="text-2xl font-extrabold text-blue-600 tracking-tight rotate-2 transform hover:rotate-0 transition-transform">
            Quiz Chalet!
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-blue-600 inline-block transform -rotate-2">Quiz</span>
            <span className="text-red-600 inline-block transform rotate-2">Chalet 2025!</span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-extrabold text-2xl px-12 py-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform w-64"
          >
            PLAY
          </Button>

          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-xl px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform w-48"
            onClick={() => setShowRules(true)}
          >
            RULES
          </Button>
        </div>
      </main>

      {/* Rules Modal */}
      {showRules && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-blue-600 rounded-xl p-6 max-w-md w-full relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-2 h-8 w-8 p-0"
              onClick={() => setShowRules(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <h2 className="text-2xl font-extrabold text-red-600 mb-4">Rule of the Chalet Quiz</h2>

            <div className="space-y-4">
              <div className="bg-yellow-100 p-3 rounded-lg border-2 border-yellow-500">
                <h3 className="font-bold text-lg text-yellow-700">Rule #1</h3>
                <p></p>
              </div>

              <div className="bg-blue-100 p-3 rounded-lg border-2 border-blue-500">
                <h3 className="font-bold text-lg text-blue-700">Rule #2</h3>
                <p></p>
              </div>

              <div className="bg-green-100 p-3 rounded-lg border-2 border-green-500">
                <h3 className="font-bold text-lg text-green-700">Rule #3</h3>
                <p></p>
              </div>

              <div className="bg-purple-100 p-3 rounded-lg border-2 border-purple-500">
                <h3 className="font-bold text-lg text-purple-700">Rule #4</h3>
                <p></p>
              </div>
            </div>

            <Button
              className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-bold"
              onClick={() => setShowRules(false)}
            >
              I understand (or not!)
            </Button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section id="regles" className="py-16 bg-blue-500 transform -rotate-1 my-12">
        <div className="container mx-auto transform rotate-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
            Why this quiz?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title: "Test your knowledge!",
                description: "Do you know the Chalet lore? Prove it!",
                color: "bg-yellow-300",
                rotate: "rotate-2",
              },
              {
                icon: <Bomb className="h-12 w-12 text-red-600" />,
                title: "Win prizes!",
                description: "Winners gets to eat a meal prepared by chef Jesse Boyle!",
                color: "bg-green-300",
                rotate: "-rotate-1",
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
                title: " Remeber the good ol' times",
                description: " Relive the best moments of the Chalet!",
                color: "bg-pink-300",
                rotate: "rotate-1",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-6 rounded-xl border-4 border-blue-600 shadow-lg transform ${feature.rotate} hover:scale-105 transition-transform`}
              >
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-center mb-3 text-blue-700">{feature.title}</h3>
                <p className="text-center font-bold text-blue-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hatersm section */}
      <section id="astuces" className="py-16 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-purple-600">
            Our <span className="line-through">Haters</span> Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    image: "1",
                    title: "Hugo Leduc-Bergeron",
                    description: " ",
                    color: "bg-red-500",
                  },
                  {
                    image: "2",
                    title: "Samuel Francisco Brouillette",
                    description: " ",
                    color: "bg-blue-500",
                  },
                  {
                    image: "3",
                    title: "Sophia Carbone",
                    description: " ",
                    color: "bg-green-500",
                  },
                  {
                    image: "4",
                    title: "Zachary Roy",
                    description: "Jobless AHHHH quiz",
                    color: "bg-purple-500",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg transform rotate-${index % 2 === 0 ? "3" : "-3"}`}
                    >
                      {step.image ? (
                        <img src={step.image} alt={step.title} className="w-10 h-10 rounded-full object-cover" />
                      ) : null}
                    </div>
                    <div className="bg-white border-4 border-blue-600 rounded-xl p-4 shadow-md transform hover:rotate-1 transition-transform flex-1">
                      <h3 className="text-xl font-extrabold mb-2 text-blue-700">{step.title}</h3>
                      <p className="text-purple-900 font-bold">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-white border-4 border-purple-600 rounded-xl p-4 shadow-xl transform -rotate-2">              <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Démonstration du jeu impossible"
                  className="rounded-lg w-full h-auto"
                />
                <div
                  className="absolute cursor-pointer"
                  style={{
                    top: "30%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                    COOL!
                  </div>
                </div>
                <div
                  className="absolute cursor-pointer"
                  style={{
                    bottom: "20%",
                    right: "25%",
                    transform: "translate(50%, 50%)",
                  }}
                >
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                    WAWW!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="bg-white border-4 border-red-600 rounded-xl p-8 shadow-xl max-w-3xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-600">Ready To Play?</h2>
            <p className="text-xl font-bold text-blue-700 mb-8">
              Join thousands of players to have a chance of winning a meal prepared by chef Jesse Boyle!
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-xl p-8 rounded-xl shadow-lg animate-bounce"
            >
              <Zap className="mr-2 h-6 w-6" /> TRY YOURM LUCK! <Zap className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 left-10 text-9xl font-extrabold text-green-400 opacity-20 transform rotate-12">
          ?
        </div>
        <div className="absolute bottom-1/3 right-10 text-9xl font-extrabold text-red-400 opacity-20 transform -rotate-12">
          !
        </div>
      </section>
    </div>
  )
}

