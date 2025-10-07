export function ImageGenerationSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">AI Image Generation: A Creative Revolution</h2>

        <div className="grid grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Image generation AI uses a technique called{" "}
                <span className="text-foreground font-semibold">diffusion</span>. It starts with random noise and
                gradually refines it into a coherent image based on your text description.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p className="text-muted-foreground">You provide a text prompt describing what you want</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-secondary">2</span>
                  </div>
                  <p className="text-muted-foreground">AI starts with random pixels (pure noise)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">3</span>
                  </div>
                  <p className="text-muted-foreground">Through many steps, it removes noise and adds details</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <p className="text-muted-foreground">Final result matches your description</p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Popular Tools</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">DALL-E 3</span>
                  <span className="text-sm text-muted-foreground">by OpenAI</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-lg">
                  <span className="font-medium">Midjourney</span>
                  <span className="text-sm text-muted-foreground">Artistic style</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                  <span className="font-medium">Stable Diffusion</span>
                  <span className="text-sm text-muted-foreground">Open source</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden">
                <img src="/ai-generated-art-digital-painting-landscape.jpg" alt="AI Art Example 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl overflow-hidden">
                <img src="/ai-generated-portrait-futuristic-character.jpg" alt="AI Art Example 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="AI Art Example 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="AI Art Example 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Impact on Creative Industries</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI image generation has transformed design, marketing, and entertainment. Artists use it for inspiration
                and rapid prototyping, while businesses create custom visuals without expensive photoshoots. It's not
                replacing human creativity— it's augmenting it, allowing people to bring their ideas to life faster than
                ever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
