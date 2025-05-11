import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgba(0,0,0,0.8)] text-[#4B4B4B]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#c58c8c] text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Todo-List App",
                desc:
                  " A full-stack task management application built using the MERN stack (MongoDB, Express.js, React, Node.js). It features user-friendly interfaces and seamless CRUD functionality, demonstrating strong skills in both frontend and backend web development.",
                tech: ["React", "Node.js", "Express", "MongoDB"],
              },
              {
                title: "Portfolio Website",
                desc:
                  " A personal portfolio built with React, Vite, and Tailwind CSS to showcase web development projects. It features a modern, responsive design with smooth navigation and clean UI to highlight skills and experience effectively.",
                tech: ["Vite", "React", "Tailwind"],
              },
              {
                title: "Social-Media Web App",
                desc:
                  " – A dynamic platform that enables users to create profiles, post content, like, comment, and connect with others. Built to replicate core social media functionality with an interactive and responsive user experience.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
              },
              {
                title: "Real-Time Chat App",
                desc:
                  "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
                tech: ["MongoDB", "Express", "React", "Node"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#FAD1D1]/10 border border-[#4c4b4b] hover:border-[#eea7a7] hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2 text-[#c58c8c]">{project.title}</h3>
                <p className="text-[#e9dddd] mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FAD1D1]/10 text-[#e9dddd] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
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
