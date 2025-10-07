import { Building2, TrendingDown } from "lucide-react"

export function IndustriesAffectedSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-12 overflow-y-auto">
      <div className="max-w-6xl w-full py-4">
        <div className="text-center mb-6 md:mb-8">
          <Building2 className="w-10 h-10 md:w-12 md:h-12 text-red-500 mx-auto mb-2 md:mb-3" />
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Industries Being Transformed</h2>
          <p className="text-sm md:text-lg text-muted-foreground">How different sectors are being affected</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">💼</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Human Resources</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              AI screens resumes, conducts interviews, and predicts candidate success.
            </p>
            <div className="bg-red-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-red-600">Impact: High</div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">💻</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Software Development</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              Tools like GitHub Copilot write code, find bugs, and explain systems.
            </p>
            <div className="bg-orange-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-orange-600">Impact: Very High</div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">📞</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Customer Support</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              AI chatbots handle most questions without human help.
            </p>
            <div className="bg-red-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-red-600">Impact: Extreme</div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">✍️</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Content Creation</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              AI writes articles, creates posts, and generates marketing copy.
            </p>
            <div className="bg-orange-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-orange-600">Impact: High</div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">🎨</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Design & Creative</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              AI generates logos, illustrations, and designs in seconds.
            </p>
            <div className="bg-orange-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-orange-600">Impact: High</div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">⚖️</div>
            <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Legal Services</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2 md:mb-3">
              AI reviews contracts, researches law, and drafts documents.
            </p>
            <div className="bg-yellow-500/10 rounded-lg p-1.5 md:p-2">
              <div className="text-xs font-semibold text-yellow-600">Impact: Medium</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-4 md:p-5">
          <div className="flex items-start gap-2 md:gap-3">
            <TrendingDown className="w-5 h-5 md:w-6 md:h-6 text-red-500 flex-shrink-0 mt-0.5 md:mt-1" />
            <div>
              <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Entry-Level Jobs Hit Hardest</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                AI is particularly good at repetitive tasks and basic skills. Entry-level positions—where people start
                careers—are disappearing fastest. Young workers and career changers face the biggest challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
