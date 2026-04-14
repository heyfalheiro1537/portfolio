import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ZoomableImage } from "./ui/image"

const projects = [
  {
    title: "AirData",
    description:
      "An AI-powered platform for aviation data analysis, developing a comprehensive storage and analysis system for Brazil's civil aviation sector.",
    image: "/AirData-logo_1.png",
    technologies: ["LangGraph", "Ollama", "ChromaDB"],
    external: "https://www.airdata.ita.br/",
    featured: false,
  },
  {
    title: "PanOptic Billing Dashboard",
    description:
      "A comprehensive billing log and financial dashboard for tech founders, developed for the Brex Challenge. Provides clear insights into company financial activities.",
    image: "/brex_challenge.png",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/heyfalheiro1537/PanOptic",
    external: "https://v0-founder-tech-dashboard.vercel.app/",
    featured: true,
  },
  {
    title: "Loyal Cards",
    description:
      "A full-stack platform that empowers small businesses to create and manage digital loyalty programs through integration with the Google Wallet API. Developed during the Lovable Hackathon.",
    image: "/loyal-cards.png",
    technologies: ["Next.js", "Supabase", "TypeScript", "Google Wallet API"],
    external: "https://loyal-mint-forge.lovable.app/",
    featured: true,
  },
  {
    title: "Image Labelling System",
    description:
      "An intelligent image labeling system designed to streamline the annotation of image datasets. It uses a FastAPI backend for AI-powered suggestions and a Next.js frontend for an intuitive user interface, accelerating the creation of high-quality training data.",
    image: "/paladium.png",
    technologies: ["Next.js", "TypeScript", "FastApi"],
    github: "https://github.com/heyfalheiro1537/Paladium",
    external: "https://www.loom.com/share/8b3ffe0d60ce42a8bf1bf42b82ce397f",
    featured: true,
  },


  {
    title: "Interactive Concrete Design Notebooks",
    description:
      "A curated set of interactive notebooks designed to bridge the gap between complex engineering concepts and practical coding, helping students master concrete design principles.",
    image: "/image1.png",
    technologies: ["MatLab", "LiveScript"],
    github: "https://github.com/heyfalheiro1537/Concreto",
    external: "https://colab.research.google.com/drive/1DuMz66eosCsGEcu4_zsOIsvyrDcvhoaB?usp=sharing",
    featured: true,
  },
  {
    title: "Arduino Anti-Panic Device",
    description:
      "An Arduino-based device to assist individuals during panic attacks by providing guided breathing exercises and an emergency alert system for timely intervention.",
    image: "/search-interface.jpg",
    technologies: ["Arduino", "C++"],
    featured: false,
  },
  {
    title: "River Flow Forecasting with MLP",
    description:
      "A machine learning model using a Multi-Layer Perceptron (MLP) to forecast river flow. Developed in Matlab, this project applies neural networks to hydrological data for predictive analysis.",
    image: "/github-profile-dashboard.jpg",
    technologies: ["Matlab"],
    github: "https://github.com/heyfalheiro1537/riverflow-forecast-mlp",
    featured: false,
  },
  {
    title: "Postman API Sync",
    description:
      "A CLI tool that synchronizes OpenAPI specs with Postman collections, enabling automated documentation updates and reducing drift between API contracts and Postman workspaces.",
    image: "/github-profile-dashboard.jpg",
    technologies: ["TypeScript", "Node.js", "Postman API"],
    github: "https://github.com/heyfalheiro1537/postman-enricher",
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-16 text-balance">Some Things I've Built</h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">

          {featuredProjects.map((project, index) => (

            <div key={project.title} className="group">
              <div className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>

                  <ZoomableImage project={{ title: project.title, image: project.image }} />

                </div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-4`}>
                  <p className="text-accent text-sm font-mono">Featured Project</p>
                  <h3 className="text-2xl font-medium text-balance">{project.title}</h3>

                  <a
                    href={project.external ? project.external : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm transition delay-30 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </Card>
                  </a>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-sm text-muted-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="External Link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-light mb-12 text-balance">Other Noteworthy Projects</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title} className="p-6 group hover:bg-card/80 transition-colors">

                <div className="flex items-center justify-between">
                  {/* título à esquerda */}
                  <h4 className="text-lg font-medium mt-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>

                  {/* ícones à direita */}
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>



                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
