const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor; //변경될 수 있는 값
    if(currentColor === "blue"){ 
       newColor = "tomato";
    } else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);