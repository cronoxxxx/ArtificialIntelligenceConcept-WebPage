export function SemanticLearningSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-12">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-center">How AI Learns Language and Meaning</h2>

        <div className="grid grid-cols-2 gap-8 items-start mb-6">
          <div className="space-y-4">
            <div className="bg-card border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Understanding Context, Not Just Words</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                When you read "I'm going to the bank," you know if it means a river bank or a money bank based on
                context. AI learns this the same way—by reading millions of sentences.
              </p>
              <p className="text-sm leading-relaxed">
                This is called <span className="text-primary font-semibold">semantic understanding</span>—learning what
                words mean based on how they're used together.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-sm">Real Examples</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-background/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5">"The movie was sick!"</div>
                  <div className="text-muted-foreground">AI learns this means "awesome," not "ill"</div>
                </div>
                <div className="bg-background/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5">"Can you table that discussion?"</div>
                  <div className="text-muted-foreground">AI learns "table" here means "postpone"</div>
                </div>
                <div className="bg-background/50 rounded-lg p-2">
                  <div className="font-medium mb-0.5">"Break a leg!"</div>
                  <div className="text-muted-foreground">AI learns this is encouragement, not a threat</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <img
                src="/ai-understanding-language-context-semantic-meaning.jpg"
                alt="Semantic Learning"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-card border rounded-xl p-4">
              <h4 className="font-semibold mb-3 text-sm">How It Learns Meaning</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-0.5">Read Everything</div>
                    <div className="text-xs text-muted-foreground">
                      AI reads billions of books, articles, and websites
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-0.5">Notice Patterns</div>
                    <div className="text-xs text-muted-foreground">
                      Words that appear together often are probably related
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm mb-0.5">Build Connections</div>
                    <div className="text-xs text-muted-foreground">Creates a mental map of how all words relate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-5">
          <h3 className="text-lg font-bold mb-2 text-center">Why This Matters</h3>
          <p className="text-center text-muted-foreground text-sm max-w-4xl mx-auto leading-relaxed">
            This semantic understanding is why ChatGPT can have conversations, why Google knows what you mean even with
            typos, and why AI can translate between languages. It doesn't just know words—it understands meaning and
            context like you do.
          </p>
        </div>
      </div>
    </div>
  )
}
