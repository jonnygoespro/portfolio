import { useState, useEffect } from 'react'
import styles from './projects.module.scss'
import { projectsData } from '@/data/projects'
import { initHoverLinks } from '@/utils/links'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectsData)

    setTimeout(() => {
      initHoverLinks()
    }, 300)
  }, [projectsData])

  const NewlineText = (props) => {
    const text = props.text
    const newText = text.split('\n').map((str, i) => <p key={i}>{str}</p>)

    return newText
  }

  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.heading}>
        <h2 data-aos='zoom-in'>My Projects</h2>
        <div className={`${styles.backgroundText} backgroundText`} data-aos='zoom-in'>
          <svg>
            <text>My Projects</text>
            <text>My Projects</text>
          </svg>
        </div>
      </div>
      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div className={styles.project} key={index}>
              <div className={styles.leftSide} data-aos='fade-right'>
                <img src={`/images/${project.heroImageName}`} alt='' />
              </div>
              <div className={styles.rightSide} data-aos='fade-left'>
                <h3>{project.name}</h3>
                <div className={styles.description}>
                  <NewlineText text={project.shortDescription} />
                </div>
                {/* <div className={styles.cta}>
                  <a href='' className='hoverLink'>Read more about the project</a>
                  <img src='/icons/arrowRight.svg' alt='Arrow' />
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
