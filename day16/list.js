boardPrint(); // JS가 실행될 때 함수를 1번 호출
function boardPrint(){
    // 1. 어디에 , <tbody id="boardTbody">
    const boardTbody = document.querySelector('#boardTbody');

    // 2. 무엇을
    // 2-1 : localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    // 2-2 : 
    // 2-3 :
    // 3. 출력
}