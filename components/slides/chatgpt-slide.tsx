import { MessageSquare, Sparkles } from "lucide-react"

export function ChatGPTSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <MessageSquare className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-5xl font-bold mb-4">ChatGPT: The Moment Everything Changed</h2>
          <p className="text-xl text-muted-foreground">November 2022 - AI became accessible to everyone</p>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why It Shocked the World</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For the first time, anyone could have a natural conversation with AI. No programming knowledge needed.
                Just type a question and get a helpful answer.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Writes Like a Human</div>
                    <p className="text-sm text-muted-foreground">
                      Can write essays, emails, code, poems—anything you ask for
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Understands Context</div>
                    <p className="text-sm text-muted-foreground">
                      Remembers your conversation and gives relevant follow-up answers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Free and Easy</div>
                    <p className="text-sm text-muted-foreground">
                      Anyone with internet access could use it immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
              <h4 className="font-semibold mb-3 text-lg">Explosive Growth</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">100M</div>
                  <div className="text-sm text-muted-foreground">Users in just 2 months</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-1">#1</div>
                  <div className="text-sm text-muted-foreground">Fastest-growing app ever</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <img src="/person-using-chatgpt-on-laptop-having-conversation.jpg" alt="ChatGPT in Use" className="w-full h-full object-cover" />
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">What People Use It For</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Students</div>
                  <div className="text-muted-foreground">Homework help, learning</div>
                </div>
                <div className="bg-secondary/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Writers</div>
                  <div className="text-muted-foreground">Brainstorming, editing</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Programmers</div>
                  <div className="text-muted-foreground">Writing code, debugging</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="font-medium mb-1">Everyone</div>
                  <div className="text-muted-foreground">Answering questions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-center">The Turning Point</h3>
          <p className="text-center text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            ChatGPT proved that AI wasn't just for tech companies anymore. Suddenly, everyone was talking about AI—from
            students to CEOs. It sparked a global race to build better AI tools.
          </p>
        </div>
      </div>
    </div>
  )
}
