import './index.css'
import { renderMainPage } from "./pages/mainpage";
import { renderNav } from "./components/navbar";

// Create container div for injection of page elements.
const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)

// Render Navigation and Main page elements.
renderNav()
renderMainPage()

export {pageContainer}