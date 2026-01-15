// [1] 메모리 설계
// 1. 저장할 자료 하나의 객체로 구성
//{"no" : 1 . "id" : qwe , "pw" : "1234"};

// 2. 여러 개의 객체들을 배열로 구성
let memberList = [
    {"no" : 1 , "id" : "qwe" , "pw" : "1234"},
    {"no" : 2 , "id" : "asd" , "pw" : "5678"},
];
// [2] 함수 설계
// 1. 등록함수 : 매개변수 : x , 리턴값 : x , 처리 : 입력받은 값을 객체로 생성하여 배열에 저장 , 

// 2. 로그인함수 : 매개변수 : x , 리턴값 : x , 처리 : 입력받은 값을 배열 내 존재하는지 비교


// [3] 등록 함수 구현 : 등록버튼을 클릭했을 때
function signup(){ 
    // 1. 입력받은 값 가져온다.
    const signIdDom = document.querySelector(".signId");
    const id = signIdDom.value;

    const signPwDom = document.querySelector(".signPw");
    const pw = signPwDom.value;


    /******************** localStorage 활용하여 memberList 호출 ********************** */
    let memberList = localStorage.getItem("memberList"); // 로컬 저장소 'memberList' 값 가져오기
    if(memberList == null ){ // memberList가 비어있으면
        memberList = []; // memberList 새로운 배열 선언
    }else{
        memberList = JSON.parse(memberList); // 타입 변환
    }
    /******************************************************************************* */


    // 2. 입력받은 값들을 객체로 구성한다.
    // 만약에 회원목록에서 1개 이상이면 마지막 회원번호에 +1 , 아니면 1
    let no = memberList.length >= 1 ? memberList[memberList.length-1].no + 1 : 1;
    //let obj = { "no" : no , "id" : id , "pw" : pw }; // ** 만약에  속성명과 속성값 변수명이 같으면 생략 가능
    let obj = { no , id , pw};

    // 3. 구성한 객체를 배열에 저장한다.
    memberList.push(obj); alert("회원가입 성공!");

    /******************localStorage 활용하여 ********************* */
    localStorage.setItem("memberList",JSON.stringify(memberList));
    /*************************************************** */

}



// [3] 로그인 함수 구현 : 로그인버튼을 클릭했을 때
function login(){ 
    // 1. 입력받은 값 가져온다.
    const loginIdDom = document.querySelector(".loginId");
    const id = loginIdDom.value;

    const loginPwDom = document.querySelector(".loginPw");
    const pw = loginPwDom.value;


    /******************** localStorage 활용하여 memberList 호출 ********************** */
    let memberList = localStorage.getItem("memberList"); // 로컬 저장소 'memberList' 값 가져오기
    if(memberList == null ){ // memberList가 비어있으면
        memberList = []; // memberList 새로운 배열 선언
    }else{
        memberList = JSON.parse(memberList); // 타입 변환
    }
    /******************************************************************************* */


    // 2. 입력받은 값이 배열(회원목록) 내에 존재하면 로그인 성공,  아니면 실패
    for(let index = 0 ; index <= memberList.length-1 ; index++ ){
        const member = memberList[index];  // index 번째 멤버(객체) 꺼내기
        if(member.id == id && member.pw == pw){ //만약에 index번째 객체 내 id가 입력받은 id와 같으면
            alert("로그인성공"); return; // 안내 후 함수를 강제 종료
        }
    }
    alert("로그인실패");

}

