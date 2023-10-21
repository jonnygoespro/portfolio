import styles from './cv.module.scss'

const Cv = () => {
  return (
    <section className={styles.cv} id='cv'>
      <div className={styles.heading}>
        <h2 data-aos='zoom-in'>My Life so far</h2>
        <div className={`${styles.backgroundText} backgroundText`} data-aos='zoom-in'>
          <svg>
            <text>Curriculum</text>
            <text>Curriculum</text>
          </svg>
        </div>
      </div>
      <div className={styles.life}>
        <div className={styles.periods}>
          <div className={`${styles.period} ${styles.right}`} id='period1'>
            <div className={styles.dot} />
            <p data-aos='fade-right' data-aos-anchor='#period1'>06.02.2017 - 09.02.2017</p>
            <p data-aos='fade-right' data-aos-anchor='#period1'>Ray Sono AG, Munich</p>
            <p data-aos='fade-right' data-aos-anchor='#period1'>Internship as Web & App Developer</p>
          </div>
          <div className={`${styles.period} ${styles.left}`} id='period2'>
            <div className={styles.dot} />
            <p data-aos='fade-left' data-aos-anchor='#period2'>01.10.2020 - 31.07.2021</p>
            <p data-aos='fade-left' data-aos-anchor='#period2'>International Business Studies, Nürnberg</p>
            <p data-aos='fade-left' data-aos-anchor='#period2'>2 Semester, Bachelor of Science</p>
          </div>
          <div className={`${styles.period} ${styles.right}`} id='period3'>
            <div className={styles.dot} />
            <p data-aos='fade-right' data-aos-anchor='#period3'>since 27.09.2021</p>
            <p data-aos='fade-right' data-aos-anchor='#period3'>Multimedia Technology, Salzburg</p>
            <p data-aos='fade-right' data-aos-anchor='#period3'>5 Semester, Bachelor of Science</p>
          </div>
          <div className={`${styles.period} ${styles.left}`} id='period4'>
            <div className={styles.dot} />
            <p data-aos='fade-left' data-aos-anchor='#period4'>10.05.2021 - 31.08.2022</p>
            <p data-aos='fade-left' data-aos-anchor='#period4'>Fortbildungsinstitut der Bayerischen Polizei<br />
            </p>
            <p data-aos='fade-left' data-aos-anchor='#period4'>Department: Web, Info, Medien</p>
          </div>
          <div className={`${styles.period} ${styles.right}`} id='period5'>
            <div className={styles.dot} />
            <p data-aos='fade-right' data-aos-anchor='#period5'>since 01.12.2022</p>
            <p data-aos='fade-right' data-aos-anchor='#period5'>Former 03, Munich</p>
            <p data-aos='fade-right' data-aos-anchor='#period5'>Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cv
