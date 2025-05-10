import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[rgba(0,0,0,0.8)] text-[#4B4B4B]"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#a06b6b] to-[#F28D8D] bg-clip-text text-transparent leading-tight">
            Hi, I'm Aditi Choudhary
          </h1>

          <p className="text-[#4B4B4B] text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#f7e7e7] text-[#845353] py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-[#F28D8D] hover:text-white hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#FAD1D1] text-[#a06b6b] py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-[#FAD1D1]/30 hover:text-[#a06b6b] hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
