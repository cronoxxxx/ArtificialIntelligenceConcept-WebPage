export function HowMLWorksSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">How Machine Learning Actually Works</h2>

        <div className="mb-12">
          <div className="bg-card border rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold mb-8 text-center">The Learning Process (In 4 Simple Steps)</h3>

            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-3 text-xl">Collect Data</h4>
                <p className="text-base text-muted-foreground">Gather thousands or millions of examples</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">2</span>
                </div>
                <h4 className="font-semibold mb-3 text-xl">Train Model</h4>
                <p className="text-base text-muted-foreground">Feed data through the network repeatedly</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-accent">3</span>
                </div>
                <h4 className="font-semibold mb-3 text-xl">Adjust & Learn</h4>
                <p className="text-base text-muted-foreground">Fine-tune to reduce errors</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold mb-3 text-xl">Make Predictions</h4>
                <p className="text-base text-muted-foreground">Use trained model on new data</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-card border rounded-xl p-8">
              <h4 className="text-3xl font-bold mb-6">Real Example: Email Spam Filter</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <p className="text-xl text-muted-foreground pt-2">
                    Collect thousands of emails labeled as "spam" or "not spam"
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-secondary">2</span>
                  </div>
                  <p className="text-xl text-muted-foreground pt-2">
                    Train the model to recognize patterns (certain words, suspicious links, sender patterns)
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <p className="text-xl text-muted-foreground pt-2">
                    The model learns which features indicate spam and gets better with practice
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <p className="text-xl text-muted-foreground pt-2">
                    When new emails arrive, it predicts if they're spam with high accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border rounded-xl p-8">
              <h4 className="text-2xl font-semibold mb-4">The Secret: Practice Makes Perfect</h4>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The model doesn't learn perfectly on the first try. It goes through the data thousands of times, each
                time getting slightly better. This is called{" "}
                <span className="text-foreground font-medium">training</span>. Think of it like learning to ride a bike
                - you fall a few times, but eventually you get it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
