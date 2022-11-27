import { pageContainer } from ".."
import './navbar.css'

const renderNav = () => {
    // Define elements to be added.
    
    const navBar = document.createElement('div')
    navBar.setAttribute('class', 'navbar')
    
    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('class', 'left-side')
    
    const titleText = document.createElement('h1')
    titleText.innerText = "Bobs Burgers"
    titleText.setAttribute('class', 'titletext')
    leftDiv.appendChild(titleText)

    const rightDiv = document.createElement('div')
    rightDiv.setAttribute('class', 'right-side')

    const navMenu = document.createElement('div')
    navMenu.setAttribute('class', 'menu')
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    rightDiv.appendChild(navMenu)

    const navDirections = document.createElement('div')
    navDirections.setAttribute('class', 'directions')
    navDirections.innerHTML = `<h1 class="directions">Directions</h1>`
    rightDiv.appendChild(navDirections)

    const navAbout = document.createElement('div')
    navAbout.setAttribute('class', 'about')
    navAbout.innerHTML = `<h1 class="about">About</h1>`
    rightDiv.appendChild(navAbout)

    navBar.appendChild(rightDiv)
    navBar.appendChild(leftDiv)

    pageContainer.appendChild(navBar)
}


export {renderNav}