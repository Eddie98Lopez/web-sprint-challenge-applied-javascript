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

//parent node
    const headContainer = document.querySelector('.header-container')

 //class header
    const header = document.createElement('div')
    header.className = 'header'
    headContainer.appendChild(header)

 // span h1 span
    const date = document.createElement('span')
    date.textContent = 'March 28, 2020'
    date.className = 'date'
    header.appendChild(date)

    const heading1 = document.createElement('h1')
    heading1.textContent = 'Lambda Times'
    header.appendChild(heading1)

    const temp = document.createElement('span')
    temp.textContent = '98°'
    temp.className = 'temp'
    header.appendChild(temp)


 //return

 return header
}

Header()
