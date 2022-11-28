import { pageContainer } from ".."
import './navbar.css'
import blackLogo from '../logo/carbhouse-black.svg'
import whiteLogo from '../logo/carbhouse-white.svg'
const renderNav = () => {
    // Define elements to be added.
    const navBar = document.createElement('div')
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    const navMenu = document.createElement('div')
    const navDirections = document.createElement('div')
    const navAbout = document.createElement('div')
    const myBlackLogo = new Image()
    
    // Define Attributes
    navBar.setAttribute('class', 'navbar')
    myBlackLogo.src = blackLogo
    myBlackLogo.setAttribute('id', 'logo')
    leftDiv.setAttribute('class', 'left-side')
    rightDiv.setAttribute('class', 'right-side')
    navMenu.setAttribute('class', 'menu')
    navDirections.setAttribute('class', 'directions')
    navAbout.setAttribute('class', 'about')
    
    // Define content for elems.
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    navDirections.innerHTML = `<h1 class="directions">Directions</h1>`
    navAbout.innerHTML = `<h1 class="about">About</h1>`
    
    // Append all the things.
    rightDiv.appendChild(navMenu)
    rightDiv.appendChild(navDirections)
    rightDiv.appendChild(navAbout)
    leftDiv.appendChild(myBlackLogo)
    navBar.appendChild(rightDiv)
    navBar.appendChild(leftDiv)
    pageContainer.appendChild(navBar)
}


export {renderNav}