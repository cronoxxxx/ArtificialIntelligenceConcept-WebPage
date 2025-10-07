import { Trophy } from "lucide-react"

export function MilestonesSlide() {
  const milestones = [
    {
      year: "1997",
      title: "Deep Blue Defeats Kasparov",
      description: "IBM's Deep Blue became the first computer to beat a world chess champion.",
      color: "primary",
    },
    {
      year: "2011",
      title: "Watson Wins Jeopardy!",
      description: "IBM Watson defeated human champions in the quiz show, showcasing natural language processing.",
      color: "secondary",
    },
    {
      year: "2016",
      title: "AlphaGo Beats Lee Sedol",
      description: "DeepMind's AlphaGo mastered the ancient game of Go, considered far more complex than chess.",
      color: "accent",
    },
    {
      year: "2020",
      title: "GPT-3 Released",
      description: "OpenAI's GPT-3 demonstrated unprecedented language understanding with 175 billion parameters.",
      color: "primary",
    },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-5xl font-bold mb-4">Major Milestones</h2>
          <p className="text-xl text-muted-foreground">Breakthrough moments that changed AI forever</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`inline-block px-4 py-2 bg-${milestone.color}/10 rounded-full text-${milestone.color} font-bold text-2xl mb-4`}
              >
                {milestone.year}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-balance">{milestone.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card/50 border rounded-xl p-6 text-center">
          <p className="text-muted-foreground">
            Each milestone demonstrated AI's growing capability to match and exceed human performance in increasingly
            complex tasks.
          </p>
        </div>
      </div>
    </div>
  )
}
