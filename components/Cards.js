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


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res=>{

        const bootstrap = res.data.articles.bootstrap
        const javascripctArts = res.data.articles.javascript
        const jqueryArts = res.data.articles.jquery
        const nodeArts = res.data.articles.node
        const technologyArts = res.data.articles.technology

        const articles=[bootstrap,javascripctArts,jqueryArts,nodeArts,technologyArts]

        articles.forEach(element => {return element.forEach(art=>articleCard(art))});

        console.log(res.data.articles)
    })
    .catch(err=>console.log('this is an error message'))






function articleCard(article){

    // div

    const cardContainer = document.createElement('div')
    cardContainer.className = 'card'

    const articleContainer = document.querySelector('.cards-container')
    articleContainer.appendChild(cardContainer)

    cardContainer.addEventListener('click',()=>
    
    console.log(article.headline))

    //headline div
    const headline = document.createElement('div')
    headline.className = 'headline'
    headline.textContent = article.headline
    cardContainer.appendChild(headline)

    //author div , img and name

    const authorDiv= document.createElement('div')
    authorDiv.className = 'author'
    cardContainer.appendChild(authorDiv)

    //img container div and im

    const imgContainer = document.createElement('div')
    imgContainer.className = 'img-container'
    authorDiv.appendChild(imgContainer)


    const authorImg = document.createElement('img')
    authorImg.src = article.authorPhoto
    authorImg.alt= 'Photo of Author'
    imgContainer.appendChild(authorImg)


    // author span 

    const author = document.createElement('span')
    author.textContent = `By ${article.authorName}`

    return cardContainer

}