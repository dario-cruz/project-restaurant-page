import './mainpage.css'
import '../index.css'
import { pageContainer } from '..'
import logoImage from '../logo/carbhouse-white.webp'

// Remove class if there is one.
document.body.removeAttribute('class')

const renderMainPage = () => {
    // Define elements
    const mainPageDiv = document.createElement('div')
    const chLogo = new Image()
    const textContent = document.createElement('p')
    const pageBody = document.body
    const textMojis = document.createElement('p')

    //Set attributes for elements
    mainPageDiv.setAttribute('class', 'mainpagediv')
    chLogo.setAttribute('id', 'chlogo')
    chLogo.src = logoImage
    textContent.setAttribute('class', 'textcontent')
    pageBody.setAttribute('class', 'mainpage')
    textMojis.setAttribute('class', 'textcontent')

    // Insert content into elements
    textContent.innerText = "Welcome to CarbHouse the palace of lost gains and a round gut. Please make yourself at home and take a look at the menu and follow us on all the socials!"
    textMojis.innerText = "🍞🥐🥖🥪❤️❤️❤️"
    // Append the elements
    mainPageDiv.appendChild(chLogo)
    mainPageDiv.appendChild(textContent)
    mainPageDiv.appendChild(textMojis)

    // Append to the site page.
    pageContainer.appendChild(mainPageDiv)
}

export { renderMainPage }