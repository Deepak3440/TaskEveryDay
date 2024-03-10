import { callAPI } from "./fetchApi.js";

const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=14fd34af35fe4493b10114972dcc064b";

const options = {
    headers:{
        'Access-Control-Allow-Origin': '*',
    }
}
const request = callAPI(url, options);
request.then((data)=>{
   renderUi(data);
})
// .then(function(res) 
//     const js=res.json();
//     js.then((data)=>{
//         console.log(data);
//         const head = document.getElementById('heading');
//             head.innerText = data.articles[0].author;
//             const p=document.getElementById('para');
//             p.innerText=data.articles[2].description;
//             const title=document.getElementById('title');
//             title.innerText=data.articles[1].title;

//     })
//     console.log("Result:", res.status);
// })
// 

.catch((err)=>{
    console.log(err);
});

function renderUi(data){
    const articles=data.articles;
    const parent=document.getElementById('news-cards');
    const footer=document.getElementById('f');
    articles.forEach((article)=>{
        const card = createCard(article);
        parent.appendChild(card);

    })
    

}

function createCard(article){
    console.log(article);
    const card=document.createElement('div');
    card.setAttribute('class','card');
    const image=document.createElement('img');
    image.setAttribute('src',article.urlToImage);
    image.setAttribute('class', 'card-image');
    card.appendChild(image);

    const title=document.createElement('a');
    title.setAttribute('class','card-title');
    title.href = article.url;
    title.innerText=article.title;
    title.target = '_blank';
    card.appendChild(title);

    const source=document.createElement('p');
    source.innerText=article.source.name;
    source.setAttribute('class','card-source');
    card.appendChild(source);
    const des = document.createElement('p');
des.setAttribute('class', 'card-des');
des.innerText = article.description || ''; 
card.appendChild(des);

if (article.description && article.description.length > 150) {
    const readMoreLink = document.createElement('a');
    readMoreLink.setAttribute('class', 'read-more');
    readMoreLink.innerText = 'Read More';
    readMoreLink.addEventListener('click', function () {
        window.location.href = article.url;
    });
    card.appendChild(readMoreLink);
}






    return card;

}

