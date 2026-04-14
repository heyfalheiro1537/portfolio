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
                <span className="text-accent">president of the school band</span>, worked as a field software engineer at{" "}
                <span className="text-accent">VTEX</span>,
                competed in hackathons, volunteered for three years at a prep school for low-income students,
                and built LLM-powered products at{" "}
                <span className="text-accent">Selvia AI Medical Accounting</span>.
              </>
            </p>
            <p>
              <>
                Today I’m a{" "}
                <span className="text-accent">Software Engineer at SumUp</span>, shipping production features in Elixir and Go while deepening my understanding of{" "}
                <span className="text-accent">distributed systems</span> and{" "}
                <span className="text-accent">observability</span>.
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
                Elixir
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Go
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Python
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Kotlin
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                React / Next.js
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                AWS (Lambda, SQS, SNS)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                OpenTelemetry
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                LangGraph
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                SQL / MongoDB
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                JavaScript (ES6+)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
