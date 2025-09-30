import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8 text-balance">Get In Touch</h2>

        <p className="text-muted-foreground leading-relaxed mb-12 text-balance">
          I'm actively seeking new opportunities in the AI field. My inbox is always open—whether you have a question, a project idea, or just want to connect, feel free to reach out. I'll do my best to respond promptly!
        </p>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          <a href="mailto:hello@example.com">Say Hello</a>
        </Button>
      </div>

      <footer className="mt-24 text-center">
        <p className="text-sm text-muted-foreground">Built with Next.js and Tailwind CSS, deployed with Vercel.</p>
      </footer>
    </section>
  )
}
