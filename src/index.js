import { renderNav } from "./components/navbar";
import './style.css'

const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)
console.log(pageContainer)

renderNav()

export {pageContainer}