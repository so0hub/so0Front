/*예제 1: 자기소개 객체 만들기
자신의 이름(name), 나이(age), 사는 곳(city)을 속성으로 갖는 person이라는 이름의 객체를 만들고, console.log()로 객체 전체를 출력하시오.*/
// [1] 객체 선언 : ( 속성명 : 값 , 속성명 : 값 , 속성명 : 값 )
let person = { name : "유재석" , age : 40 , city : "안양시" };

//[2] 객체 전체 호출 : (객체 갖는) 변수명
console.log( person );


/*예제 2: 객체의 값(Value) 출력하기
다음과 같은 book 객체가 있습니다. 반복문을 사용하여 이 객체의 모든 값 을 하나씩 콘솔에 출력하시오. */
const book = { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', pages: 500 };
let values = Object.values( book ); // [1] 객체 내 값 변환 : Object.values( 변수명 );
for( let index = 0 ; index <= values.length-1 ; index++ ){ // [2] 0부터 마지막 인덱스까지 배열 순회(반복)
    console.log(values[index]); // index번째 값 호출한다.
} // for END


/*예제 3: 객체에 속성 추가 및 삭제하기
person 객체에 이메일(email) 주소를 추가합니다. , person 객체에서 나이(age) 속성을 삭제합니다.최종적으로 수정된 person 객체를 콘솔에 출력하시오. */
const person2 = { name: '김코딩', age: 25, }; 
// [1] 객체 내 속성 추가 : (객체)변수명.새로운속성명 = 값;
person2.email="qwe@qwe.com"; 
// [2] delete (객체)변수명.삭제할속성명;
delete person2.age;
// [3] 객체 확인
console.log(person2);


/* 예제 4: 객체 속성 값 계산하기
다음 product 객체는 상품의 이름, 가격, 재고량을 나타냅니다. 이 객체의 총 자산 가치(가격 * 재고량)를 계산하여 콘솔에 출력하시오. */
const product = { name: '노트북', price: 1200000, stock: 50 };
const total = product.price * product.stock; // [1] 객체 내 1개 속성값 호출 : (객체)변수명.속성명
console.log( total );


/* 예제 5: 대괄호 표기법 사용하기
다음 user 객체가 있습니다. 대괄호 표기법을 사용하여 job-title 속성의 값('개발자')을 콘솔에 출력하시오. */
const user = { name: '김코딩','job-title': '개발자'}; 
// user.job-title;[X] 불가능
console.log(user["job-title"]); // [0] 접근 연산자가 아닌 [ ] 대괄호 표기법 이용한다!!!!!!!!!!!!!


/*예제 6: 중첩된 객체 다루기
다음 student 객체에서 학생이 사는 도시(city)의 이름('Seoul')을 콘솔에 출력하시오. */
const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };
console.log(student.address.city); // [1] 객체 안에 객체가 포함될 수 있다. 중첩!!!!


/* 예제 7: 객체에 특정 속성이 있는지 확인하기(  in 연산자 )
character 객체에 level이라는 속성이 있는지 in 연산자를 사용하여 확인하고, 결과를 true 또는 false로 콘솔에 출력하시오. */
const character = {  name: '전사', hp: 200, mp: 50 }; 
console.log("level" in character); // [1] "찾을속성명" in (객체)변수명 : 존재하면 true 아니면 false

/* 예제 8: Object.keys()와 Object.values()
country 객체의 모든 키(key) 들을 배열로 만들어 출력하고, 모든 값(value) 들을 또 다른 배열로 만들어 콘솔에 각각 출력하시오.*/
const country = {name: '대한민국', capital: '서울', population: 51780000 }; 
console.log( Object.keys( country ) ); // [1] Objects.keys( 객체변수명 ) : 객체 내 모든 키 반환
console.log( Object.values( country  ) ); // [2] Objects.values( 객체변수명 ) : 객체 내 모든 값 반환

/* 예제 9: 객체와 조건문 활용하기
다음 inventory 객체는 각 상품의 재고를 나타냅니다. for 반복문과 if 조건문을 사용하여 재고가 10개 미만인 상품의 이름을 콘솔에 출력하시오.*/
const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 };
// [1] key 이용한 value 알 수 있지만 , value 이용한 key 알 수 없다. 즉] key(속성명) 중복값이 없고 value(값) 중복 허용 
const keys = Object.keys( inventory );
// [2] 모든 key를 반복문으로 순회한다.
for( let index = 0 ; index <= keys.length-1 ; index++ ){
    if( inventory[keys[index]] <= 10 ){ //[3] 만약에 index번째 재고가 10보다 작으면 / 미만
        //console.log( keys ); // 모든 키(속성명) 목록 // console.log( keys[index]); // index번째 키
        console.log( keys[index]); // [4] index 안에 key(속성명)값 출력하기.
    } //if END
} //  for END

/* 예제 10: 객체 배열 순회하기
다음은 여러 학생의 정보를 담은 students 배열입니다. for 반복문을 사용하여 각 학생의 이름과 전공을 "이름: 전공" 형태로 콘솔에 출력하시오.  */
const students = [ { name: '김철수', major: '컴퓨터공학' },  { name: '이영희', major: '경영학' },  { name: '박지성', major: '체육교육' } ];
for( let index = 0 ; index <= students.length - 1 ; index++ ){ // [1] 배열 순회 : 0부터 마지막 인덱스까지
    const student2 = students[index]; // index번째 학생 호출
    console.log(`${ student2.name }:${student2.major}`);
} // for END

/* 예제 11: 공공데이터 포털 : 인천 부평구 인구 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_인구 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '동별', '세대수', '인구수(계)', '인구수(남)', '인구수(여)' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 인구' 검색
  4. '인천광역시 부평구_인구 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
*/

// [1] 공공데이터로부터 신청한 자료 결과 복사 붙여넣기 : https://api.odcloud.kr/api/3044322/v1/uddi:89061f01-5fd0-43e3-9aa3-8513be01cad5?page=1&perPage=10&serviceKey=fb7c5102b0c38115f7aa77ac47d31e0a793dead4207d403647dbb4a57e4704f8
let response={"currentCount":10,"data":[{"데이터기준일자":"2025-01-31","동별":"부평1동","세대수":17196,"인구수(계)":34809,"인구수(남)":16671,"인구수(여)":18138},{"데이터기준일자":"2025-01-31","동별":"부평2동","세대수":7793,"인구수(계)":15326,"인구수(남)":7594,"인구수(여)":7732},{"데이터기준일자":"2025-01-31","동별":"부평3동","세대수":7381,"인구수(계)":14889,"인구수(남)":7379,"인구수(여)":7510},{"데이터기준일자":"2025-01-31","동별":"부평4동","세대수":17750,"인구수(계)":33475,"인구수(남)":16530,"인구수(여)":16945},{"데이터기준일자":"2025-01-31","동별":"부평5동","세대수":16357,"인구수(계)":33137,"인구수(남)":16287,"인구수(여)":16850},{"데이터기준일자":"2025-01-31","동별":"부평6동","세대수":8469,"인구수(계)":17339,"인구수(남)":8527,"인구수(여)":8812},{"데이터기준일자":"2025-01-31","동별":"산곡1동","세대수":6476,"인구수(계)":14753,"인구수(남)":7265,"인구수(여)":7488},{"데이터기준일자":"2025-01-31","동별":"산곡2동","세대수":10680,"인구수(계)":29107,"인구수(남)":14264,"인구수(여)":14843},{"데이터기준일자":"2025-01-31","동별":"산곡3동","세대수":8521,"인구수(계)":20016,"인구수(남)":9659,"인구수(여)":10357},{"데이터기준일자":"2025-01-31","동별":"산곡4동","세대수":6558,"인구수(계)":16457,"인구수(남)":7828,"인구수(여)":8629}],"matchCount":22,"page":1,"perPage":10,"totalCount":22}

// [2] 실질적인 데이터가 있는 속성 : data
let data = response.data;
let html = ``; // [*] html 문자열을 저장하는 변수 선언
// [3] data 안에 있는 요소들을 반복문으로 순회( 0부터 마지막 인덱스까지 )하기
for( let index = 0 ; index <= data.length-1 ; index++ ){ // for 반복 1번 할 때마다 객체 1개 조회
  let row = data[index]; // index번째 '동' 정보(객체)

  console.log(row);

  console.log(row.동별 , row.세대수 , row["인구수(계)"] , row["인구수(남)"] , row["인구수(여)"]);
  // [4] 객체 정보들을 HTML 테이블로 표현하기 , 표 = 배열 = <table> , 행 = 객체 = <tr> , 열 = 속성 = td
  html += `<tr>
              <td> ${row.동별} </td> <td> ${row.세대수} </td> <td> ${row["인구수(계)"]} </td> <td> ${row["인구수(남)"]} </td> <td> ${row["인구수(여)"]} </td>
          </tr>`
} // for END

html += `</table>`; //테이블 마크업 닫기

//[5] 반복문이 반복하여 구성한 테이블 내용 출력하기
document.write(html);