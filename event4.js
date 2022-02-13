const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"; // 이렇게 변수에 넣으면 실수했을 때 html이 알려줌.
    if(h1.classList.contains(clickedClass)){ 
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);