export function EarlyDevelopmentSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">Early Development & First Prototypes</h2>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-card border rounded-xl p-6">
            <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
              <img src="/eliza-chatbot-vintage-computer-terminal.jpg" alt="ELIZA" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="text-sm text-primary font-semibold mb-2">1966</div>
            <h3 className="text-xl font-bold mb-2">ELIZA</h3>
            <p className="text-sm text-muted-foreground">
              First chatbot that could simulate conversation, created by Joseph Weizenbaum at MIT.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="w-full aspect-video bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg mb-4 flex items-center justify-center">
              <img src="/shakey-robot-stanford-1960s.jpg" alt="Shakey" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="text-sm text-secondary font-semibold mb-2">1969</div>
            <h3 className="text-xl font-bold mb-2">Shakey</h3>
            <p className="text-sm text-muted-foreground">
              First mobile robot that could reason about its actions, developed at Stanford.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="w-full aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/expert-system-computer-1970s-medical-diagnosis.jpg"
                alt="Expert Systems"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-sm text-accent font-semibold mb-2">1970s</div>
            <h3 className="text-xl font-bold mb-2">Expert Systems</h3>
            <p className="text-sm text-muted-foreground">
              Programs that mimicked human expertise in specific domains like medical diagnosis.
            </p>
          </div>
        </div>

        <div className="bg-card/50 border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">The AI Winters</h3>
          <p className="text-muted-foreground leading-relaxed">
            Despite early excitement, AI faced periods of reduced funding and interest (1970s and late 1980s) when the
            technology couldn't meet inflated expectations. These "AI Winters" taught researchers valuable lessons about
            realistic goals and the importance of computational power.
          </p>
        </div>
      </div>
    </div>
  )
}
