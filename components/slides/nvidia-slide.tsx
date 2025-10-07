import { Cpu } from "lucide-react"

export function NvidiaSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <Cpu className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-5xl font-bold mb-4">NVIDIA GPUs: The Engine of AI</h2>
          <p className="text-xl text-muted-foreground">
            Why graphics cards became essential for artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why GPUs for AI?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Training AI models requires performing millions of calculations simultaneously. GPUs (Graphics
                Processing Units) were originally designed to render video game graphics, but they're perfect for AI
                because they can do many calculations at once.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                <p className="text-sm">
                  <span className="font-semibold">Think of it this way:</span> A CPU is like a single very smart person
                  solving problems one at a time. A GPU is like thousands of people working together on different parts
                  of the same problem simultaneously.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100x</div>
                <div className="text-sm text-muted-foreground">Faster training than CPUs</div>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">1000s</div>
                <div className="text-sm text-muted-foreground">Of parallel processors</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
              <img src="/nvidia-gpu-graphics-card-ai-computing.jpg" alt="NVIDIA GPU" className="w-full h-full object-cover" />
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">NVIDIA's AI Impact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">CUDA Platform:</span> Software that makes it easy for
                    developers to use GPUs for AI
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Tensor Cores:</span> Specialized hardware designed
                    specifically for AI calculations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Industry Standard:</span> Used by every major AI
                    company from OpenAI to Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-center">The AI Boom Effect</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            The explosion of AI applications has made NVIDIA one of the world's most valuable companies. Their GPUs
            power everything from ChatGPT to self-driving cars, making them essential infrastructure for the AI
            revolution.
          </p>
        </div>
      </div>
    </div>
  )
}
