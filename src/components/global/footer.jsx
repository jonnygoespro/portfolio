import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.line}>
          <p>Copyright © 2023 Jonas Buggisch</p>
          <p>Contact:</p>
        </div>
        <div className={styles.line}>
          <p>All rights reserved.</p>
          <p>jonas.buggisch@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
