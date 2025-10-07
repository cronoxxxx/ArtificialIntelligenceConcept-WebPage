import { Brain, Zap, Globe, Lightbulb } from "lucide-react"

export function AGISlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-12 bg-gradient-to-br from-background via-purple-500/5 to-background">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-3">What is AGI?</h2>
          <p className="text-xl text-muted-foreground">Artificial General Intelligence Explained</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 mb-6">
          <h3 className="text-2xl font-bold mb-3 text-center">The Simple Definition</h3>
          <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto">
            AGI is an AI that can <span className="font-bold text-purple-500">think and learn like a human</span> across{" "}
            <span className="font-bold text-purple-500">any task or domain</span>. Unlike today's AI (which is good at
            specific things), AGI would be able to understand, learn, and solve problems in any area—just like you can.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-card border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold">Today's AI (Narrow AI)</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Good at ONE specific task</li>
              <li>✓ ChatGPT writes text, but can't drive a car</li>
              <li>✓ Image AI creates pictures, but can't have a conversation</li>
              <li>✓ Needs humans to train it for each task</li>
            </ul>
          </div>

          <div className="bg-card border border-purple-500/30 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold">AGI (The Future)</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Can do ANY task a human can</li>
              <li>✓ Learns new skills on its own</li>
              <li>✓ Understands context and reasoning</li>
              <li>✓ Adapts to completely new situations</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border rounded-xl p-4 text-center">
            <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Universal Intelligence</h4>
            <p className="text-xs text-muted-foreground">Can work in any field: medicine, law, engineering, art</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-xl p-4 text-center">
            <Lightbulb className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Self-Learning</h4>
            <p className="text-xs text-muted-foreground">Teaches itself new skills without human help</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border rounded-xl p-4 text-center">
            <Brain className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Human-Level Reasoning</h4>
            <p className="text-xs text-muted-foreground">Understands complex problems and creates solutions</p>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-5">
          <p className="text-center text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-foreground">We don't have AGI yet.</span> All current AI (ChatGPT, Gemini,
            Claude) is still "narrow AI." But the race to build AGI is the biggest technological challenge of our time.
          </p>
        </div>
      </div>
    </div>
  )
}
