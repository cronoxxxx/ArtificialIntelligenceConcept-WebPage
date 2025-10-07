import { Briefcase, AlertTriangle } from "lucide-react"

export function JobImpactSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 md:p-12 bg-gradient-to-br from-background to-orange-500/5 overflow-y-auto">
      <div className="max-w-6xl w-full py-4">
        <div className="text-center mb-6 md:mb-8">
          <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-2 md:mb-3" />
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">AI's Impact on Jobs</h2>
          <p className="text-sm md:text-lg text-muted-foreground">Some jobs are changing, others are disappearing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="bg-card border border-orange-500/20 rounded-xl p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
              <h3 className="text-lg md:text-xl font-bold">Jobs at High Risk</h3>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
              AI can now do many tasks that humans used to do. If your job is mostly repetitive or follows clear
              patterns, AI might be able to do it faster and cheaper.
            </p>
            <div className="space-y-2">
              <div className="bg-orange-500/5 rounded-lg p-2 md:p-3">
                <div className="font-semibold text-xs md:text-sm mb-1">Entry-Level Programmers</div>
                <p className="text-xs text-muted-foreground">
                  AI like ChatGPT and GitHub Copilot can write basic code. Companies may hire fewer junior developers.
                </p>
              </div>
              <div className="bg-orange-500/5 rounded-lg p-2 md:p-3">
                <div className="font-semibold text-xs md:text-sm mb-1">Customer Service</div>
                <p className="text-xs text-muted-foreground">
                  AI chatbots can handle common questions 24/7 without breaks or salaries.
                </p>
              </div>
              <div className="bg-orange-500/5 rounded-lg p-2 md:p-3">
                <div className="font-semibold text-xs md:text-sm mb-1">Data Entry & Admin</div>
                <p className="text-xs text-muted-foreground">
                  AI can process forms, organize data, and handle paperwork automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl overflow-hidden">
              <img
                src="/worried-office-workers-ai-replacing-jobs-automatio.jpg"
                alt="Job Displacement"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-card border rounded-xl p-3 md:p-4">
              <h4 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm">More At-Risk Roles</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Content Writers</div>
                  <div className="text-muted-foreground">AI writes articles</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Translators</div>
                  <div className="text-muted-foreground">AI translates instantly</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Graphic Designers</div>
                  <div className="text-muted-foreground">AI generates images</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Accountants</div>
                  <div className="text-muted-foreground">AI processes numbers</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Paralegals</div>
                  <div className="text-muted-foreground">AI reviews documents</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="font-medium">Recruiters</div>
                  <div className="text-muted-foreground">AI screens resumes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-orange-500/20 rounded-xl p-4 md:p-5">
          <h3 className="text-base md:text-lg font-bold mb-2 text-center">The Hard Truth</h3>
          <p className="text-center text-muted-foreground text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
            Studies suggest that AI could impact 300+ million jobs worldwide in the next decade. This doesn't mean all
            these jobs will disappear, but they will change significantly. Workers will need to adapt and learn new
            skills to stay relevant.
          </p>
        </div>
      </div>
    </div>
  )
}
