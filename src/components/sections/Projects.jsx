import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Planner App",
      link: "https://travel-planner-theta-brown.vercel.app",
      desc:
        "A full-stack travel planning app built with Next.js and Google Maps API. Users can create and manage custom itineraries, visualize routes, and explore locations with real-time geolocation and map interaction.",
      tech: ["Next.js", "Google Maps API", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "E-Commerce Store",
      link: "https://skincare-app-delta.vercel.app",
      desc:
        "A modern e-commerce platform built using Next.js 15 and App Router. Features Stripe-powered checkout, responsive product pages, and a sleek UI built with Tailwind CSS and React Server Components.",
      tech: ["Next.js 15", "Stripe", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Portfolio Website",
      link: "https://youtu.be/j7Qu65rUcsY",
      desc:
        "Personal developer portfolio designed with React and Tailwind CSS. Showcases projects and skills with smooth animations, a responsive layout, and an elegant modern design.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    },
  ];

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
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#FAD1D1]/10 border border-[#4c4b4b] hover:border-[#eea7a7] hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-[#c58c8c] hover:text-[#f5aaaa] transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>
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
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
