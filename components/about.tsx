export function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-16 text-balance">About</h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {
                "Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I've had the privilege of building software for an"
              }{" "}
              <span className="text-accent">advertising agency</span>
              {", a"} <span className="text-accent">start-up</span>
              {", a"} <span className="text-accent">huge corporation</span>
              {", and a"} <span className="text-accent">digital product studio</span>
              {"."}
            </p>
            <p>
              {"My main focus these days is building accessible, inclusive products and digital experiences at"}{" "}
              <span className="text-accent">Upstatement</span>
              {
                " for a variety of clients. I most enjoy working on projects that challenge me to learn something new and push me to grow as a developer."
              }
            </p>
            <p>
              {
                "When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for"
              }{" "}
              <span className="text-accent">Korok seeds</span>
              {"."}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
