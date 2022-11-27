const renderNav = () => {
    // Define elements to be added.
    const pageContainter = document.querySelector('#content')
    
    const navBar = document.createElement('div')
    navBar.setAttribute('class', 'navbar')
    // Grid props
    navBar.style.display = 'grid'
    navBar.style.gridTemplate = '80px / 20% 80%'
    navBar.style.gridTemplateAreas = '"left right right"'
    
    const leftDiv = document.createElement('div')
    leftDiv.setAttribute('class', 'left-side')
    leftDiv.style.gridArea = 'left'

    const rightDiv = document.createElement('div')
    rightDiv.setAttribute = ('class', 'right-side')
    rightDiv.style.gridArea = 'right'
    
    const titleText = document.createElement('h1')
    titleText.innerText = "Bobs Burgers"

    const navMenu = document.createElement('div')
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    

    
    // Define content.
    leftDiv.innerHTML = `${titleText}`


    // Set css attributes. 



}