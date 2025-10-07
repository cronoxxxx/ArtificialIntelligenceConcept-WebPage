export function KeyFiguresSlide() {
  const pioneers = [
    {
      name: "Sam Altman",
      role: "CEO of OpenAI",
      team: "Leading the team that created ChatGPT",
      contribution: "Leading the company behind ChatGPT and GPT models",
      impact:
        "Made AI accessible to millions of people worldwide and sparked the current AI revolution. ChatGPT became the fastest-growing app in history.",
      achievement: "Turned OpenAI from a research lab into a company valued at over $80 billion",
      photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qnO8ICmhNQMiottiym3CXxXmBz7feQ.png",
    },
    {
      name: "Elon Musk",
      role: "Co-founder of OpenAI, Founder of xAI",
      team: "Early OpenAI co-founder, now building Grok",
      contribution: "Early investor in AI, creator of Grok AI",
      impact:
        "Brought massive attention to AI safety concerns and competition. Left OpenAI to create xAI, believing AI development needed more competition and transparency.",
      achievement: "Created Grok to compete with ChatGPT, integrated into X (Twitter)",
      photo: "/elon-musk-professional-headshot-photo.jpg",
    },
    {
      name: "Greg Brockman",
      role: "President & Co-founder of OpenAI",
      team: "Technical leader of OpenAI's engineering team",
      contribution: "Built the technical infrastructure behind ChatGPT and GPT models",
      impact:
        "As President and co-founder, he led the engineering teams that turned AI research into products millions use daily. His technical leadership made ChatGPT possible.",
      achievement: "Architected the systems that power ChatGPT and made it scale to hundreds of millions of users",
      photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2PYuWvLC346nU0ajwWkkieBMPavrO4.png",
    },
    {
      name: "Ilya Sutskever",
      role: "Co-founder & Chief Scientist of OpenAI",
      team: "Leading AI research and safety at OpenAI",
      contribution: "Pioneer in deep learning and neural networks, key architect of GPT models",
      impact:
        "One of the world's leading AI researchers. His work on deep learning and transformers made modern AI possible. He helped create the technology behind ChatGPT.",
      achievement: "Co-created the transformer architecture and GPT models that revolutionized AI",
      photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B8XwXK1GZ38an2E9Ad9CfPotap7Vhc.png",
    },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-16 bg-gradient-to-br from-background via-accent/5 to-background overflow-y-auto">
      <div className="max-w-6xl w-full py-4 md:py-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">The Pioneers of Modern AI</h2>
        <p className="text-base md:text-xl text-center text-muted-foreground mb-6 md:mb-12 max-w-3xl mx-auto">
          These visionaries and their teams turned AI from science fiction into reality. Their competition and
          collaboration shaped the AI tools you use today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {pioneers.map((pioneer, index) => (
            <div key={index} className="bg-card border rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={pioneer.photo || "/placeholder.svg"}
                  alt={pioneer.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-lg md:text-xl font-bold">{pioneer.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{pioneer.role}</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">{pioneer.team}</p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div>
                  <p className="text-xs md:text-sm font-semibold text-primary mb-1">What they built:</p>
                  <p className="text-xs md:text-sm">{pioneer.contribution}</p>
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold text-secondary mb-1">Their impact:</p>
                  <p className="text-xs md:text-sm">{pioneer.impact}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs">
                    <span className="font-semibold text-foreground">Key achievement:</span> {pioneer.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border rounded-xl p-4 md:p-6">
          <p className="text-sm md:text-lg text-center">
            <span className="font-bold">Their victory sparked a new era:</span> These pioneers' breakthroughs led to an
            explosion of AI companies competing to build the best AI tools—from ChatGPT to Claude, Gemini to Grok, and
            many more emerging every month.
          </p>
        </div>
      </div>
    </div>
  )
}
