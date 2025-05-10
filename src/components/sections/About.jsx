import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgba(250,240,242,0.8)] text-[#4B4B4B]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#2C3E50] text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-[#FAD1D1]/80 border hover:shadow-lg transition-all hover:-translate-y-1">


            <p className="text-[#4B4B4B] mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#FAD1D1]/10 text-[#765151] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#FAD1D1]/10 text-[#a06b6b] py-1 px-3 rounded-full text-sm hover:bg-[#FAD1D1]/20 hover:shadow-[0_2px_8px_rgba(250,209,209,0.3)] transition"
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
              <h3 className="text-xl font-bold mb-4 text-[#2C3E50]"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-[#4B4B4B] space-y-2">
                <li>
                  <strong className="text-[#2C3E50]"> B.Tech in Computer Science </strong> - Sir M.Visvesvaraya Institute of Technology
                  (2022-2026)
                </li>
                <li>
                  <strong className="text-[#2C3E50]">Relevant Coursework:</strong> Data Structures, Web Development, Cloud
                  Computing,Blockchain,Computer Networking.
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-8 border-[#FAD1D1]/80 border hover:shadow-lg transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-[#2C3E50]"> 💼 Work Experience </h3>
              <div className="space-y-4 text-[#4B4B4B]">
                <div>
                  <h4 className="font-semibold text-[#2C3E50]">
                    Created a Portfolio website, Social-Media Web App, Blog App, Todo-List App...
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#2C3E50]">
                   
                  </h4>
                  <p>
                   
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
