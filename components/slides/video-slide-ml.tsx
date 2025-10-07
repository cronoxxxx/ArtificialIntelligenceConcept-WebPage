export function VideoSlideML() {
  return (
    <div className="h-full w-full flex items-center justify-center p-12 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Learn More: Machine Learning Explained
        </h2>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/R9OHn5ZF4Uo"
            title="Machine Learning Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>

        <p className="text-center text-muted-foreground mt-6 text-lg">
          Watch this video to understand machine learning concepts in more detail
        </p>
      </div>
    </div>
  )
}
