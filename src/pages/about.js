import './about.css'
import { pageContainer } from '..'

const renderAbout = () => {
    const aboutDiv = document.createElement('div')
    const aboutHeading = document.createElement('h1')
    const aboutText = document.createElement('p')


    aboutDiv.setAttribute('class', 'about-div')
    aboutHeading.setAttribute('class', 'about-heading')
    aboutText.setAttribute('class', 'about-text')

    pageContainer.appendChild(aboutDiv)
}

export { renderAbout }