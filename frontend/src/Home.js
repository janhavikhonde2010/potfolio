import React, { useState } from "react";
import "./index.css";
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpeg';
import img5 from './assets/images/5.jpg';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Janhavi <span>Khonde</span></h1>
      </div>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About Me</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contac">Contact</a></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main" id="Home">
        <div className="main_content">
          <div className="main_text">
            <h1>JANHAVI<br /><span>Khonde</span></h1>
            <h2>Software Developer</h2>
          </div>
          <div className="main_image">
            <img src={img3} alt="Janhavi" />
          </div>
        </div>
      </div>

      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Footer />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="about" id="About">
      <h1>About<span>Me</span></h1>
      <div className="about_main">
        <div className="about_image">
          <div className="image_contaner">
            <img src={img5} alt="Janhavi About" />
          </div>
        </div>
        <div className="about_text" id="Aboutme">
        <p>
                    "I’m Janhavi Sharad Khonde, a Software Engineering student at SVKM's Institute of Technology in Dhule. My academic journey has been driven by a deep curiosity for technology and a commitment to mastering skills that matter in today’s digital landscape. I am proficient in Python, Web Design, Data Structures, and Data Analysis, and I’m always seeking to expand my technical abilities and take on new challenges.

In addition to my technical studies, I am honored to serve as the Training and Placement Coordinator at my institute, where I collaborate with industry professionals to facilitate growth and opportunities for my fellow students. This role has sharpened my organizational skills, teamwork abilities, and insight into the professional world.

I am eager to apply my knowledge and grow as a developer, with a goal of contributing positively to the tech industry and building impactful digital solutions. Thank you for visiting my portfolio—let’s connect!"
                </p>

        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="about_text" id="Skills">
      <h1>Skills</h1>
      
      <div className="skill-container">
        <div className="skill-label">Python</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "90%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">Web Design</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "80%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">Data Structures</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "85%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">Data Analysis</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "80%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">HTML/CSS</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "85%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">JavaScript</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "70%" }}></div></div>
      </div>
      <div className="skill-container">
        <div className="skill-label">SQL</div>
        <div className="skill-bar"><div className="skill-bar-inner" style={{ width: "80%" }}></div></div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="products" id="Projects">
      <h1>Projects</h1>
      <div className="card">
        <h2>Resume Maker</h2>
        <p>
          The Resume Maker Web Development project involves creating
          an intuitive web application that enables users to easily craft
          professional resumes. The platform will feature a variety of
          customizable templates, real-time editing, and secure data
          storage, ensuring a seamless and user-friendly experience for
          building standout resumes. Skills used - Web Development
        </p>
      </div>

      <div className="card">
        <h2>Vehicle Documentation</h2>
        <p>
          The Vehicle Documentation Project is a digital platform for
          secure storage and quick access to vehicle documents, including
          registrations, insurance, and service records. It streamlines
          document management, making it efficient and accessible for both
          individual owners and businesses.
        </p>
      </div>

      <div className="card">
        <h2>Twitter Data Analysis</h2>
        <p>
          The Twitter Data Analysis project collects and analyzes tweets
          to understand user behavior, trends, and sentiment. It uses
          techniques like sentiment analysis and network analysis, with
          results presented through visual reports and dashboards. Skills
          used - Python
        </p>
      </div>

      <div className="card">
        <h2>Janaivote - Voting System</h2>
        <p>
          The Janaivote project is a secure, transparent voting system
          using encryption and blockchain technology to ensure data
          integrity and prevent fraud. The system will provide voters
          with a reliable and transparent way to cast and validate their
          votes digitally.
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-card">
          <h3>SVKM's Institute of Technology</h3>
          <p>Software Engineering</p>
          <p>2021 - 2025</p>
        </div>

        <div className="education-card">
          <h3>Jahin College</h3>
          <p>Higher Secondary Education</p>
          <p>2020 - 2021</p>
        </div>

        <div className="education-card">
          <h3>Raje Sambhaji School</h3>
          <p>Secondary Education</p>
          <p>2019 - 2020</p>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <div className="about" id="resume">
      <h1>Resume</h1>
      <div className="about_main">
        <div className="about_text">
          <img src={img2} alt="Janhavi Resume" />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData); // Log formData to check

    try {
      const response = await fetch("https://backend-brk1k432h-janhavikhonde2010s-projects.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", mobile: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form.");
    }
  };

  return (
    <footer>
      <div className="footer_main" id="contac">
        <div className="tag">
          <h1>Let's Get In Touch</h1>
          <a href="mailto:janhavikhonde20@gmail.com" className="contact-link">janhavikhonde8220@gmail.com</a>
          <a href="tel:+8605125307" className="contact-link">Call: 8605125307</a>
          <p>12B, Santsena Nagar Devpur Dhule-424005</p>
        </div>
        <div className="feedback_form">
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button onClick={submitForm}>Send</button>
        </div>
      </div>
    </footer>
  );
};

export default Home;
