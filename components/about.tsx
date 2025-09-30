export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-16 text-balance">About</h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <>
                In 2022, I set out on the challenge of joining one of the{" "}
                <span className="text-accent">most prestigious colleges in Brazil</span>.
                That journey shaped me, but it doesn’t define me entirely.
              </>
            </p>
            <p>
              <>

                Alongside being an{" "}
                <span className="text-accent">engineering student at ITA</span>, I’ve been{" "}
                <span className="text-accent">president of the school band</span>, started my first{" "}
                <span className="text-accent">full-time role at VTEX</span> as a field software engineer,
                competed in hackathons, volunteered for three years at a prep school for low-income students,
                and became one of the first developers at{" "}
                <span className="text-accent">Selvia AI Medical Accounting</span>.
              </>
            </p>
            <p>
              <>
                Today, I’m deeply curious about{" "}
                <span className="text-accent">how LLMs work</span>—studying algorithms and architectures
                to push my understanding further and bring new projects to life.
              </>
            </p>
            <p>
              <>
                Outside of work, I enjoy <span className="text-accent">cooking</span>,
                playing <span className="text-accent">roguelike games</span>,
                and trying to finally beat{" "}
                <span className="text-accent">Super Meat Boy</span>.
              </>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-6">Technologies I work with:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                JavaScript (ES6+)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                React
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Next.js
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Node.js
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Python
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                SQL
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                MongoDB
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                AWS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                LangChain
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                LangGraph
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
