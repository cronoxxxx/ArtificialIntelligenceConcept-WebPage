import { Wrench, Car, Hammer, Stethoscope, Flame, Users } from "lucide-react"

export function WhatYouNeedToKnowSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center p-12 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-3">Jobs Least Affected by AI</h2>
          <p className="text-lg text-muted-foreground">
            Professions requiring hands-on work, physical presence, and human touch
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Vehicle Repair</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Auto mechanics, technicians, and vehicle specialists work with complex physical systems that require
              hands-on diagnosis and repair.
            </p>
            <div className="bg-primary/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Physical work, problem-solving, unpredictable repairs</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Skilled Trades</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Electricians, plumbers, HVAC technicians, and construction workers do hands-on work in unpredictable
              environments.
            </p>
            <div className="bg-secondary/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Physical labor, on-site problem-solving, adaptability</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Healthcare Workers</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Doctors, nurses, therapists, and caregivers require empathy, physical examination, and human judgment that
              AI cannot replicate.
            </p>
            <div className="bg-accent/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Direct patient care, emotional support, complex diagnoses</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Hammer className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Construction & Carpentry</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Carpenters, masons, welders, and builders create physical structures requiring precision, strength, and
              adaptability to site conditions.
            </p>
            <div className="bg-primary/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Physical craftsmanship, site-specific work, manual skill</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Emergency Services</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Firefighters, paramedics, and police officers make split-second decisions in life-or-death situations
              requiring physical courage.
            </p>
            <div className="bg-secondary/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Physical bravery, rapid decision-making, human judgment</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Social Workers</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Counselors, social workers, and therapists provide emotional support and navigate complex human situations
              requiring deep empathy.
            </p>
            <div className="bg-accent/5 rounded-lg p-3">
              <p className="text-xs font-medium">Why Safe: Empathy, trust-building, ethical judgment</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border rounded-xl p-6">
          <h3 className="text-lg font-bold mb-3 text-center">The Common Thread</h3>
          <p className="text-center text-muted-foreground leading-relaxed">
            Jobs requiring physical presence, hands-on work, emotional intelligence, and real-world problem-solving are
            the safest from AI automation. These professions need the irreplaceable human touch—manual skills,
            adaptability to unpredictable environments, and face-to-face human interaction that machines cannot
            replicate.
          </p>
        </div>
      </div>
    </div>
  )
}
