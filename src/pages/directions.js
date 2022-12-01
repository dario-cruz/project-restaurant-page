import './directions.css'
import { pageContainer } from '..'


const renderDirections = () => {
    const directionsDiv = document.createElement('div')
    const textContentDiv = document.createElement('div')
    const mapContentDiv = document.createElement('div')
    
    const textHeading = document.createElement('h1')
    const textPara = document.createElement('p')


    directionsDiv.setAttribute('class', 'directions-div')
    textContentDiv.setAttribute('class', 'text-content')
    mapContentDiv.setAttribute('class', 'map-content')

    textHeading.setAttribute('class', 'text-heading')
    textPara.setAttribute('class', 'test-para')




    // Append all the generated content to the main page.
    pageContainer.appendChild(directionsDiv)
}

export { renderDirections }