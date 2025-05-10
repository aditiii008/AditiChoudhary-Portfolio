import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgba(250,240,242,0.8)] text-[#4B4B4B]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#2C3E50] text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Todo-List App",
                desc:
                  "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
                tech: ["React", "Node.js", "Express", "MongoDB"],
              },
              {
                title: "Portfolio Website",
                desc:
                  "ML-powered data visualization platform with predictive analytics and interactive reports.",
                tech: ["Vite", "React", "Tailwind"],
              },
              {
                title: "Social-Media Web App",
                desc:
                  "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
              },
              {
                title: "Blog App",
                desc:
                  "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
                tech: ["MongoDB", "Express", "React", "Node"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#FAD1D1]/10 border border-[#4c4b4b] hover:border-[#eea7a7] hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">{project.title}</h3>
                <p className="text-[#4B4B4B] mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FAD1D1]/10 text-[#a06b6b] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-[#6c5151] hover:text-[#f5aaaa] transition-colors my-4"
                  >
                    
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
