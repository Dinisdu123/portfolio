import "../Skills/Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <h2 className="skills-h2">Front end tools</h2>
      <div className="front">
        <div className="skill-item">
          <img src="public/assets/html.png" alt="HTML Logo" width="80" />
        </div>
        <div className="skill-item">
          <img src="public/assets/css-3.png" alt="CSS Logo" width="80" />
        </div>
        <div className="skill-item">
          <img src="public/assets/js.png" alt="JavaScript Logo" width="80" />
        </div>
        <div className="skill-item">
          <img src="public/assets/science.png" alt="React Logo" width="80" />
        </div>
        <div className="skill-item">
          <img
            src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
            alt="Tailwind Logo"
            width="80"
          />
        </div>
        <div className="skill-item">
          <img src="public/assets/figma.png" alt="Figma Logo" width="80" />
        </div>
      </div>
      <h2 className="skills-h2">Back end tools</h2>
      <div className="back">
        <div className="skill-item">
          <img src="public/assets/php.png" alt="PHP Logo" width="80" />
        </div>
        <div className="skill-item">
          <img src="public/assets/python.png" alt="Python Logo" width="80" />
        </div>
        <div className="skill-item">
          <img
            src="https://avatars.githubusercontent.com/u/958072?v=4"
            alt="Laravel Logo"
            width="80"
          />
        </div>
        <div className="skill-item">
          <img src="public/assets/mysql.png" alt="MySQL Logo" width="80" />
        </div>
        <div className="skill-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s"
            alt="MongoDB Logo"
            width="80"
          />
        </div>
      </div>
      <h2 className="skills-h2">Tools and platforms</h2>
      <div className="tools">
        <div className="skill-item">
          <img src="public/assets/social.png" alt="Git Logo" width="80" />
        </div>
        <div className="skill-item">
          <img
            src="public/assets/github-sign.png"
            alt="GitHub Logo"
            width="80"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROG8j7es3DqRFFFY1vfydRcwFccby0WaqPEA&s"
            alt="Postman Logo"
            width="80"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="VS Code Logo"
            width="80"
          />
        </div>
        <div className="skill-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
            alt="Vite Logo"
            width="80"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
