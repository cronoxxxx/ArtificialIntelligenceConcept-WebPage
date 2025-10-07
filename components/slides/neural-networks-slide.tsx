export function NeuralNetworksSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-16 overflow-y-auto">
      <div className="max-w-6xl w-full py-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-center">
          Neural Networks: Copying How Your Brain Works
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-6 md:mb-12">
          <div>
            <div className="bg-card border rounded-xl p-4 md:p-8 mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Your Brain is the Blueprint</h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-3 md:mb-4">
                Your brain has billions of neurons (brain cells) connected together. When you learn something new, the
                connections between neurons get stronger.
              </p>
              <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-4">
                <span className="text-primary font-semibold">Artificial neural networks copy this idea.</span> They have
                layers of artificial "neurons" that strengthen their connections as they learn from examples.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Think of it like a team of people passing information down a line, with each person adding their
                insight. By the end, the team has figured out the answer together.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src="/brain-neurons-network-connections-simple-diagram.jpg"
                alt="Neural Network Concept"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-card border rounded-xl p-4 md:p-6">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">The Three Layers</h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm md:text-lg">IN</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Input: Receives Information</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Like your eyes seeing an image</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-sm md:text-lg">H</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Hidden: Processes & Thinks</div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Like your brain analyzing what you see
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm md:text-lg">OUT</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Output: Gives Answer</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Like you saying "That's a cat!"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-4 md:p-6">
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Simple Networks</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              A few layers—good for simple tasks like recognizing handwritten numbers
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border rounded-xl p-4 md:p-6">
            <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Deep Networks (Deep Learning)</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Many layers—can handle complex tasks like understanding language or creating images
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
