// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {


    // create div, set class name, append to header-container
    const header = document.createElement('div')
    header.className = "header"
    
    const headerContainer = document.querySelector('.header-container')
    headerContainer.appendChild(header)

    //span date

    const headerDate = document.createElement('span')
    headerDate.className = 'date'
    headerDate.textContent = 'MARCH 28,2020'
    header.appendChild(headerDate)

    //h1
    const headerH1 = document.createElement('h1')
    headerH1.textContent = 'Lambda Times'
    header.appendChild(headerH1)

    //span temp
    const temp = document.createElement('span')
    temp.className = 'temp'
    temp.textContent = '98°'    
    header.appendChild(temp)

    return header
}

Header()
