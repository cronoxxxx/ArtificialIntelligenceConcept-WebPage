import { Play, Video, Users } from "lucide-react"

export function AIRealismSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-background via-purple-500/5 to-background overflow-y-auto">
      <div className="max-w-6xl w-full py-4">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">AI Content: Shockingly Realistic</h2>
          <p className="text-sm md:text-lg text-muted-foreground">From fake to flawless in just 2 years</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Video Section */}
          <div className="space-y-2 md:space-y-3">
            <div className="bg-card border rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UXayMlOsXhA"
                  title="AI Content Evolution"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground justify-center">
              <Play className="w-3 h-3 md:w-4 md:h-4" />
              <span>Watch the evolution of AI-generated content</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-3 md:space-y-4">
            {/* Sora 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-3 md:p-4">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
                <h3 className="text-base md:text-xl font-bold">Sora 2: AI Video Revolution</h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 leading-relaxed">
                OpenAI's Sora 2 creates videos so realistic you can't tell they're AI-generated. People, places, and
                events that never existed look completely real.
              </p>
              <div className="space-y-1 text-xs md:text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <span>Anyone can create professional-quality videos without cameras or actors</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <span>Fake news videos will be impossible to detect</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <span>Video production jobs are at serious risk</span>
                </p>
              </div>
            </div>

            {/* AI Social Media */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-3 md:p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                <h3 className="text-base md:text-xl font-bold">AI Social Media</h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 leading-relaxed">
                Companies are building social media platforms filled entirely with AI-generated content—competing
                directly with TikTok and Instagram.
              </p>
              <div className="space-y-1 text-xs md:text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>Endless AI-generated entertainment tailored to you</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>Virtual influencers that don't exist</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>You might not know if you're watching real people or AI...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
