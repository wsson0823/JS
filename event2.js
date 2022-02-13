const h1 = document.querySelector('div.hello:first-child h1');

console.dir(h1)

function handleTitleClick() {
     h1.style.color = 'blue' 
    console.log(' Click !! ')
}

function handleMouseEnter(){
    h1.innerText= "Mouse Enter! "
}

function handleMouseLeave(){
    h1.innerText= "Mouse Leave! "
}

function handleWindowResize(){
    document.body.style.backgroundColor = 'tomato'
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffLine(){
    alert("SOS!");
}
function handleWindowOnLine(){
    alert("connect!");
}

h1.addEventListener("click",handleTitleClick); //title.onclick = handleTitleClick; 도 됨
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffLine);
window.addEventListener("offline",handleWindowOnLine);