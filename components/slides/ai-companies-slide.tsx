export function AICompaniesSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-12 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-center">The AI Company Race</h2>
        <p className="text-sm md:text-lg text-center text-muted-foreground mb-6 md:mb-8">
          The race to build Artificial General Intelligence (AGI)
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8 flex-wrap">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/openai-logo-green-circular.jpg"
              alt="OpenAI"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">OpenAI</span>
            <span className="text-xs text-muted-foreground">ChatGPT</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/anthropic-logo-orange-abstract.jpg"
              alt="Anthropic"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">Anthropic</span>
            <span className="text-xs text-muted-foreground">Claude</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/google-logo-colorful-g.jpg"
              alt="Google"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">Google</span>
            <span className="text-xs text-muted-foreground">Gemini</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/meta-logo-blue-m-symbol.jpg"
              alt="Meta"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">Meta</span>
            <span className="text-xs text-muted-foreground">Llama</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/xai-logo-black-x-minimalist.jpg"
              alt="xAI"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">xAI</span>
            <span className="text-xs text-muted-foreground">Grok</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/deepseek-logo-red-technology.jpg"
              alt="DeepSeek"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">DeepSeek</span>
            <span className="text-xs text-muted-foreground">DeepSeek AI</span>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-2">
            <img
              src="/microsoft-logo-blue-windows.jpg"
              alt="Microsoft"
              className="w-14 h-14 md:w-20 md:h-20 rounded-xl shadow-lg object-cover"
            />
            <span className="text-xs md:text-sm font-semibold">Microsoft</span>
            <span className="text-xs text-muted-foreground">Copilot</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-primary/10 border rounded-xl p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center">The Ultimate Goal: AGI</h3>
          <p className="text-center text-muted-foreground leading-relaxed max-w-4xl mx-auto text-sm md:text-base">
            All these companies are racing to build{" "}
            <span className="font-semibold text-foreground">Artificial General Intelligence (AGI)</span>—an AI that can
            think, learn, and solve problems like a human across any domain. The first to achieve AGI could reshape the
            entire world. The stakes are enormous: whoever controls AGI controls the future of technology, economy, and
            society itself.
          </p>
        </div>
      </div>
    </div>
  )
}
