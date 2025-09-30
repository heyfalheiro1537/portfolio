import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ZoomableImage } from "./ui/image"

const projects = [

  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image: "/code-editor-dark-theme.png",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
    github: "https://github.com",
    external: "https://halcyon-theme.netlify.app",
    featured: true,
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
    title: "Integrating Algolia Search",
    description:
      "Building a custom search experience with Algolia and its React library. Includes custom styling, filters, pagination, and more.",
    image: "/search-interface.jpg",
    technologies: ["Algolia", "React", "Gatsby"],
    external: "https://algolia-search-demo.netlify.app",
    featured: false,
  },
  {
    title: "OctoProfile",
    description:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and more.",
    image: "/github-profile-dashboard.jpg",
    technologies: ["React", "GitHub API", "Chart.js"],
    github: "https://github.com",
    external: "https://octoprofile.vercel.app",
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

                  <Card className="p-6 bg-card/50 backdrop-blur-sm">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </Card>

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
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="External Link"
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
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <ExternalLink size={20} className="text-accent" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} className="text-muted-foreground hover:text-accent transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="text-muted-foreground hover:text-accent transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-medium mb-3 group-hover:text-accent transition-colors">{project.title}</h4>

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
