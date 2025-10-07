import { Brain, History, Cpu, Sparkles, ImageIcon, Briefcase, AlertTriangle, Shield } from "lucide-react"

export function IndexSlide() {
  const sections = [
    { icon: History, title: "Origins of AI", subtitle: "Where it all began" },
    { icon: Cpu, title: "How AI Works", subtitle: "Learning from examples" },
    { icon: Brain, title: "Pioneers & Companies", subtitle: "Who's building AI and what is AGI" },
    { icon: Sparkles, title: "ChatGPT & Competition", subtitle: "The AI race heats up" },
    { icon: ImageIcon, title: "AI Creates Everything", subtitle: "Images, videos, and more" },
    { icon: Briefcase, title: "Impact on Jobs", subtitle: "What's changing in the workplace" },
    { icon: AlertTriangle, title: "AI Realism & Concerns", subtitle: "Sora 2 and realistic AI content" },
    { icon: Shield, title: "Jobs Least Affected", subtitle: "Hands-on professions that remain safe" },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-16 text-center">Table of Contents</h2>

        <div className="grid grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card border rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="text-xl font-semibold mb-1 text-balance">{section.title}</h3>
                    <p className="text-sm text-muted-foreground text-balance">{section.subtitle}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
