export function NeuralNetworksSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">Neural Networks: Copying How Your Brain Works</h2>

        <div className="grid grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="bg-card border rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Your Brain is the Blueprint</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Your brain has billions of neurons (brain cells) connected together. When you learn something new, the
                connections between neurons get stronger.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <span className="text-primary font-semibold">Artificial neural networks copy this idea.</span> They have
                layers of artificial "neurons" that strengthen their connections as they learn from examples.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Think of it like a team of people passing information down a line, with each person adding their
                insight. By the end, the team has figured out the answer together.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src="/brain-neurons-network-connections-simple-diagram.jpg"
                alt="Neural Network Concept"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">The Three Layers</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">IN</span>
                  </div>
                  <div>
                    <div className="font-medium">Input: Receives Information</div>
                    <div className="text-sm text-muted-foreground">Like your eyes seeing an image</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-lg">H</span>
                  </div>
                  <div>
                    <div className="font-medium">Hidden: Processes & Thinks</div>
                    <div className="text-sm text-muted-foreground">Like your brain analyzing what you see</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-lg">OUT</span>
                  </div>
                  <div>
                    <div className="font-medium">Output: Gives Answer</div>
                    <div className="text-sm text-muted-foreground">Like you saying "That's a cat!"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
            <h4 className="font-semibold mb-3">Simple Networks</h4>
            <p className="text-sm text-muted-foreground">
              A few layers—good for simple tasks like recognizing handwritten numbers
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border rounded-xl p-6">
            <h4 className="font-semibold mb-3">Deep Networks (Deep Learning)</h4>
            <p className="text-sm text-muted-foreground">
              Many layers—can handle complex tasks like understanding language or creating images
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
