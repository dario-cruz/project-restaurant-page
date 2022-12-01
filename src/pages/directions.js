import './directions.css'
import { pageContainer } from '..'


const renderDirections = () => {
    document.body.setAttribute('class', 'directions-page')

    const directionsDiv = document.createElement('div')
    const textContentDiv = document.createElement('div')
    const mapContentDiv = document.createElement('div')
    const textAddress = document.createElement('div')
    const textHours = document.createElement('div')
    
    directionsDiv.setAttribute('class', 'directions-div')
    textContentDiv.setAttribute('class', 'text-content')
    mapContentDiv.setAttribute('class', 'map-content')

    textAddress.setAttribute('class', 'text-address')
    textHours.setAttribute('class', 'text-hours')

    textAddress.innerHTML = `
    <h1>LES Location</h1>
    <p>550 Bergen Crossing</p>
    <p>New York, NY 10023</p>
    <p>Corner of Bergen and Lafayette</p>
    <p>A Train to Bergen MetroTech</p>
    <h1>Brooklyn Location</h1>
    <p>Coming 2023</p>
    `
    textHours.innerHTML = `
    <h1>Hours of Operation</h1>
    <p>Monday - 9am - 6:30pm</p>
    <p>Tuesday - 9am - 6:30pm</p>
    <p>Wednesday - 9am - 6:30pm</p>
    <p>Thursday - 9am - 6:30pm</p>
    <p>Friday - 9am - 6:30pm</p>
    <p>Saturday - 12pm - 5:30pm</p>
    <p>Sunday - Closed</p>
    `

    // Append all the things
    directionsDiv.appendChild(textContentDiv)


    textContentDiv.appendChild(textAddress)
    textContentDiv.appendChild(textHours)


    // Append all the generated content to the main page.
    pageContainer.appendChild(directionsDiv)
}

export { renderDirections }