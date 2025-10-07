export function ClosingSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The AI Journey Continues
          </h2>
          <p className="text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            From the Turing Test to ChatGPT, from simple programs to neural networks that can create art—AI has come
            incredibly far, and we're just getting started.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border rounded-2xl p-12 mb-12 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Key Takeaways</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg text-muted-foreground">
                AI learns from data, just like humans learn from experience
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg text-muted-foreground">Neural networks and GPUs made modern AI possible</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg text-muted-foreground">AI is expanding from text to images, video, and beyond</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg text-muted-foreground">The future is about humans and AI working together</p>
            </div>
          </div>
        </div>

        {/* AI-made badge with v0 branding */}
        <div className="relative">
          <div className="inline-block bg-card/90 backdrop-blur-sm border-2 border-primary/50 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg p-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9OSkqVpbjWRUh3kOLfiS0J1ODYKlun.png"
                    alt="v0 logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-accent-foreground text-xl">✨</span>
                </div>
              </div>

              <div className="text-left">
                <div className="text-sm text-muted-foreground mb-1">This presentation was crafted with</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  AI Technology
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Powered by</span>
                  <div className="px-3 py-1 bg-primary/10 rounded-full">
                    <span className="font-bold text-primary">v0</span>
                  </div>
                  <span className="text-sm text-muted-foreground">by Vercel</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">"Ship your ideas at the speed of thought"</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-muted-foreground">
          <p className="text-lg">Thank you for exploring the world of AI with us! 🚀</p>
        </div>
      </div>
    </div>
  )
}
