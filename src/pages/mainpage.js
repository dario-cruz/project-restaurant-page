import './mainpage.css'
import { pageContainer } from '..'
import logoImage from '../logo/carbhouse-white.webp'


const renderMainPage = () => {
    // Define elements
    const mainPageDiv = document.createElement('div')
    const chLogo = new Image()
    chLogo.src = logoImage

    //Set attributes for elements
    mainPageDiv.setAttribute('class', 'mainpage')
    chLogo.setAttribute('id', 'chlogo')


    // Append the elements
    mainPageDiv.appendChild(chLogo)


    // Append to the site page.
    pageContainer.appendChild(mainPageDiv)
}

export { renderMainPage }