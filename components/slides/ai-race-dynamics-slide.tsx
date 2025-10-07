import { TrendingDown, TrendingUp, Target, Zap } from "lucide-react"

export function AIRaceDynamicsSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-10 text-center">The AI Race: Winners and Losers</h2>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Google's Failure */}
          <div className="bg-card border-2 border-red-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-500">Google's Missed Opportunity</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">DeepMind: The Pioneer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Google owned DeepMind, the company that created AlphaGo and pioneered modern AI research. They had the
                  best AI researchers in the world.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">The Mistake</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Despite having the technology first, Google was too cautious. They worried about risks and didn't rush
                  to release a public chatbot. This hesitation cost them dearly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lost the Lead</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  OpenAI released ChatGPT first and captured the world's attention. Google went from leader to playing
                  catch-up, scrambling to release Bard (now Gemini) months later.
                </p>
              </div>
            </div>
          </div>

          {/* Microsoft's Smart Move */}
          <div className="bg-card border-2 border-green-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-500">Microsoft's Brilliant Investment</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">The $10+ Billion Bet</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Microsoft invested over $10 billion in OpenAI, securing exclusive access to GPT technology. This was
                  one of the smartest tech investments in history.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integration Everywhere</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Microsoft quickly integrated ChatGPT into Bing, Windows, Office 365, Teams, and GitHub. They made AI
                  unavoidable for billions of users.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">The Payoff</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Microsoft went from being seen as "old tech" to an AI leader overnight. Their stock soared, and they
                  gained a massive competitive advantage over Google.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* The Lesson */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">The Lesson</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Having the best technology isn't enough. You need to move fast and take risks. Google had the research but
              hesitated. Microsoft saw the opportunity and seized it.
            </p>
          </div>

          {/* Current State */}
          <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Where We Are Now</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The race is still on. Google is fighting back with Gemini, but OpenAI and Microsoft maintain their lead.
              Every company is now scrambling to avoid being left behind in the AI revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
