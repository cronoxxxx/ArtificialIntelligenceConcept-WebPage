import { Rocket, Brain, Globe, Sparkles } from "lucide-react"

export function FutureSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-5xl font-bold mb-4">The Future of AI</h2>
          <p className="text-xl text-muted-foreground">Where are we headed?</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Artificial General Intelligence (AGI)</h3>
            <p className="text-muted-foreground leading-relaxed">
              The goal of creating AI that can understand, learn, and apply knowledge across any domain—matching or
              exceeding human cognitive abilities. We're not there yet, but progress is accelerating.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI in Every Industry</h3>
            <p className="text-muted-foreground leading-relaxed">
              From healthcare diagnosis to climate modeling, education to agriculture—AI will become an essential tool
              in solving humanity's biggest challenges and improving quality of life globally.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Personalized AI Assistants</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI that knows your preferences, anticipates your needs, and helps you accomplish tasks more efficiently.
              Think of it as having a brilliant assistant available 24/7 for any question or task.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Human-AI Collaboration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rather than replacing humans, AI will augment our capabilities—helping us be more creative, productive,
              and innovative. The future is about humans and AI working together, each doing what they do best.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-center">Important Considerations</h3>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold mb-2">Ethics & Safety</div>
              <p className="text-muted-foreground">Ensuring AI is developed responsibly with proper safeguards</p>
            </div>
            <div className="text-center">
              <div className="font-semibold mb-2">Accessibility</div>
              <p className="text-muted-foreground">Making AI benefits available to everyone, not just the privileged</p>
            </div>
            <div className="text-center">
              <div className="font-semibold mb-2">Education</div>
              <p className="text-muted-foreground">Preparing people to work alongside AI and adapt to changes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
