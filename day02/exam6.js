
// 함수 == 기능 == 여러 코드들의 집합

// 1. 출력 기능/함수
console.log("안녕하세요1");
alert("안녕하세요1");
document.write("<h3> 안녕하세요 </h3>")
document.querySelector("h3").innerHTML = "안녕하세요2";

// 과정최종흐름 : HTML <--- JS(리액트) <--- 자바/파이썬/노드JS <--- 데이터베이스(영구저장된자료)



// 2. 입력 기능/함수

let 반환값1 = confirm(); // [확인=true] , [취소=false] 버튼 제공 알림
let 반환값2 = prompt(); // 입력상자 제공 알림 , 사용자가 입력한 값이 변수에 저장된다.

let 반환값3 = document.querySelector("h3").innerHTML 

// 과정최종흐름 : HTML ---> JS(리액트) ---> 자바/파이썬/노드JS ---> 데이터베이스(영구저장된자료)

