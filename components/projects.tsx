import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ZoomableImage } from "./ui/image"

const projects = [

  {
    title: "AirData",
    description:
      "Artificial Intelligence for Aviation Data Analysis, focusing on the development of a data storage and analysis system for the Brazilian civil aviation sector.",
    image: "/AirData-logo_1.png",
    technologies: ["LangGraph", "Ollama", "ChromaDB"],
    external: "https://www.airdata.ita.br/",
    featured: false,
  },
  {
    title: "Concrete Notebooks",
    description:
      "A curated set of interactive notebooks designed to bridge the gap between concrete concepts and practical coding, helping students overcome common learning bottlenecks in concrete.",
    image: "/image1.png",
    technologies: ["MatLab", "LiveScript"],
    github: "https://github.com/heyfalheiro1537/Concreto",
    external: "https://colab.research.google.com/drive/1DuMz66eosCsGEcu4_zsOIsvyrDcvhoaB?usp=sharing",
    featured: true,
  },
  {
    title: "Arduino Anti-Panic Device",
    description:
      "Device to support individuals experiencing panic attacks, combining breathing guidance with emergency alert features to assess the need for specialized intervention",
    image: "/search-interface.jpg",
    technologies: ["Arduino", "C++"],
    featured: false,
  },
  {
    title: "River Forecast MLP",
    description:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and more.",
    image: "/github-profile-dashboard.jpg",
    technologies: ["Matlab"],
    github: "https://github.com/heyfalheiro1537/riverflow-forecast-mlp",
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
