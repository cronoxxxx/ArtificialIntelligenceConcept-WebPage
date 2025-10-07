export function VideoAISlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">AI Video Generation: The Next Frontier</h2>

        <div className="grid grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">From Text to Moving Pictures</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Video AI takes image generation to the next level by creating sequences of frames that move coherently
                over time. This is exponentially more complex than generating a single image.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded">
                <p className="text-sm">
                  <span className="font-semibold">The Challenge:</span> The AI must maintain consistency across frames,
                  understand physics and motion, and create smooth transitions—all while following your creative
                  direction.
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Leading Video AI Tools</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="font-medium mb-1">Runway Gen-2</div>
                  <p className="text-muted-foreground">Text-to-video and video editing with AI</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <div className="font-medium mb-1">Pika Labs</div>
                  <p className="text-muted-foreground">Create and modify videos with simple prompts</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <div className="font-medium mb-1">OpenAI Sora</div>
                  <p className="text-muted-foreground">Generates highly realistic minute-long videos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src="/placeholder.svg?height=350&width=600"
                alt="Video AI Interface"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">60 sec</div>
                <div className="text-sm text-muted-foreground">Video length possible</div>
              </div>
              <div className="bg-card border rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary mb-1">1080p</div>
                <div className="text-sm text-muted-foreground">HD quality output</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Use Cases</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Marketing videos and social media content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Concept visualization for films and games</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Educational content and explainer videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Rapid prototyping for creative projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-center">The Future is Moving</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Video AI is still in its early stages, but it's improving rapidly. Soon, anyone will be able to create
            professional-quality video content with just a description, democratizing video production in the same way
            that AI has democratized image creation.
          </p>
        </div>
      </div>
    </div>
  )
}
