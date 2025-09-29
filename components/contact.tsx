import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-8 text-balance">Get In Touch</h2>

        <p className="text-muted-foreground leading-relaxed mb-12 text-balance">
          {
            "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          }
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
