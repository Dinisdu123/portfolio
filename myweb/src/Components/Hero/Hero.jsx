import "../../Components/Hero/Hero.css";

function Hero() {
  return (
    <div className="Hero" id="hero">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR532IVMCnj26BY8467DN59E_cy0k78rH1eXw&s"
        alt="ProfilePic"
        className="profilePic"
      />
      <div className="hero-content">
        <h1 className="intro">
          Hi, I'm <span className="text-blue-500">Dinidu</span>
        </h1>
        <p className="aboutMe-p">
          a second-year Software Engineering student at APIIT Sri Lanka with a
          passion for full stack development. I love bringing ideas to life by
          building complete web applications using technologies like React,
          Laravel, SQL, and more.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/dinidu-sehara-b48301279/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img
              src="public\assets\linkedin.png"
              alt="LinkedIn icon"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/Dinisdu123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img
              src="public\assets\github-sign.png"
              alt="GitHub icon"
              className="social-icon"
            />
          </a>
          <a
            href="https://web.facebook.com/dinidu.sehara/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img
              src="https://img.icons8.com/ios_filled/512/facebook-new.png"
              alt="Facebook icon"
              className="social-icon"
            />
          </a>
          <a href="public\assets\cv.jpg" download className="cv-button">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
