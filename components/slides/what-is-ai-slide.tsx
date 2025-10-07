import { Brain, Zap, Target, Lightbulb } from "lucide-react"

export function WhatIsAISlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">What is Artificial Intelligence?</h2>

        <div className="grid grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed font-medium">
                AI is teaching computers to learn from examples, just like you learned as a child.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Remember learning to ride a bike? You fell, adjusted, tried again, and got better. AI does the same
                thing—but with data instead of bike rides. Show it thousands of cat photos, and it learns what makes
                something a cat.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The magic is that we don't tell the computer "a cat has pointy ears and whiskers." We just show it
                examples, and it figures out the patterns on its own.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
              <img src="/child-learning-with-ai-robot-teacher-friendly.jpg" alt="AI Learning Concept" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Learning</h3>
            <p className="text-sm text-muted-foreground">Getting better with practice</p>
          </div>

          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Recognizing</h3>
            <p className="text-sm text-muted-foreground">Spotting patterns in data</p>
          </div>

          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Predicting</h3>
            <p className="text-sm text-muted-foreground">Making educated guesses</p>
          </div>

          <div className="bg-card border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Creating</h3>
            <p className="text-sm text-muted-foreground">Making new things</p>
          </div>
        </div>
      </div>
    </div>
  )
}
