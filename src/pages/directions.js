import './directions.css'
import { pageContainer } from '..'


const renderDirections = () => {
    // Attach google maps cdn for api call. 
    const mapScript = document.createElement('script')
    // mapScript.setAttribute('defer', 'defer')
    mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMTNzJVRKjx083WotVZeuO8B5aRjyjZE4&callback=initMap"
    pageContainer.appendChild(mapScript)

    document.body.setAttribute('class', 'directions-page')

    const directionsDiv = document.createElement('div')
    const textContentDiv = document.createElement('div')
    const mapContentDiv = document.createElement('div')
    const textAddress = document.createElement('div')
    const textHours = document.createElement('div')
    const googleMap = document.createElement('div')

    directionsDiv.setAttribute('class', 'directions-div')
    textContentDiv.setAttribute('class', 'text-content')
    mapContentDiv.setAttribute('class', 'map-content')
    googleMap.setAttribute('id', 'map')

    textAddress.setAttribute('class', 'text-address')
    textHours.setAttribute('class', 'text-hours')

    // Informational content for text based areas.
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

    // Map setup.
    function initMap() {
        const bakeryLoc = { lat: -25.333, lng: 131.031 }
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: bakeryLoc,
        })
        const mapMarker = new google.maps.Marker({
            position: bakeryLoc,
            map: map,
        })
    }
    window.initMap = initMap

    // Append all the things
    directionsDiv.appendChild(textContentDiv)
    directionsDiv.appendChild(mapContentDiv)

    mapContentDiv.appendChild(googleMap)

    textContentDiv.appendChild(textAddress)
    textContentDiv.appendChild(textHours)
    


    // Append all the generated content to the main page.
    pageContainer.appendChild(directionsDiv)
}

export { renderDirections }