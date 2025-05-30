export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(166,155,157,0.95)] z-40 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "h-screen opacity-100 pointer-events-auto"
                      : "h-0 opacity-0 pointer-events-none"
                  }
                `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#622f2f] text-4xl focus:outline-none cursor-pointer hover:text-[#a35e6c]"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {["home", "about", "projects", "contact"].map((section, idx) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#7f4d4d] my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      } hover:text-[#a35e6c]
          `}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
