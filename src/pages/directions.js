import './directions.css'
import { pageContainer } from '..'


const renderDirections = () => {
    document.body.setAttribute('class', 'directions-page')

    const directionsDiv = document.createElement('div')
    const textContentDiv = document.createElement('div')
    const mapContentDiv = document.createElement('div')
    
    const textHeading = document.createElement('h1')
    const textPara = document.createElement('p')

    directionsDiv.setAttribute('class', 'directions-div')
    textContentDiv.setAttribute('class', 'text-content')
    mapContentDiv.setAttribute('class', 'map-content')

    textHeading.setAttribute('class', 'text-heading')
    textPara.setAttribute('class', 'text-para')

    textHeading.innerText = "About Carbhouse"
    textPara.innerText =`
    Back in 2019 before the pandemic, two dudes and a dog decided that there was a need.
    The need was for a palace of delectable pastries, cakes, and cookies. This is were CarbHouse can to be. 
    Since then the founders and a small crew of expert bakers have been bringing carb-loaded love to the lower east side.
    `

    // Append all the things
    directionsDiv.appendChild(textContentDiv)


    textContentDiv.appendChild(textHeading)
    textContentDiv.appendChild(textPara)


    // Append all the generated content to the main page.
    pageContainer.appendChild(directionsDiv)
}

export { renderDirections }