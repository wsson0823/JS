const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was click.");
}


title.addEventListener("click", handleTitleClick);
//js에 handleTitleClick이라는 함수를 넘겨주고 
//유저가 클릭할 경우 JS가 실행 버튼을 대신 눌러주는 의미임.
