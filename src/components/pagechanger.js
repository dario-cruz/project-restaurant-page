import { pageContainer } from ".."
import { renderMainPage } from "../pages/mainpage"

const addMenuEvents = (() => {
    // Define menu buttons.
    const menuButton = document.querySelector('.menu')
    const directionsButton = document.querySelector('.directions')
    const aboutButton = document.querySelector('.about')
    const homeButton = document.querySelector('.left-side')

    homeButton.addEventListener('click', changePage(home))
    menuButton.addEventListener('click',changePage(menu))
    directionsButton.addEventListener('click', changePage(directions))
    aboutButton.addEventListener('click', changePage(about))
})()

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
