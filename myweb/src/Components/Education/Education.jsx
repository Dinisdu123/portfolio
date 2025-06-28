import { useEffect } from "react";
import "../Education/Education.css";

function Education() {
  useEffect(() => {
    const timeline = document.querySelector(".timeline");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const educationH1 = document.querySelector(".education-h1");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(educationH1);
    observer.observe(timeline);
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="education" id="education">
      <h1 className="education-h1">Education</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <h2 className="timeline-title">BEng Software Engineering</h2>
            <p className="timeline-subtitle">Staffdshire University, UK</p>
            <p className="timeline-date">2023 - Present</p>
            <p className="timeline-description">
              Pursuing a degree in Software Engineering, focusing on full stack
              development with courses in Laravel, and database management.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2 className="timeline-title">Computer Foundation </h2>
            <p className="timeline-subtitle">Apiit Sri lanka</p>
            <p className="timeline-date">2022 - 2023</p>
            <p className="timeline-description">
              Completed a foundational year in computing at APIIT Sri Lanka,
              covering essential topics in programming fundamentals
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h2 className="timeline-title">Ordinary Level (O/L)</h2>
            <p className="timeline-subtitle">Eheliyagoda Central College</p>
            <p className="timeline-date">2020 - 2021 (2022)</p>
            <p className="timeline-description">
              Achieved 9 A passes in the G.C.E. Ordinary Level Examination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
