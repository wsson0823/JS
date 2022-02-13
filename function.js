//const hellos = document.getElementsByTagName("h1"); //태그 가져옴
//const hellos = document.getElementsByID("~~~");//ID가져옴
//const hellos = document.getElementsByClassName("~~~"); class 가져옴
const title1 = document.querySelector(".hello h1");

//css 방식으로 태그 검색 (".hello h1:first-child");. 주로 이거씀
//같은 이름의 클래스 이름이면 최상단 한개만 나옴
const title2 = document.querySelectorAll(".hello h1");
title1.innerText = "Ttewtwe";
console.dir(title1);
