import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                      AC
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              {
                "I'm a passionate frontend developer with 5+ years of experience creating engaging web applications. I specialize in React, Next.js, and modern CSS frameworks."
              }
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing to open source projects,
              or sharing knowledge through technical writing and mentoring.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="font-semibold mb-2 text-cyan-300">Location</h3>
                <p className="text-gray-300">Sitamarhi, Bihar</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="font-semibold mb-2 text-purple-300">Experience</h3>
                <p className="text-gray-300">6 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
