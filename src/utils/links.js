export const initHoverLinks = () => {
  const links = document.querySelectorAll('.hoverLink')

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('mouseEntered')
    })

    link.addEventListener('mouseleave', () => {
      link.classList.remove('mouseEntered')
      link.classList.add('mouseLeft')

      setTimeout(() => {
        link.classList.remove('mouseLeft')
      }, 400)
    })
  })
}
