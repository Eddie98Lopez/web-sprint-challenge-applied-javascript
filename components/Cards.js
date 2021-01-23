// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res=>console.log(res))
.catch(err=>console.log(err))

const Card = (obj)=>{

//CardsContainer
const cards = document.querySelector('.cards-container')    

//Container
const cardContainer= document.createElement('div')
cardContainer.className = 'card'
cards.appendChild(cardContainer)

//Headline
const headline = document.createElement('div')
headline.className = 'headline'
headline.textContent = obj.headline
cardContainer.appendChild(headline)

//author
const author = document.createElement('div')
author.className = 'author'
cardContainer.appendChild(author)

//Author Img
const authorImgContainer = document.createElement('div')
authorImgContainer.className = 'img-container'
author.appendChild(authorImgContainer)

//Author NameSpan
const authorImg = document.createElement('img')
authorImg.src = obj.authorPhoto
authorImgContainer.appendChild(authorImg)

//Auth Name Span
const authorName = document.createElement('span')
authorName.textContent = obj.authorName
author.appendChild(authorName)

//Event Listener
cardContainer.addEventListener('click', (e)=>console.log(e.target.firstChild))


return cardContainer



}


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res=>{
    console.log(res.data.articles)

    const bootstrap = res.data.articles.bootstrap
    const javascript = res.data.articles.javascript
    const technology = res.data.articles.technology
    const jquery = res.data.articles.jquery
    const node = res.data.articles.node

    const articles = [bootstrap, javascript, technology, node, jquery]

    articles.forEach( genre => genre.forEach( article => Card(article) ) )
})
.catch(err=>console.log(err))