import { renderNav } from "./components/navbar";
import './style.css'
import { renderMainPage } from "./pages/mainpage";
const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)
console.log(pageContainer)

renderNav()
renderMainPage()

export {pageContainer}