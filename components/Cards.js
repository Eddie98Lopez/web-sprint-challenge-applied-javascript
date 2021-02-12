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

axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
        const bootstrap = res.data.articles.bootstrap
        const javascript = res.data.articles.javascript
        const technology = res.data.articles.technology
        const jquery = res.data.articles.jquery
        const node = res.data.articles.node

        const topics =[bootstrap, javascript, jquery, node, technology]

        topics.forEach( topic => topic.forEach(article => Article(article) ))
    })
    .catch(err => console.log(err))




 const Article = (article)=>{

    //parent container
    const container = document.querySelector('.cards-container')

    //card div
    const card = document.createElement('div')
    card.className = 'card'
    container.appendChild(card)
    
    

    //headlin
    const headline = document.createElement('div')
    headline.className = headline
    headline.textContent = article.headline
    card.appendChild(headline)

    //author info
    const authorDiv = document.createElement('div')
    authorDiv.className = 'author'
    card.appendChild(authorDiv)

    //imgContainer
    const imgContainer = document.createElement('div')
    imgContainer.className = 'img-container'
    authorDiv.appendChild(imgContainer)

    //img 
    const authImg = document.createElement('img')
    authImg.src = article.authorPhoto
    imgContainer.appendChild(authImg)

    //auth Name
    const authorName = document.createElement('span')
    authorName.textContent = `By: ${article.authorName}`
    authorDiv.appendChild(authorName)


    //event
    card.addEventListener('click',()=>{console.log(article.headline)})

    return card


}
 