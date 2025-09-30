import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-left px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-left">
          {/* Left side - Name and title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-balance mb-6 mt-10">Heyder Falheiro</h1>
            <p className="text-xl text-muted-foreground mb-6 font-light">Software Developer</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Just another enthusiast
            </p>

            {/* Social links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/heyfalheiro1537"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/heyderfalheiro/"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=heyfalheiro@gmail.com&su=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Bio */}
          {/* <div className="text-muted-foreground leading-relaxed space-y-6">
            <p>
              {
                "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."
              }
            </p>
            <p>
              {"Currently, I'm a Senior Front-End Engineer at"} <span className="text-accent">Company Name</span>
              {
                ", specializing in accessibility. I contribute to the creation and maintenance of UI components that power our platform, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience."
              }
            </p>
            <p>
              {"In the past, I've had the opportunity to develop software across a variety of settings — from"}{" "}
              <span className="text-accent">advertising agencies</span> and{" "}
              <span className="text-accent">large corporations</span> to <span className="text-accent">start-ups</span>{" "}
              and <span className="text-accent">small digital product studios</span>
              {". Additionally, I also released a"} <span className="text-accent">comprehensive video course</span>
              {" a few years ago, guiding learners through building a web app with the Spotify API."}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
