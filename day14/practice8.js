// [1] 메모리/저장소 설계
/* 표 = 배열 ,       행 = 레코드 = 객체1개,  속성 = 표제목 = 속성명,     셀[한칸] = 데이터/속성값 */

let 항목목록 = [
    { 코드: 1, "날짜": "2026-01-13", "항목": "아메리카노", "금액": 1200 },
    { 코드: 2, "날짜": "2026-01-13", "항목": "카페라떼", "금액": 1500 }
]; // 화면에는 보이지 않지만 내부적으로 각 객체/레코드 식별하는 식별코드 정의하면 좋다. <중복 없는 데이터>

// [2] 기능 설계
/*
(1)화면에 보이는 이벤트/행위 , (2)화면에 보이지 않는 이벤트/행위 찾기
1.등록 처리하는 기능 필요.  = 등록 = create = C
    매개변수 : x , 리턴값 : x , 처리 : 입력받은 3개 데이터를 객체로 만들어서 전역배열에 저장, 발동조건 : 등록버튼 클릭했을 때
2.표에 출력하는 기능 필요.  = 출력 = read = R
    매개변수 : x , 리턴값 : x , 처리 : 현재 전역배열에 저장된 모든 객체를 tr로 구성하여 html 출력, 발동조건 : 등록을 성공했을 때

    * 참고 : 함수/기능 은 나눠서 따로 만드는 것이 좋다. 이유 : 유지보수 , 나누는 기준 : C등록 R츨력 U수정 D삭제
    * 참고2 : 배열은 전역변수를 사용한 이유는 서로 다른 함수들 간의 공유(같은 배열) 사용하기 위해
    */

// [3] 구현
// 3-1] 등록함수
function 등록함수() {
    console.log("등록함수()"); // 함수 실행 문제 : 함수를 호출했던 위치 확인
    // 1. 입력받은 값 가져오기
    let dateDom = document.querySelector("#날짜입력");
    console.log(dateDom);
    // 1) document.querySelectop() 이용하여 dom 가져오기

    let date = dateDom.value;
    // 2) .value() 이용하여 dom의 value 값 가져오기
    console.log(date);
    let contentDom = document.querySelector("#항목입력");
    // 1) document.querySelectop() 이용하여 dom 가져오기
    console.log(contentDom);
    let content = contentDom.value;
    // 2) .value() 이용하여 dom의 value 값 가져오기
    console.log(content);
    let money = document.querySelector("#금액입력").value;
    // 1) document.querySelectop() 이용하여 dom 가져오기
    // 2) .value() 이용하여 dom의 value 값 가져오기
    console.log(money);

    // 2. 입력받은 값들을 객체 구성
    // {속성명 : 값 , 속성명 : 값}
    let code = 항목목록[항목목록.length - 1].코드 + 1; // 항목목록.length-1 : 마지막 인덱스
    console.log(code);

    let obj = { 코드: code, "날짜": date, "항목": content, "금액": money }
    console.log(obj);
    // 3. (전역) 배열에 저장 + 백엔드 통신
    // 배열변수명.push()
    항목목록.push(obj);
    alert("등록성공"); // * 추가코드1
    contentDom.value = ""; // * 추가코드2

    // 4. 즉시 출력 반영
    출력함수();
}

// 3-2] 출력함수 = 특정화면 새로고침 == 렌더링 == 데이터변화가 있을 때 다시 화면 새로고침
function 출력함수() {
    console.log("출력함수 exe");

    // 1. 어디에 : tbody
    let 테이블본문 = document.querySelector(".테이블본문");

    // 2. 무엇을 : 배열 내 객체들을 <tr> 구성
    let 무엇을 = ``;
    for (let index = 0; index <= 항목목록.length - 1; index++) {
        let obj = 항목목록[index]; // 항목목록에서 index번째 객체 1개씩 가져오기
        무엇을 += `<tr>
                        <td> ${obj.날짜}</td>
                        <td>${obj.항목}</td>
                        <td>${Number(obj.금액).toLocaleString()}원</td>
                    </tr>`
    } 

    // 3. 출력 : 구성된 html 출력한다.
    테이블본문.innerHTML = 무엇을;
}