//event의 최종 진화버전. toggle은 스위치같은 역할
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);