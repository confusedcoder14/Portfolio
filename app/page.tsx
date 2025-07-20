import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/10 to-cyan-500/10"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/60 rounded-full animate-float delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-300/60 rounded-full animate-float delay-1500"></div>
          <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-300/60 rounded-full animate-float delay-2000"></div>
        </div>
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
