import React, { useState, useEffect } from "react";
import "./index.css";
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpeg';
import img5 from './assets/images/5.jpg';

const Navbar = () => {
  useEffect(() => {
    document.querySelectorAll("a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <nav>
      <div className="logo">
        <h1>Janhavi <span>Khonde</span></h1>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main" id="home">
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
    <div className="about" id="about">
      <h1>About <span>Me</span></h1>
      <div className="about_main">
        <div className="about_image">
          <div className="image_contaner">
            <img src={img5} alt="Janhavi About" />
          </div>
        </div>
        <div className="about_text">
          <p>
            "I’m Janhavi Sharad Khonde, a Software Engineering student at SVKM's Institute of Technology in Dhule. 
            My academic journey has been driven by a deep curiosity for technology and a commitment to mastering 
            skills that matter in today’s digital landscape..."
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillData = [
    { name: "Python", width: "90%" },
    { name: "Web Design", width: "80%" },
    { name: "Data Structures", width: "85%" },
    { name: "Data Analysis", width: "80%" },
    { name: "HTML/CSS", width: "85%" },
    { name: "JavaScript", width: "70%" },
    { name: "SQL", width: "80%" },
  ];

  return (
    <div className="about_text" id="skills">
      <h1>Skills</h1>
      {skillData.map((skill, index) => (
        <div className="skill-container" key={index}>
          <div className="skill-label">{skill.name}</div>
          <div className="skill-bar">
            <div className="skill-bar-inner" style={{ width: skill.width }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const projectData = [
    { 
      title: "Resume Maker",
      description: "A web application that enables users to craft professional resumes with customizable templates and real-time editing."
    },
    { 
      title: "Vehicle Documentation",
      description: "A digital platform for secure storage and quick access to vehicle documents, including registrations, insurance, and service records."
    },
    { 
      title: "Twitter Data Analysis",
      description: "Analyzes tweets to understand user behavior, trends, and sentiment using sentiment analysis and network analysis."
    },
    { 
      title: "Janaivote - Voting System",
      description: "A secure voting system using encryption and blockchain technology to ensure data integrity and prevent fraud."
    }
  ];

  return (
    <div className="products" id="projects">
      <h1>Projects</h1>
      {projectData.map((project, index) => (
        <div className="card" key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

const Education = () => {
  const educationData = [
    { school: "SVKM's Institute of Technology", degree: "Software Engineering", year: "2021 - 2025" },
    { school: "Jahin College", degree: "Higher Secondary Education", year: "2020 - 2021" },
    { school: "Raje Sambhaji School", degree: "Secondary Education", year: "2019 - 2020" },
  ];

  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
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
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", mobile: "", message: "" });
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <footer id="contact">
      <div className="footer_main">
        <h2>Contact Me</h2>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
        <button onClick={submitForm}>Send</button>
      </div>
    </footer>
  );
};

export default Home;
