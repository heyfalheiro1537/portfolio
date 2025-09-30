
import { ExternalLink } from "lucide-react"

const experiences =
  [
    {
      "period": "November 2024 — May 2025",
      "title": "Software Engineer Intern",
      "company": "Selvia AI Medical Accounting",
      "description": "Designed AI-powered agents and automated workflows integrated with WhatsApp and banking systems, improving customer engagement and reducing manual operations by over half.",
      "technologies": ["Python", "LangGraph", "AWS", "MongoDB", "TypeScript", "React"],
      "link": "https://www.selvia.com.br/"
    },
    {
      "period": "July 2023 — June 2024",
      "title": "Field Software Engineer",
      "company": "VTEX Ecommerce Solutions",
      "description": "Served as a go-to engineer resolving complex issues across 100+ enterprise e-commerce platforms while leading churn-reduction and training initiatives that strengthened client retention and team efficiency.",
      "technologies": ["Postman", "React", "HTML", "CSS", "Infrastructure"],
      "link": "https://vtex.com/"
    },
    {
      "period": "Since January 2024",
      "title": "Coding Fellow",
      "company": "Makers Fellowship",
      "description": "Selected for a fellowship empowering the top 1% Latin American talent, collaborating on entrepreneurial projects that built leadership, teamwork, and innovation skills for scaling impactful tech ventures.",
      "technologies": ["Entrepreneurship", "Leadership", "Teamwork"],
      "link": "https://makers.ngo/"
    }
  ]




export function Experience() {
  return (
    <section id="experience" className="py-24 px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-balance">Experience</h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-4 gap-8">


                <a className="lg:col-span-3" href={exp.link} target="_blank"
                  rel="noopener noreferrer">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors cursor-pointer">
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
                </a>
                <div className="lg:col-span-1 min-w-[250px] mt-1">
                  <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="/Heyder_Falheiro.pdf"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            See More
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
