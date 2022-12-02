import './about.css'
import { pageContainer } from '..'

const renderAbout = () => {
    document.body.setAttribute('class', 'about-page')

    const aboutDiv = document.createElement('div')
    const aboutHeading = document.createElement('h1')
    const aboutText = document.createElement('p')
    const aboutHeadingDiv = document.createElement('div')
    const aboutTextDiv = document.createElement('div')

    aboutDiv.setAttribute('class', 'about-div')
    aboutHeading.setAttribute('class', 'about-heading')
    aboutText.setAttribute('class', 'about-text')
    aboutTextDiv.setAttribute('class', 'about-text-div')
    aboutHeadingDiv.setAttribute('class', 'about-heading-div')

    aboutHeading.innerText = 'About CARBHOUSE'
    aboutText.innerText = `
    In the summer of 2019 during the last non-pandemic summer in New York City, two dudes had an idea to create a palace of Carbs. A place in which anyone that wanted to partake in extreme carb-loading for any reason, could come and not be judged. Carbhouse is the realization of this idea.
    Please follow us on the socials. ❤️🙌🏾
    `

    aboutTextDiv.appendChild(aboutText)
    aboutHeadingDiv.appendChild(aboutHeading)
    aboutDiv.appendChild(aboutTextDiv)
    aboutDiv.appendChild(aboutHeadingDiv)
    pageContainer.appendChild(aboutDiv)
}

export { renderAbout }