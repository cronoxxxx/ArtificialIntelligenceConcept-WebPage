import { ImageIcon, Video, Music, FileText } from "lucide-react"

export function MultimediaAISlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-16">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-center">AI Expands Beyond Text</h2>

        <div className="mb-12">
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            After mastering language, AI quickly expanded into creating and understanding images, video, audio, and
            more—opening entirely new creative possibilities.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <ImageIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Image Generation</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI models like DALL-E, Midjourney, and Stable Diffusion can create stunning, original images from text
                descriptions in seconds.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-semibold">Example:</span> Type "a cat astronaut in space" and get a
                  photorealistic image that never existed before.
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Video Creation</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tools like Runway, Pika, and Sora can generate video clips from text prompts or transform existing
                videos in creative ways.
              </p>
              <div className="bg-secondary/5 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-semibold">Breakthrough:</span> AI can now create realistic video scenes that
                  would take hours to film or animate.
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Music className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Audio & Music</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI can generate music, create realistic voices, remove background noise, and even clone voices with just
                a few seconds of audio.
              </p>
              <div className="bg-accent/5 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-semibold">Applications:</span> Podcasts, audiobooks, music production, and voice
                  assistants all benefit from AI audio.
                </p>
              </div>
            </div>

            <div className="bg-card border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3D & Beyond</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI is now creating 3D models, designing products, generating code, and even helping with scientific
                research and drug discovery.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm">
                  <span className="font-semibold">Future:</span> AI will continue expanding into new domains we haven't
                  even imagined yet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3 text-center">Multimodal AI</h3>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            The latest AI models are <span className="text-foreground font-semibold">multimodal</span>—they can
            understand and generate multiple types of content simultaneously. You can show an AI an image and ask it to
            write a story about it, or describe a video and have it generate matching audio.
          </p>
        </div>
      </div>
    </div>
  )
}
