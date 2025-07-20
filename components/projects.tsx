import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Car Rental Service",
      description:
        "You decide whether you'd like to rent a car for an hour, a week, a month, or on a daily basis. Features include flexible rental periods, doorstep delivery, and subscription options.",
      image: "/images/car-rental-project.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://revv-peach.vercel.app/",
      githubUrl: "https://github.com/confusedcoder14/revv",
    },
    {
      title: "Leave Management System",
      description:
        "A comprehensive system where employees can submit leave requests online and manage their leave effectively. Features automated workflows, real-time notifications, and integrated calendars.",
      image: "/images/leave-management-project.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
      liveUrl: "https://leave-management-system-plum.vercel.app/",
      githubUrl: "https://github.com/confusedcoder14/EASY-LEAVE",
    },
    {
      title: "Plagiarism Checker For Content",
      description:
        "Advanced AI-powered writing assistant that provides highly accurate plagiarism detection. Features deep search capabilities, real-time detection, and secure data handling across multiple file formats.",
      image: "/images/plagiarism-checker-project.png",
      technologies: ["React", "Node.js", "AI/ML APIs", "File Processing", "TypeScript"],
      liveUrl: "https://plagiarism-checker-seven.vercel.app",
      githubUrl: "https://github.com/confusedcoder14/Plagiarism-checker",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
