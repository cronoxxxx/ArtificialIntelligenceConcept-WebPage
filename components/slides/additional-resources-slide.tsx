export function AdditionalResourcesSlide() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-12 flex flex-col overflow-y-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-emerald-900">Additional Resources</h1>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-800">Learn More About AI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Video 1: YouTube */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CDzfwDEgqkM"
                title="AI Educational Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video 2: Uploaded Video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
              <video
                controls
                className="w-full h-full object-contain"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/m2-res_1080p-dwB3Ntw24c5oTsq3w2Xr8rOvgncnOB.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 3: YouTube */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kYNb1vsi-gM?start=32"
                title="AI Educational Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video 4: YouTube */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-qGa0oTY120"
                title="AI Educational Video 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Perplexity Pro Offer Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t6eUqFFnNGeH89OJn0vleGfitr0pV4.png"
              alt="Perplexity Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-2xl font-semibold text-emerald-800">Free AI for 1 Year!</h2>
          </div>

          <div className="flex-1 space-y-4">
            <div className="bg-emerald-100 border-l-4 border-emerald-600 p-4 rounded">
              <p className="font-bold text-emerald-900 text-lg mb-2">Perplexity Pro - FREE for 12 Months</p>
              <p className="text-emerald-800 text-sm">Worth €200/year - Exclusively for PayPal users!</p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">What You Get:</h3>
                <ul className="list-disc list-inside space-y-1 text-emerald-800">
                  <li>Access to GPT-5, Gemini 2.5 Pro, Grok 4, Claude Opus 4.1</li>
                  <li>Multiple AI models in one platform</li>
                  <li>Advanced search and research capabilities</li>
                  <li>Image generation and analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Requirements:</h3>
                <ul className="list-disc list-inside space-y-1 text-emerald-800">
                  <li>Never subscribed to Perplexity Pro before</li>
                  <li>PayPal account created before Sept 1, 2025</li>
                  <li>Valid until December 31, 2025</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href="https://www.perplexity.ai/join/p/paypal-subscription"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Claim Your Free Year →
              </a>
              <a
                href="https://www.xataka.com/basics/perplexity-pro-gratis-durante-1-ano-como-conseguir-esta-promocion-para-usuarios-paypal"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-emerald-700 hover:text-emerald-900 text-xs underline"
              >
                Read full details (Spanish)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-emerald-700">
        <p>Take advantage of these resources to continue your AI learning journey!</p>
      </div>
    </div>
  )
}
