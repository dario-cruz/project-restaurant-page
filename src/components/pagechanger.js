import { pageContainer } from ".."
import { renderMainPage } from "../pages/mainpage"
import { renderNav } from "./navbar"
import { renderMenu } from "../pages/menu"
import { renderDirections } from "../pages/directions"
import { renderAbout } from "../pages/about"

// Add change page on nav click functionality.
const changePage = (page) => {
    if (page == 'home') {
        pageContainer.innerHTML = ""
        renderNav()
        renderMainPage()
    } else if (page == 'menu') {
        pageContainer.innerHTML = ""
        renderNav()
        renderMenu()
    } else if (page == 'about') {
        pageContainer.innerHTML = ""
        renderNav()
        renderAbout()
    } else if (page == 'directions') {
        pageContainer.innerHTML = ""
        renderNav()
        renderDirections()
    } else {
        console.log('fatal error dude.')
        return
    }
}

export { changePage }
