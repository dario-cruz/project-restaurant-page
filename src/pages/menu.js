import './menu.css'
import { pageContainer } from '..'

// Remove class if there is one.
document.body.removeAttribute('class')

const renderMenu = () => {
    const menuDiv = document.createElement('div')
    const foodItemOne = document.createElement('div')
    const foodItemTwo = document.createElement('div')
    const foodItemThree = document.createElement('div')
    const foodItemFour = document.createElement('div')
    const foodItemFive = document.createElement('div')
    const foodItemSix = document.createElement('div')
    
    const pageBody = document.body

    menuDiv.setAttribute('class', 'menu-area')
    
    foodItemOne.setAttribute('class', 'food-item-one')
    foodItemTwo.setAttribute('class', 'food-item-two')
    foodItemThree.setAttribute('class', 'food-item-three')
    foodItemFour.setAttribute('class', 'food-item-four')
    foodItemFive.setAttribute('class', 'food-item-five')
    foodItemSix.setAttribute('class', 'food-item-six')

    menuDiv.appendChild(foodItemOne)
    menuDiv.appendChild(foodItemTwo)
    menuDiv.appendChild(foodItemThree)
    menuDiv.appendChild(foodItemFour)
    menuDiv.appendChild(foodItemFive)
    menuDiv.appendChild(foodItemSix)

    // Menu Titles
    const foodItemOneTitle = document.createElement('h1')
    const foodItemTwoTitle = document.createElement('h1')
    const foodItemThreeTitle = document.createElement('h1')
    const foodItemFourTitle = document.createElement('h1')
    const foodItemFiveTitle = document.createElement('h1')
    const foodItemSixTitle = document.createElement('h1')

    foodItemOneTitle.setAttribute('class', 'item-one-title')
    foodItemTwoTitle.setAttribute('class', 'item-two-title')
    foodItemThreeTitle.setAttribute('class', 'item-three-title')
    foodItemFourTitle.setAttribute('class', 'item-four-title')
    foodItemFiveTitle.setAttribute('class', 'item-five-title')
    foodItemSixTitle.setAttribute('class', 'item-six-title')

    foodItemOneTitle.innerText = "Breads"
    foodItemTwoTitle.innerText = "Savories"
    foodItemThreeTitle.innerText = "Coffee"
    foodItemFourTitle.innerText = "Cakes"
    foodItemFiveTitle.innerText = "Pastries"
    foodItemSixTitle.innerText = "Macarons"

    foodItemOne.appendChild(foodItemOneTitle)
    foodItemTwo.appendChild(foodItemTwoTitle)
    foodItemThree.appendChild(foodItemThreeTitle)
    foodItemFour.appendChild(foodItemFourTitle)
    foodItemFive.appendChild(foodItemFiveTitle)
    foodItemSix.appendChild(foodItemSixTitle)

    // Items lists for each menu section.
    const foodItemOneList = document.createElement('dl')
    const foodItemTwoList = document.createElement('dl')
    const foodItemThreeList = document.createElement('dl')
    const foodItemFourList = document.createElement('dl')
    const foodItemFiveList = document.createElement('dl')
    const foodItemSixList = document.createElement('dl')
    
    foodItemOneList.setAttribute('class', 'item-one-list')
    foodItemTwoList.setAttribute('class', 'item-two-list')
    foodItemThreeList.setAttribute('class', 'item-three-lis')
    foodItemFourList.setAttribute('class', 'item-four-list')
    foodItemFiveList.setAttribute('class', 'item-five-list')
    foodItemSixList.setAttribute('class', 'item-six-list')

    // List content.
    foodItemOneList.innerHTML = `
    <dt>Baguette</dt>
    <dd>$4.50</dd>
    <dt>Sourdough</dt>
    <dd>$5.10</dd>
    <dt>Rye</dt>
    <dd>$2.25</dd>
    <dt>Brioche</dt>
    <dd>$2.10</dd>
    <dt>Ciabatta</dt>
    <dd>$5.00</dd>
    <dt>Pita</dt>
    <dd>$1.00</dd>
    `
    foodItemTwoList.innerHTML = `
    <dt>Ham & Cheese Croissant</dt>
    <dt>Country Style Omelet</dt>
    <dt>Breakfast Platter</dt>
    <dt>New York Steak & Eggs</dt>
    <dt>Ham & Cheese Croissant</dt>
    `
    foodItemThreeList.innerHTML = `
    <dt>Americano</dt>
    <dt>Double Espresso</dt>
    <dt>Macchiato</dt>
    <dt>Latte</dt>
    <dt>Cappuccino</dt>
    <dt>Mocha</dt>
    <dt>Hot Chocolate</dt>
    `
    foodItemFourList.innerHTML = `
    <dt>Brownie Slice</dt>
    <dt>Apple Pie</dt>
    <dt>Cheese Cake</dt>
    <dt>Tiramisu</dt>
    <dt>Red Velvet</dt>
    `
    foodItemFiveList.innerHTML = `
    <dt>Bear Claw</dt>
    <dt>Beaver Tail</dt>
    <dt>Cronut</dt>
    <dt>Cheese Danish</dt>
    <dt>Canoli</dt>
    <dt>Rainbow Cookie</dt>
    `

    foodItemSixList.innerHTML =`
    <dt>Bear Claw</dt>
    <dt>Beaver Tail</dt>
    <dt>Cronut</dt>
    <dt>Cheese Danish</dt>
    <dt>Canoli</dt>
    <dt>Rainbow Cookie</dt>
    `

    foodItemOne.appendChild(foodItemOneList)
    foodItemTwo.appendChild(foodItemTwoList)
    foodItemThree.appendChild(foodItemThreeList)
    foodItemFour.appendChild(foodItemFourList)
    foodItemFive.appendChild(foodItemFiveList)
    foodItemSix.appendChild(foodItemSixList)

    pageBody.setAttribute('class', 'menupage')

    pageContainer.appendChild(menuDiv)
}



export { renderMenu }