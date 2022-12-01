import './index.css'
import { renderMainPage } from "./pages/mainpage";
import { renderMenu } from './pages/menu';
import { renderNav } from "./components/navbar";
import { renderDirections } from './pages/directions';
import { renderAbout } from './pages/about';
// import { addMenuEvents } from './components/pagechanger';


const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)
console.log(pageContainer)


renderNav()
// addMenuEvents()
// renderMainPage()
// renderMenu()
renderDirections()
export {pageContainer}