import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedItem, setFocusedItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavItems = (sectionId) => {
    setFocusedItem(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-48 max-[1030px]:px-20 max-[850px]:px-10 ${
        isScrolled
          ? "bg-[#050414]/5 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-6 flex justify-between items-center">
        {/* logo */}
        <div className="text-xl max-[1030px]:text-lg max-[850px]:text-sm font-bold max-[1030px]:font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Mamoon</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Ahmad</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* nav-items */}
        <div className="max-[601px]:hidden">
          <ul className="flex items-center justify-center space-x-10 text-lg max-[850px]:text-sm font-medium">
            {navItems.map((i) => (
              <li
                className={`hover:text-[#8245ec] ${
                  focusedItem === i.id ? "text-[#8245ec]" : ""
                }`}
                key={i.id}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handleNavItems(i.id)}
                >
                  {i.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* social media icons */}
        <div className="flex space-x-6 max-[601px]:hidden">
          <a
            href="https://github.com/MamoonAhmadKhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mamoonahmad887"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* hamburger menu icon */}
        <div className="min-[601px]:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl cursor-pointer text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* hamburger menu items */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 min-[601px]:hidden transform -translate-x-1/2 w-4/5 bg-[#050414] opacity-80 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            {navItems.map((i) => (
              <li
                className={`hover:text-[#8245ec] ${
                  focusedItem === i.id ? "text-[#8245ec]" : ""
                }`}
                key={i.id}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => handleNavItems(i.id)}
                >
                  {i.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://github.com/MamoonAhmadKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mamoonahmad887"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
