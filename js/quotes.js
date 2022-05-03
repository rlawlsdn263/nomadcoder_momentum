const quotes = [
    {
        quote: "1",
        author: "1",
    },
    {
        quote: "2",
        author: "2",
    },
    {
        quote: "3",
        author: "3",
    },
    {
        quote: "4",
        author: "4",
    },
    {
        quote: "5",
        author: "5",
    },
    {
        quote: "6",
        author: "6",
    },
    {
        quote: "7",
        author: "7",
    },
    {
        quote: "8",
        author: "8",
    },
    {
        quote: "9",
        author: "9",
    },
    {
        quote: "10",
        author: "10",
    }
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
