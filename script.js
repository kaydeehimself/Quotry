let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
{
    quote:'"The bets way to find yourself is to lose yourself in the service of others."' ,
    person: ' Mahatma Gandhi'
},
{
    quote:'"If you want to live a happy life, tie it to a goal, people or things."' ,
    person: ' Albert Einstein'
},
{
    quote:'"At his best, man is the noblest of all animals; separated from law and justice he is the worst."' ,
    person: ' Aristotle'
},

{
    quote:'"Bees dont waste their time explaining to flies that honey is better than shit."' ,
    person: ' Wise Man'
},

{
    quote:'"It is the mark of an educated mind to be able to entertain a thougth without accepting it."' ,
    person: ' Aristotle'
}, 

{
    quote:'"It is only those who want to move forward that like the truth."' ,
    person: ' D. K. Olukoya'
},
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})