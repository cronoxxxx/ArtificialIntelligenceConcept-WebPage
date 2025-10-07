export function TitleSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Educational Presentation
          </div>
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
          Artificial Intelligence
        </h1>

        <p className="text-3xl text-muted-foreground mb-4 font-light">From Origins to Present Day</p>

        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
          A comprehensive journey through the history, technology, and impact of AI
        </p>

        <div className="mt-12 text-sm text-muted-foreground">Press → to begin</div>
      </div>
    </div>
  )
}
