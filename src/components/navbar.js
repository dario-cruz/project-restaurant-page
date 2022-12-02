import { pageContainer } from ".."
import './navbar.css'
import '../index.css'
import { changePage } from "./pagechanger"
import Insta from '../icons/instagram.svg'
import tikTok from '../icons/tiktok.svg'
import facebook from '../icons/facebook.svg'

const renderNav = () => {
    // Define elements to be added.
    const navBar = document.createElement('div')
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    const navMenu = document.createElement('div')
    const navDirections = document.createElement('div')
    const noneDiv = document.createElement('div')
    const navAbout = document.createElement('div')
    const titleText = document.createElement('h1')
    const titleSlogan = document.createElement('p')
    const instaIcon = new Image()
    const tikTokIcon = new Image()
    const facebookIcon = new Image()

    // Define Attributes
    navBar.setAttribute('class', 'navbar')
    titleText.setAttribute('class', 'titletext')
    titleSlogan.setAttribute('class', 'titleslogan')
    leftDiv.setAttribute('class', 'left-side')
    rightDiv.setAttribute('class', 'right-side')
    navMenu.setAttribute('class', 'menu')
    navDirections.setAttribute('class', 'directions')
    noneDiv.setAttribute('class', 'none-div')
    navAbout.setAttribute('class', 'about')
    instaIcon.setAttribute('class', 'nav-icons')
    tikTokIcon.setAttribute('class', 'nav-icons')
    facebookIcon.setAttribute('class', 'nav-icons')
    
    // Define content for elems.
    titleText.innerText = "CARBHOUSE"
    titleSlogan.innerText = "Breads and Pastries to Go!!"
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    navDirections.innerHTML = `<h1 class="directions">Directions</h1>`
    navAbout.innerHTML = `<h1 class="about">About</h1>`
    instaIcon.src = Insta
    tikTokIcon.src = tikTok
    facebookIcon.src = facebook
    
    // Append all the things.
    rightDiv.appendChild(navMenu)
    rightDiv.appendChild(navDirections)
    rightDiv.appendChild(navAbout)

    leftDiv.appendChild(titleText)
    leftDiv.appendChild(titleSlogan)

    noneDiv.appendChild(instaIcon)
    noneDiv.appendChild(tikTokIcon)
    noneDiv.appendChild(facebookIcon)

    navBar.appendChild(rightDiv)
    navBar.appendChild(leftDiv)
    navBar.appendChild(noneDiv)

    pageContainer.appendChild(navBar)

    // Adding eventlistner for changing pages.
    leftDiv.addEventListener('click', () => {
        changePage('home')
    })
    navMenu.addEventListener('click', () => {
        changePage('menu')
    })
    navDirections.addEventListener('click', () => {
        changePage('directions')
    })
    navAbout.addEventListener('click', () => {
        changePage('about')
    })
}

export { renderNav }