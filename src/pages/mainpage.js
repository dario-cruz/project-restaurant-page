import './mainpage.css'
import '../style.css'
import { pageContainer } from '..'
import logoImage from '../logo/carbhouse-white.webp'


const renderMainPage = () => {
    // Define elements
    const mainPageDiv = document.createElement('div')
    const chLogo = new Image()
    const textContent = document.createElement('p')

    //Set attributes for elements
    mainPageDiv.setAttribute('class', 'mainpage')
    chLogo.setAttribute('id', 'chlogo')
    chLogo.src = logoImage
    textContent.setAttribute('class', 'textcontent')

    // Insert content into elements
    textContent.innerText = "Welcome to CarbHouse the palace of lost gains and a round gut. Please make yourself at home and take a look at the menu."

    // Append the elements
    mainPageDiv.appendChild(chLogo)
    mainPageDiv.appendChild(textContent)

    // Append to the site page.
    pageContainer.appendChild(mainPageDiv)
}

export { renderMainPage }