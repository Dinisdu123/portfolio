import "../Projectss/Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        <div className="project-card">
          <img
            src="/assets/tlmsss.png"
            alt="Teachers' Leave Management System"
            className="project-image"
          />
          <h3>Teachers' Leave Management System</h3>
          <p className="description">
            A web-based application developed to digitalize the leave
            application process in Sri Lankan government schools, which
            traditionally relies on paperwork. The system allows teachers to
            apply for leave online, while administrators can review, approve,
            and track leave records efficiently.
          </p>
          <div className="tech-stack">
            <h4>🔧Tech Stack:</h4>
            <p>PHP, Laravel, MySQL</p>
          </div>
          <div className="key-features">
            <h4>📌Key Features:</h4>
            <p>
              Leave requests, approval workflows, user roles
              (teachers/principal/zonal), Zonal administration
            </p>
          </div>
          <div className="impact">
            <h4>💡Impact:</h4>
            <p>
              Saves time, reduces paperwork, provides transparent leave tracking
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/assets/ecomss.png"
            alt="Project 2"
            className="project-image"
          />
          <h3>Luxury Goods E-Commerce Platform</h3>
          <p className="description">
            A full-featured eCommerce website for selling premium luxury
            products such as fragrances, accessories, and leather goods. Users
            can browse products by category, manage carts, and place orders
            securely.
          </p>
          <div className="tech-stack">
            <h4>🔧Tech Stack:</h4>
            <p>
              Laravel, PHP, MongoDB (product storage), MySQL (user/order data)
            </p>
          </div>
          <div className="key-features">
            <h4>📌Key Features:</h4>
            <p>
              Product catalog, order management, user roles (admin/customer),
              and secure checkout
            </p>
          </div>
          <div className="impact">
            <h4>💡Special:</h4>
            <p>
              Hybrid database architecture using both MongoDB and MySQL for
              optimized performance
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/assets/lmsss.png"
            alt="Project 3"
            className="project-image"
          />
          <h3>Loan Management System</h3>
          <p className="description">
            A system designed to track personal and client loan transactions,
            allowing users to monitor loan amounts, repayment schedules, and
            outstanding balances. Useful for small business owners or
            individuals managing multiple loans.
          </p>
          <div className="tech-stack">
            <h4>🔧Tech Stack:</h4>
            <p>PHP, Laravel, MySQL</p>
          </div>
          <div className="key-features">
            <h4>📌Key Features:</h4>
            <p>
              {" "}
              Loan entry (given/received), repayment tracking, balance
              summaries, due reminders, Sms notification
            </p>
          </div>
          <div className="impact">
            <h4>💡Use case:</h4>
            <p>
              Helps keep accurate financial records and avoid missed payments
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/assets/supermarketss.png"
            alt="Project 4"
            className="project-image"
          />
          <h3>Supermarket Website</h3>
          <p className="description">
            A simple frontend website for a fictional supermarket, presenting
            categories, featured products, and promotional sections. Ideal for
            prototyping future eCommerce integrations.
          </p>
          <div className="tech-stack">
            <h4>🔧Tech Stack:</h4>
            <p>HTML, CSS</p>
          </div>
          <div className="key-features">
            <h4>📌Key Features:</h4>
            <p>Static homepage, product categories, responsive layout</p>
          </div>
          <div className="impact">
            <h4>💡 Use Case:</h4>
            <p>Demonstrates frontend design skills and layout responsiveness</p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="/assets/wildlifess.png"
            alt="Project 5"
            className="project-image"
          />
          <h3>Sri Lankan Wildlife Website</h3>
          <p className="description">
            An informative and visually appealing static website that showcases
            the rich biodiversity of Sri Lanka’s wildlife, including elephants,
            leopards, and endemic species.
          </p>
          <div className="tech-stack">
            <h4>🔧Tech Stack:</h4>
            <p>HTML, CSS, JS</p>
          </div>
          <div className="key-features">
            <h4>📌Key Features:</h4>
            <p>Clean UI, wildlife category sections, responsive design</p>
          </div>
          <div className="impact">
            <h4>💡Goal:</h4>
            <p>
              {" "}
              Raise awareness about Sri Lanka's wildlife and conservation
              efforts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
