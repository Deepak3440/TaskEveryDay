const defaultUsername = 'Deepak3440';
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const textInput = document.getElementById('text-name');
    const inputUsername = textInput.value.trim();
    apiFetch(inputUsername);
});

window.onload = function () {
    apiFetch(defaultUsername);
};

async function apiFetch(username)
 {
    try 
    {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        const data = await response.json();
        render(data);
    } 
    catch (err)
     {
        console.error('Error fetching data:', err);
    }
}



function render(data) {
    const parent = document.getElementById('main-cards');
    console.log(data);
    parent.innerHTML='';

    const img = data.avatar_url;
    const bio = data.bio;
    const followers = data.followers;
    const following = data.following;
    const name = data.name;
    const repo = data.public_repos;
    const email = data.email;
    const update = new Date(data.updated_at).toLocaleDateString(); 
    const create=new Date(data.created_at).toLocaleDateString();
    const url=data.html_url;
    const username=data.twitter_username;    
   

    console.log(bio, followers, following, name, repo, email, img);

    const card = document.createElement('div');
    card.setAttribute('class', 'card-main');
    const updated = document.createElement('p');

    updated.setAttribute('class', 'card-updated');
    updated.innerText = `Updated at: ${update}`;
    card.appendChild(updated);

    const created = document.createElement('p');
created.setAttribute('class', 'card-created');
created.innerText = `Created at: ${create}`;
card.appendChild(created);


    const image = document.createElement('img');
    image.src = img;
    card.appendChild(image);

    // add name
    const name1 = document.createElement('h2');
    name1.setAttribute('class', 'card-name');
    name1.innerText = name;
    card.appendChild(name1);

    // Bio Container
    const cardBio = document.createElement('div');
    cardBio.setAttribute('class', 'card-bio');
    const bioContent = bio ? bio : 'Write some bio that helps to reach up and get easily a job and popularity';
    cardBio.innerText = bioContent;
    card.appendChild(cardBio);

    // Card Info Container
    const cardInfo = document.createElement('div');
    cardInfo.setAttribute('class', 'card-info');

    // Repos
    const cardRep = document.createElement('div');
    cardRep.setAttribute('class', 'card-repo');
    cardRep.innerText = `Repos: ${repo || 0}`;
    cardInfo.appendChild(cardRep);

    // Followers Container
    const cardFollower = document.createElement('div');
    cardFollower.setAttribute('class', 'card-follower');
    cardFollower.innerText = `Followers: ${followers || 0}`;
    cardInfo.appendChild(cardFollower);

    // Following Container
    const cardFollowing = document.createElement('div');
    cardFollowing.setAttribute('class', 'card-following');
    cardFollowing.innerText = `Following: ${following || 0}`;
    cardInfo.appendChild(cardFollowing);
    card.appendChild(cardInfo);

    // link profile

    // const profile= document.createElement('div');
    // cardInfo.setAttribute('class', 'profile');

    
   


    const url1=document.createElement('a')
    url1.setAttribute('href',url);
    url1.setAttribute('class','profile');
    url1.innerText='Github Profile';
    card.appendChild(url1);

    // const username1=document.createElement('a')
    // username1.setAttribute('href',url);
    // username1.setAttribute('class','profile');
    // username1.innerText='Github Profile';
    // profile.appendChild(username1);

    // card.appendChild(profile);

    

    parent.appendChild(card);
}
