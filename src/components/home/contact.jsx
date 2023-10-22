import { useEffect, useRef } from 'react'
import styles from './contact.module.scss'

const Contact = () => {
  const textareaRef = useRef(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight - 24 + 'px'

      textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight - 24 + 'px'
      })
    }
  }, [])

  return (
    <section className={styles.contact} id='contact'>
      <div data-aos='fade-in' className={`${styles.backgroundText} backgroundText`}>
        <svg>
          <text>Contact me</text>
          <text>Contact me</text>
        </svg>
      </div>
      <div className={styles.content}>
        <p className={styles.leftSide} data-aos='fade-right'>
          <span>Let`s build your</span>
          <span>Dream Project</span>
          <span>together</span>
        </p>
        <form action='' className={styles.rightSide} data-aos='fade-left'>
          <input type='text' name='name' placeholder='Your Name*' />
          <input type='email' name='email' placeholder='Your Email*' />
          <textarea ref={textareaRef} name='textarea' id='' rows='1' wrap='soft' placeholder='Tell me about your project...' />
          <button className={styles.materialBubble} type='submit'>Send me a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
