import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for multiple client projects, mentoring junior developers, and implementing modern React patterns and performance optimizations.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications using React and Next.js, collaborated with design teams to implement pixel-perfect UIs, and improved application performance by 40%.",
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description:
        "Built custom WordPress themes, implemented interactive JavaScript features, and worked on various client websites with focus on mobile responsiveness.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
