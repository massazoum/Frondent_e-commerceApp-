import React from 'react';
import styles from '../styles/AboutMe.module.css';
import Header from '@/components/Header';
import Image from 'next/image'

const AboutMe = () => {
  return (
    <>
   <Header/>
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="https://massazoum.github.io/PRT/mz.png" 
            alt="Massazoum"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>About Me</h2>
          <p>
  Hi, I&apos;m Massa zoumanigui, a passionate web developer with a love for creating
  web applications that make a difference. I enjoy working with
  technologies such as React, Node.js and JavaScript to build
  user-friendly and responsive web experiences.
</p>
<p>
  When I&apos;m not coding, you can find me exploring new technologies,
  contributing to open-source projects, or enjoying a cup of coffee.
  Let&apos;s collaborate and turn your ideas into reality!
</p>

        </div>
      </div>
    </section>
    </>
  );
};

export default AboutMe;
