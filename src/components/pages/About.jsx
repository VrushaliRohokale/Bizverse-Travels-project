import React from 'react';
import Img from '../images/R.jpg';

function About() {
  return (
    <div style={styles.container}>
      <header style={styles.headerSection}>
        <h1 style={styles.header}>About Bizverse Travels</h1>
      </header>
      <main style={styles.contentSection}>
        <section style={styles.textContainer}>
          <h2 style={styles.subHeader}>Who We Are</h2>
          <p style={styles.paragraph}>
            At Bizverse Travels, we are passionate about crafting unforgettable travel experiences
            for our customers. Whether you're seeking adventure, relaxation, or cultural immersion,
            we provide personalized travel solutions to make your journey extraordinary. Our team of
            experts works tirelessly to bring your travel dreams to life, with meticulous attention to
            detail and a commitment to excellence.
          </p>
          <h2 style={styles.subHeader}>Our Mission & Values</h2>
          <p style={styles.paragraph}>
            Our mission is to inspire and enable travelers to explore the world effortlessly. We value
            integrity, customer satisfaction, and innovation in every aspect of our service. By fostering
            partnerships with the best in the industry, we ensure that every journey is safe, enjoyable,
            and memorable.
          </p>
        </section>
        <aside style={styles.imageContainer}>
          <img
            src={Img}
            alt="About Bizverse Travels"
            style={styles.image}
          />
        </aside>
      </main>
      <footer style={styles.footerSection}>
        <p style={styles.footerText}>
          Let us guide you through the world, one unforgettable destination at a time.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  headerSection: {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px 10px 0 0',
  },
  header: {
    fontSize: '2.5rem',
    margin: '0',
  },
  contentSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '30px',
    padding: '20px',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 60%',
  },
  subHeader: {
    fontSize: '1.5rem',
    color: '#444',
    margin: '10px 0',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  imageContainer: {
    flex: '1 1 35%',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  footerSection: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '0 0 10px 10px',
  },
  footerText: {
    fontSize: '1rem',
    margin: '0',
  },
};

export default About;
