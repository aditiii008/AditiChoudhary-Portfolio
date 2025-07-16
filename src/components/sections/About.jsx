import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Google Maps API",
    "Framer Motion",
  ];

  const backendSkills = [
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "Stripe",
    "Geolocation API",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgba(0,0,0,0.8)] text-[#4B4B4B]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#c58c8c] text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-[#FAD1D1]/80 border hover:shadow-lg transition-all hover:-translate-y-1">
            <p className="text-[#cdc6c6] mb-6">
              Passionate full-stack developer with experience building modern
              and scalable web applications. I specialize in frontend
              development with React and Next.js and enjoy bringing ideas to
              life with clean, responsive UI and integrated backend services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-[#c58c8c]">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#FAD1D1]/10 text-[#e9dddd] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-[#c58c8c]">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#FAD1D1]/10 text-[#e9dddd] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-8 border-[#FAD1D1]/80 border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-[#c58c8c]">
                 Education
              </h3>
              <ul className="list-disc list-inside text-[#f4f0f0] space-y-2">
                <li>
                  <strong className="text-[#c58c8c]">
                    B.Tech in Computer Science
                  </strong>{" "}
                  - Sir M. Visvesvaraya Institute of Technology (2022–2026)
                </li>
                <li>
                  <strong className="text-[#c58c8c]">
                    Relevant Coursework:
                  </strong>{" "}
                  Data Structures, Web Development, Cloud Computing,
                  Blockchain, Computer Networking.
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-8 border-[#FAD1D1]/80 border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-[#c58c8c]">
                 Work Experience
              </h3>
              <div className="space-y-4 text-[#f4eded]">
                <div>
                  <h4 className="font-semibold text-[#c58c8c]">
                    Built and deployed Travel Planner, E-Commerce Store, and
                    Portfolio Website
                  </h4>
                  <p>
                    Designed and developed full-stack web apps using modern
                    technologies like Next.js, Tailwind, Stripe, and PostgreSQL.
                    Experience with geolocation APIs and serverless deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
