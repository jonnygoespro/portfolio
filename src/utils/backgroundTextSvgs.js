export const initBackgroundTextSvgs = () => {
  const svgs = document.querySelectorAll('svg')
  svgs.forEach((svg) => {
    const bbox = svg.getBBox()
    svg.setAttribute('width', bbox.width + 'px')
    svg.setAttribute('height', bbox.height + 'px')
    svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
  })
}
