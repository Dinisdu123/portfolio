import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projectss/Projects.jsx";
import EmailForm from "./Components/Footer/EmailForm.jsx";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Education></Education>
      <Skills />
      <Projects />
      <EmailForm></EmailForm>
    </div>
  );
}

export default App;
