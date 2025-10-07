import { Zap, Chrome, Sparkles } from "lucide-react"

export function AICompetitionSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">The AI Race: Everyone Wants to Compete</h2>

        <div className="mb-12">
          <p className="text-xl text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            ChatGPT's success triggered a massive competition. Every tech company rushed to build their own AI to avoid
            being left behind.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Google Gemini */}
          <div className="bg-card border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Chrome className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">Google Gemini</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Google, the search giant, felt threatened. They quickly released Gemini (formerly Bard) to compete with
              ChatGPT.
            </p>
            <div className="bg-blue-500/5 rounded-lg p-4">
              <div className="font-semibold mb-2 text-sm">Why It Matters</div>
              <p className="text-sm text-muted-foreground">
                Google's main business is search. AI chatbots could replace Google searches, so they had to respond
                fast.
              </p>
            </div>
          </div>

          {/* Microsoft */}
          <div className="bg-card border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">Microsoft + OpenAI</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Microsoft invested $10+ billion in OpenAI and added ChatGPT to Bing search and Microsoft Office apps.
            </p>
            <div className="bg-primary/5 rounded-lg p-4">
              <div className="font-semibold mb-2 text-sm">The Strategy</div>
              <p className="text-sm text-muted-foreground">
                Put AI everywhere—Word, Excel, PowerPoint, Teams. Make it impossible to avoid.
              </p>
            </div>
          </div>

          {/* Others */}
          <div className="bg-card border rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">Everyone Else</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meta, Amazon, Apple, and countless startups all launched their own AI tools to stay competitive.
            </p>
            <div className="bg-accent/5 rounded-lg p-4">
              <div className="font-semibold mb-2 text-sm">The Result</div>
              <p className="text-sm text-muted-foreground">
                AI went from experimental to essential in less than a year. Every company needs an AI strategy now.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-center">What This Means for You</h3>
          <p className="text-center text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            This competition is good news for users. Companies are racing to make AI better, faster, and cheaper. New AI
            tools are launching every week, and many are free to use. The technology is improving at an incredible pace.
          </p>
        </div>
      </div>
    </div>
  )
}
