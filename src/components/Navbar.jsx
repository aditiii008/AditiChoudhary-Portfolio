import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(250,240,242,0.8)] backdrop-blur-lg border-b border-[#f2d0a4]/30 shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-[#4B4B4B]">
            My<span className="text-[#925252]">Portfolio</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#ab4d4d]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#2C3E50] hover:text-[#FAD1D1] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#2C3E50] hover:text-[#FAD1D1] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#2C3E50] hover:text-[#FAD1D1] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#2C3E50] hover:text-[#FAD1D1] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
