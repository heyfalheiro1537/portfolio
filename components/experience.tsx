import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
    link: "https://klaviyo.com",
  },
  {
    period: "2018 — 2024",
    title: "Senior Frontend Engineer",
    company: "Upstatement",
    description:
      "Delivered high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "WordPress"],
    link: "https://upstatement.com",
  },
  {
    period: "2017 — 2018",
    title: "Frontend Developer",
    company: "Scout Studio",
    description:
      "Collaborated with a team of designers and developers to build modern, responsive web applications for various clients in the healthcare and education sectors.",
    technologies: ["JavaScript", "React", "Sass", "WordPress"],
    link: "https://scoutstudio.com",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-16 text-balance">Experience</h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{exp.period}</p>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                    {exp.title} · {exp.company}
                    {exp.link && <ExternalLink className="inline ml-2 w-4 h-4" />}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            View Full Résumé
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
