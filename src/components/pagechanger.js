import { pageContainer } from ".."
import { renderMainPage } from "../pages/mainpage"
import { renderMenu } from "../pages/menu"
import { renderNav } from "./navbar"


const addMenuEvents = (() => {
    // Define menu buttons.
    const menuButton = document.querySelector('.menu')
    const directionsButton = document.querySelector('.directions')
    const aboutButton = document.querySelector('.about')
    const homeButton = document.querySelector('.left-side')
    // Add event listeners to buttons.
    homeButton.addEventListener('click', changePage(home))
    menuButton.addEventListener('click',changePage(menu))
    directionsButton.addEventListener('click', changePage(directions))
    aboutButton.addEventListener('click', changePage(about))
})()

// Buttons change page contents on click.
const changePage = (page) => {
    if (page == home) {
        pageContainer.innerHTML = ""
        renderMainPage()
    } else if (page == menu) {
        pageContainer.innerHTML = ""
        renderMenu()
    } else if (page == about) {
        pageContainer.innerHTML = ""
        renderAbout()
    } else if (page == directions) {
        pageContainer.innerHTML = ""
        renderDirections()
    } else {
        console.log('fatal error dude.')
        return
    }
}

export { addMenuEvents }
