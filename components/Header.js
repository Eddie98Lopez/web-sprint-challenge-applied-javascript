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

//header-Container
const headContain = document.querySelector('.header-container')

//header
const header = document.createElement('div')
header.className = 'header'
headContain.appendChild(header)

//span
const span = document.createElement('span')
span.className = 'date'
span.textContent = 'March 28, 2020'
header.appendChild(span)

//H1 
const h1 = document.createElement('h1')
h1.textContent = 'Lambda Times'
header.appendChild(h1)

// span 2
const span2 = document.createElement('span')
span.className = 'temp'
span.textContent = '98°'
header.appendChild(span2)

return header

}

Header()
