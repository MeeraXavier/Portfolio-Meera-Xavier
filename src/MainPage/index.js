import React from "react";
import styles from "./MainPage.module.css";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const MainPage = () => {
  const handleHomeClick = () => {
    const aboutSection = document.getElementById("home");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleWorkClick = () => {
    const aboutSection = document.getElementById("work");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleSkillClick = () => {
    const aboutSection = document.getElementById("skill");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleEducationClick = () => {
    const aboutSection = document.getElementById("education");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    const aboutSection = document.getElementById("contact");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const ImageCarousel = () => {
    return (
      <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false} showStatus={false}>
        <div>
          <img className={styles.carousalImg} src="https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div>
          <img className={styles.carousalImg} src="https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div>
          <img className={styles.carousalImg} src="https://images.pexels.com/photos/1271620/pexels-photo-1271620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
      </Carousel>
    );
  };
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <div className={styles.topics} onClick={handleHomeClick}>
          HOME
        </div>
        <div className={styles.topics} onClick={handleAboutClick}>
          ABOUT ME
        </div>
        <div className={styles.topics} onClick={handleWorkClick}>
          {" "}
          WORK
        </div>
        <div className={styles.topics} onClick={handleSkillClick}>
          SKILLS
        </div>
        <div className={styles.topics} onClick={handleEducationClick}>
          EDUCATION
        </div>
        <div className={styles.topics} onClick={handleContactClick}>
          CONTACT
        </div>
      </div>
      <div className={styles.contentDiv} id="home">
        <div className={styles.intro}>
          <h1>Meera Xavier</h1>
          <h3>Frontend Developer</h3>
          <p>
            Highly skilled React developer with nearly 2 years of experience in
            the field
          </p>
        </div>
        <div className={styles.image}>
        <ImageCarousel />
        </div>
      </div>
      <div className={styles.section} id="about">
        <h2>About Me</h2>
        <p>
          Highly skilled React developer with nearly 2 years of experience in
          the field. Proficient in developing and implementing web applications
          using React.js. Showcasing a strong understanding of front-end
          development principles and best practices. Experienced in
          collaborating with cross-functional teams. Committed to continuous
          learning and staying up-to-date with the latest industry trends and
          technologies. Passionate about creating intuitive and user-friendly
          interfaces that enhance the user experience.
        </p>
      </div>
      <div className={styles.section} id="work">
        <h2>Work</h2>
        <p>
          Developed and maintained web applications using React.js, ensuring
          high performance and scalability. Collaborated with the team to design
          and implement user interfaces that aligned with project requirements
          and design guidelines. Implemented state management using Redux,
          ensuring efficient data flow and application stability. Integrated
          RESTful APIs and handled asynchronous operations using Axios.
          Conducted code reviews and implemented best practices to ensure code
          quality and maintainability. Worked closely with designers and backend
          developers to ensure seamless integration of front-end and back-end
          components. Assisted in troubleshooting and debugging issues, ensuring
          smooth and error-free user experience. Actively participated in agile
          development methodologies, including sprint planning, daily stand-ups,
          and retrospectives.
        </p>
      </div>
      <div className={styles.section} id="skill">
        <h2>Skills</h2>
        <li>React JS</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Redux</li>
        <li>Git</li>
        <li>Python</li>
        <li>Communication</li>
        <li>Teamwork</li>
      </div>
      <div className={styles.section} id="education">
        <h2>Education</h2>
        <h3>Integrated Masters in Computer Applicatons</h3>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <p>Sree Narayana Guru Institute of Science and Technology</p>
          <p>Jun 2016-Jun 2021</p>
          </div>
      </div>
      <div className={styles.section} id="contact">
        <h2>Contact</h2>
        <div className={styles.contact}>
          <div><PhoneAndroidIcon/> phone</div>
          <div><AlternateEmailIcon/>email</div>
          <div><LinkedInIcon/>linkedIn</div>
          </div>
        </div>
      </div>
  );
};
