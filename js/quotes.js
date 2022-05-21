const quotes = [
    {
        quote: "This is a quote,",
        author: "quote",
    },
    {
        quote: "This is a quote,",
        author: "quote",
    },
    {
        quote: "This is a quote,",
        author: "quote",
    },
    {
        quote: "This is a quote,",
        author: "quote",
    },
    {
        quote: "This is a quote,",
        author: "quote",
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


//How do we get elements inside of array?

// console.log(quotes[0]); // 시작
// console.log(quotes[10 - 1]); // 마지막

//0부터 9까지의 수를 주는 함수를 생성

// function arrayNumber() {
//     //0부터 9사이의 숫자 무작위 제공
//     const indexNum = Math.floor(Math.random()*quotes.length);
//     console.log(indexNum);
//     console.log(quotes[indexNum]);
// }

// arrayNumber();

//어떻게 객체에서 정보를 불러오지?
