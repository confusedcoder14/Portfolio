import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">Sumit Kumar</h3>
            <p className="text-muted-foreground">Frontend Developer & UI Engineer</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/confusedcoder14" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/sumit-kumar-520438227" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Sumit Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
