"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                Sumit Kumar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* CTA Button */}
            <div className="ml-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                asChild
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="bg-black/20 backdrop-blur-md rounded-lg border border-white/10 p-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 border border-transparent hover:border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    <span>{item.label}</span>
                  </span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-500/25"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="#contact">Hire Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles for header */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-1/3 w-0.5 h-0.5 bg-cyan-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse delay-2000"></div>
      </div>
    </header>
  )
}
