import { renderNav } from "./components/navbar";

const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)
console.log(pageContainer)

renderNav()

export {pageContainer}