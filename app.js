console.log('loaded');

let btnJoke=document.querySelector('.btn-joke');

btnJoke.addEventListener('click', function(){
    // random joke
    let jokes = ['What do you call a lazy kangaroo? A pouch potato', 'I used to run a dating service for chickens, but I was struggling to make hens meet.', 'Why do we tell actors to "break a leg?" Because every play has a cast.', 'What does a pig put on dry skin? Oinkment.', 'What do you call it when a snowman throws a tantrum? A meltdown.']

    let rand=Math.floor(Math.random()*jokes.length);
    let randomJoke=jokes[rand]
    let displayJoke = document.querySelector('.our-joke');
    displayJoke.innerHTML=randomJoke;

// random image

let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']

let randI = Math.floor(Math.random()*images.length);
let randomImages = images[randI];

let cardImg = document.querySelector('.card-img');
cardImg.src = randomImages;
})