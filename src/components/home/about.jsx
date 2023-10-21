import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.text} data-aos='fade-right' data-aos-delay='200' data-aos-duration='600'>
        <p>Hey there,</p>
        <p>I am Jonas, a Web Designer and Web Developer located in Salzburg, Austria. With a
          passion for innovation
          and expertise in cutting-edge technology, I thrive on projects that push me creatively and technically.
        </p>
      </div>
    </section>
  )
}

export default About
