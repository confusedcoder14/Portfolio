import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Hero Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
          Frontend Developer
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            & UI Engineer
          </span>
        </h1>
      </div>

      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        I create beautiful, responsive web applications with modern technologies. Passionate about user experience and
        clean, maintainable code that brings ideas to life.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25"
          asChild
        >
          <Link href="#projects">
            <span className="relative z-10">View My Work</span>
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white backdrop-blur-sm bg-transparent"
          asChild
        >
          <Link href="#contact">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Link>
        </Button>
      </div>

      <div className="flex justify-center space-x-8">
        <Link href="https://github.com/confusedcoder14" className="group transition-all duration-300 hover:scale-110">
          <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
            <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#ffffff"
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="sr-only">GitHub</span>
        </Link>

        <Link
          href="https://linkedin.com/in/sumit-kumar-520438227"
          className="group transition-all duration-300 hover:scale-110"
        >
          <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-all duration-300">
            <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#0A66C2"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </div>
          <span className="sr-only">LinkedIn</span>
        </Link>

        <Link
          href="https://docs.google.com/document/d/17rK1KLsp-I-SrDNrc-Yq8TU3KkTBy9pc/edit?usp=drive_link&ouid=100280528161638463229&rtpof=true&sd=true"
          className="group transition-all duration-300 hover:scale-110"
        >
          <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-gradient-to-r group-hover:from-purple-500/20 group-hover:to-cyan-500/20 group-hover:border-purple-400/30 transition-all duration-300">
            <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id="resumeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="50%" stopColor="#4ECDC4" />
                  <stop offset="100%" stopColor="#45B7D1" />
                </linearGradient>
              </defs>
              <path
                fill="url(#resumeGradient)"
                d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
              />
            </svg>
          </div>
          <span className="sr-only">Resume</span>
        </Link>

        <Link href="mailto:sumitthakur776694@email.com" className="group transition-all duration-300 hover:scale-110">
          <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-gradient-to-r group-hover:from-red-500/20 group-hover:to-yellow-500/20 group-hover:border-red-400/30 transition-all duration-300">
            <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id="emailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EA4335" />
                  <stop offset="25%" stopColor="#FBBC05" />
                  <stop offset="50%" stopColor="#34A853" />
                  <stop offset="75%" stopColor="#4285F4" />
                  <stop offset="100%" stopColor="#9C27B0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#emailGradient)"
                d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
              />
            </svg>
          </div>
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </section>
  )
}