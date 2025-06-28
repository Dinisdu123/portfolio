import "./Navbar.css";
import { useEffect } from "react";

function NavBar() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="navBar">
      <h2 className="logo">Dinidu Sehara</h2>
      <ul>
        <li>
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#education" onClick={(e) => handleNavClick(e, "#education")}>
            Education
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </li>
      </ul>
      <a
        href="#email-form"
        className="contact-button"
        onClick={(e) => handleNavClick(e, "#email-form")}
      >
        Contact Me
      </a>
      <div className="progress-bar"></div>
    </div>
  );
}

export default NavBar;
