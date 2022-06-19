const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.", 
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author: "찰리 채플린",
    },
    {
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author : "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드"
    },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author: "제임스 오펜하임"
    },
    {
        quote : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author : "랄프 왈도 에머슨"
    },
    {
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author:"톰 모나건"
    },
    {
        quote:"네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
        author: "간디"
    },
    {
        quote:"1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹"
    }
];
const firspan = document.querySelector("#quote span:first-child");
const secspan = document.querySelector("#quote span:last-child");
const ranQuote= quotes[Math.floor(Math.random()*quotes.length)];
firspan.innerText=ranQuote.quote;
secspan.innerText="- "+ranQuote.author+" -";