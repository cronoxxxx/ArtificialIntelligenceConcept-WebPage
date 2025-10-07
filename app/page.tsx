"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { TitleSlide } from "@/components/slides/title-slide"
import { IndexSlide } from "@/components/slides/index-slide"
import { OriginsSlide } from "@/components/slides/origins-slide"
import { EarlyDevelopmentSlide } from "@/components/slides/early-development-slide"
import { WhatIsAISlide } from "@/components/slides/what-is-ai-slide"
import { MachineLearningSlide } from "@/components/slides/machine-learning-slide"
import { VideoSlideML } from "@/components/slides/video-slide-ml"
import { SemanticLearningSlide } from "@/components/slides/semantic-learning-slide"
import { NeuralNetworksSlide } from "@/components/slides/neural-networks-slide"
import { HowMLWorksSlide } from "@/components/slides/how-ml-works-slide"
import { KeyFiguresSlide } from "@/components/slides/key-figures-slide"
import { AICompaniesSlide } from "@/components/slides/ai-companies-slide"
import { AGISlide } from "@/components/slides/agi-slide"
import { VideoSlideAGI } from "@/components/slides/video-slide-agi"
import { NvidiaSlide } from "@/components/slides/nvidia-slide"
import { ChatGPTSlide } from "@/components/slides/chatgpt-slide"
import { VideoSlideChatGPT } from "@/components/slides/video-slide-chatgpt"
import { AICompetitionSlide } from "@/components/slides/ai-competition-slide"
import { AIRaceDynamicsSlide } from "@/components/slides/ai-race-dynamics-slide"
import { MultimediaAISlide } from "@/components/slides/multimedia-ai-slide"
import { JobImpactSlide } from "@/components/slides/job-impact-slide"
import { IndustriesAffectedSlide } from "@/components/slides/industries-affected-slide"
import { AIRealismSlide } from "@/components/slides/ai-realism-slide" // Fixed import to use correct component
import { WhatYouNeedToKnowSlide } from "@/components/slides/what-you-need-to-know-slide"
import { ClosingSlide } from "@/components/slides/closing-slide"

const slides = [
  { id: 0, component: TitleSlide },
  { id: 1, component: IndexSlide },
  { id: 2, component: OriginsSlide },
  { id: 3, component: EarlyDevelopmentSlide },
  { id: 4, component: WhatIsAISlide },
  { id: 5, component: MachineLearningSlide },
  { id: 6, component: VideoSlideML },
  { id: 7, component: SemanticLearningSlide },
  { id: 8, component: NeuralNetworksSlide },
  { id: 9, component: HowMLWorksSlide },
  { id: 10, component: KeyFiguresSlide },
  { id: 11, component: AICompaniesSlide },
  { id: 12, component: AGISlide },
  { id: 13, component: VideoSlideAGI },
  { id: 14, component: NvidiaSlide },
  { id: 15, component: ChatGPTSlide },
  { id: 16, component: VideoSlideChatGPT },
  { id: 17, component: AICompetitionSlide },
  { id: 18, component: AIRaceDynamicsSlide },
  { id: 19, component: MultimediaAISlide },
  { id: 20, component: JobImpactSlide },
  { id: 21, component: IndustriesAffectedSlide },
  { id: 22, component: AIRealismSlide }, // Using correct component name
  { id: 23, component: WhatYouNeedToKnowSlide },
  { id: 24, component: ClosingSlide },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setShowMenu(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "Escape") setShowMenu(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="h-full w-full">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-card/80 backdrop-blur-sm hover:bg-card"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-card/80 backdrop-blur-sm hover:bg-card"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Menu Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-8 right-8 z-50 bg-card/80 backdrop-blur-sm hover:bg-card"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Slide Menu */}
      {showMenu && (
        <div className="fixed top-20 right-8 bg-card/95 backdrop-blur-sm border rounded-lg p-4 z-50 max-h-[70vh] overflow-y-auto w-64">
          <h3 className="font-semibold mb-3 text-sm">Jump to Slide</h3>
          <div className="space-y-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  currentSlide === index ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {index + 1}. {getSlideTitle(index)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function getSlideTitle(index: number): string {
  const titles = [
    "Title",
    "Index",
    "Origins of AI",
    "Early Development",
    "What is AI?",
    "Machine Learning",
    "Video: Machine Learning",
    "How AI Learns Language",
    "Neural Networks",
    "How ML Works",
    "Pioneers of AI",
    "AI Companies",
    "What is AGI?",
    "Video: AGI Explained",
    "NVIDIA & GPUs",
    "ChatGPT Revolution",
    "Video: ChatGPT",
    "AI Competition",
    "AI Race Dynamics",
    "Multimedia AI",
    "Impact on Jobs",
    "Industries Affected",
    "AI Realism", // Updated title for video slide
    "Jobs Least Affected",
    "Closing",
  ]
  return titles[index] || `Slide ${index + 1}`
}
