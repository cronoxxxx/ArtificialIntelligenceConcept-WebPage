export function MachineLearningSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">Machine Learning: Teaching Computers by Example</h2>

        <div className="grid grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="bg-card border rounded-xl p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Think of It Like This...</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Imagine teaching a child what a dog is. You don't explain "four legs, fur, tail, barks." You just point
                at dogs and say "dog!" After seeing enough dogs, the child recognizes new dogs they've never seen
                before.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">That's machine learning.</span> Show the computer thousands
                of dog photos labeled "dog," and it learns what makes something a dog—without us writing rules.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-6">
              <h4 className="font-semibold mb-4 text-lg">Old Way vs. New Way</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-1 text-red-500">❌ Old Programming</div>
                  <div className="text-sm text-muted-foreground">
                    Write thousands of rules: "If it has 4 legs AND fur AND barks, it's a dog"
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1 text-green-500">✓ Machine Learning</div>
                  <div className="text-sm text-muted-foreground">
                    Show 10,000 dog photos. Computer figures out the rules itself.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden">
              <img src="/child-learning-to-recognize-dogs-with-photos.jpg" alt="Learning by Example" className="w-full h-full object-cover" />
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-4">The Three Simple Steps</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Feed Examples</div>
                    <div className="text-sm text-muted-foreground">
                      Give the computer lots of examples (photos, text, sounds)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Find Patterns</div>
                    <div className="text-sm text-muted-foreground">
                      Computer looks for what all the examples have in common
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <div>
                    <div className="font-medium mb-1">Make Predictions</div>
                    <div className="text-sm text-muted-foreground">
                      Use those patterns to recognize or create new things
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-center">Why This Changed Everything</h3>
          <p className="text-center text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            Before machine learning, programmers had to think of every possible rule. Now, we just need lots of
            examples. This is why AI suddenly got so good—the internet gave us billions of examples to learn from.
          </p>
        </div>
      </div>
    </div>
  )
}
