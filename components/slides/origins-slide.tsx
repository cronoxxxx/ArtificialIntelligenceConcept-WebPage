export function OriginsSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm text-primary font-semibold mb-4">1950s - 1960s</div>
          <h2 className="text-5xl font-bold mb-8 text-balance">The Origins of AI</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              The concept of artificial intelligence began with a simple question:
              <span className="text-foreground font-medium"> "Can machines think?"</span>
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <div className="font-semibold mb-1">1950 - The Turing Test</div>
                <p className="text-sm text-muted-foreground">
                  Alan Turing proposed a test to determine if a machine could exhibit intelligent behavior
                  indistinguishable from a human.
                </p>
              </div>

              <div className="p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                <div className="font-semibold mb-1">1956 - Birth of AI</div>
                <p className="text-sm text-muted-foreground">
                  The Dartmouth Conference officially coined the term "Artificial Intelligence" and established it as an
                  academic field.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="/vintage-1950s-computer-room-with-early-mainframe-c.jpg"
              alt="Early AI concepts - 1950s computer laboratory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
            <div className="text-3xl font-bold text-primary">1956</div>
            <div className="text-sm text-muted-foreground">AI is born</div>
          </div>
        </div>
      </div>
    </div>
  )
}
