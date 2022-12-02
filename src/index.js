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

const mapScript = document.createElement('script')
// mapScript.setAttribute('defer', 'defer')
mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
document.body.appendChild(mapScript)

renderNav()
// addMenuEvents()
// renderMainPage()
// renderMenu()
// renderDirections()
renderAbout()
export {pageContainer}