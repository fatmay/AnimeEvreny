function play() {
    y.play();
 }

 function pause() {

   x.setAttribute("src", "");
    y.pause();
 }  
 

     const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
const itemNumber = movieLists[i].querySelectorAll("img").length;
let clickCounter = 0;
arrow.addEventListener("click", () => {
 const ratio = Math.floor(window.innerWidth / 270);
 clickCounter++;
 if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
   movieLists[i].style.transform = `translateX(${
     movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
   }px)`;
 } else {
   movieLists[i].style.transform = "translateX(0)";
   clickCounter = 0;
 }
});
/*gece modu geçişler*/
console.log(Math.floor(window.innerWidth / 270));
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
items.forEach((item) => {
 item.classList.toggle("active");
});
ball.classList.toggle("active");
});

let key="cc782bbe";
const input=document.querySelector("#input");
const button=document.querySelector("#button");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");

let value="";
let page=1;

input.addEventListener("input",(e)=> {

e.preventDefault();
value=input.value;



});

button.addEventListener("click",()=>{

page=1;
getmovie(value,page);
});

async function getmovie(value,page)
{
    if(value=== "") return ;
    const data=await fetch(`http://wwww.omdbapi.com/?apikey=${key}&s=${value}&page=${page}`
    );

    document.querySelector(".display").innerHTML="";
    const result=await data.json();
//console.log(data);
result.Search.forEach((item) => {

    let moviediv=document.createElement("div");
    moviediv.classList.add("movie");
    let poster=document.createElement("div");
    poster.classList.add("poster");
    let img=document.createElement("img");
    img.src=`${item.Poster}`==="N/A" ? (img.src="./img/noimage.png"):`${item.Poster}`;
    poster.appendChild(img);
    moviediv.appendChild(poster);

    let description=document.createElement("div");
    description.classList.add("descrription");
    description.innerHTML=`Title:${item.Title} <br> <br> Year:${item.Year}<br> <br> <a href=https://www.imdb.com/title/${item.imdbID} > IMDB:https://www.imdb.com/title/${item.imdbID} </a>`;
    moviediv.appendChild(description);

    document.querySelector(".display").appendChild(moviediv);
});

};