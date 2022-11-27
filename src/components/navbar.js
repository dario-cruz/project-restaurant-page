import { pageContainer } from ".."

const renderNav = () => {
    // Define elements to be added.
    
    const navBar = document.createElement('div')
    navBar.setAttribute('class', 'navbar')
    // Grid props
    navBar.style.display = 'grid'
    navBar.style.gridTemplate = '80px / 20% 80%'
    navBar.style.gridTemplateAreas = '"left right right"'
    
    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('class', 'left-side')
    leftDiv.style.gridArea = 'left'
    const titleText = document.createElement('h1')
    titleText.innerText = "Bobs Burgers"
    leftDiv.innerHTML = `${titleText}`

    const rightDiv = document.createElement('div')
    rightDiv.setAttribute = ('class', 'right-side')
    rightDiv.style.gridArea = 'right'
    rightDiv.style.display = 'grid'
    rightDiv.style.gridColumn = "1fr 1fr 1fr"
    rightDiv.style.gridTemplateAreas = '"menu directions about"'

    const navMenu = document.createElement('div')
    navMenu.setAttribute('class', 'menu')
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    navMenu.style.gridArea = "menu"
    rightDiv.appendChild(navMenu)

    const navDirections = document.createElement('div')
    navDirections.setAttribute('class', 'directions')
    navDirections.innerHTML = `<h1 class="directions">Directions</h1>`
    navDirections.style.gridArea = "directions"
    rightDiv.appendChild(navDirections)

    const navAbout = document.createElement('div')
    navAbout.setAttribute('class', 'about')
    navAbout.innerHTML = `<h1 class="about">About</h1>`
    navAbout.style.gridArea = "about"
    rightDiv.appendChild(navAbout)

    navBar.appendChild(leftDiv)
    navBar.appendChild(rightDiv)

    pageContainer.appendChild(navBar)
}


export {renderNav}