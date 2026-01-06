/*[ 실습5 ]
문제 1: 배열에서 최댓값 찾기
주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)/*/
let numbers = [23, 5, 67, 12, 88, 34];

/*
let(max = numbers[0]); // 첫 번째 값을 가장 최뎃값으로 임의로 지정 .선언
if(max < numbers[1]) max = numbers[1]; // 만약에 다음 값이 최댓값보다 크면 교체/수정
if(max < numbers[2]) max = numbers[1];
if(max < numbers[3]) max = numbers[1];
if(max < numbers[4]) max = numbers[1];
if(max < numbers[5]) max = numbers[1];
console.log(max);
이것도 되지만 밑에께 더 좋지 */

let max = numbers[0];
for (let index = 1; index <= numbers.length - 1; index++) {
    if (max < numbers[index]) { max = numbers[index]; }
} // for END
console.log(max);


/*문제 2: 별 찍기 (기본 역삼각형)
for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
     line(행/row)        star(열/col)
***** 1                  1 2 3 4 5          1~5     , 전체줄수(5) - 현재줄수(1) +1
****  2                  1 2 3 4            1~4     , 전체줄수(5) - 현재줄수(2) +1
***   3                  1 2 3              1~3     , 전체줄수(5) - 현재줄수(3) +1
**    4                  1 2                1~2     , 전체줄수(5) - 현재줄수(4) +1
*     5                  1                  1       , 전체줄수(5) - 현재줄수(5) +1
     line 은 1 부터 5 까지 1씩 증가한다. for(let line = 1 ; line <= 5 ; line++ ){ }
     star 은 1 부터 전체줄수-현재줄수+1 ( 5 4 3 2 1 ) 까지 1씩 증가
*/

let output = ``; // 출력할 문자열들을 (누적) 저장하는 변수
for (let line = 1; line <= 5; line++) { // 1부터 5(이하)까지 1씩 증가한다. (5회)

    for (let star = 1; star <= 5 - line + 1; star++) {
        output += "*"; // 별 찍기
    } // for2 END
    output += "\n"; // 줄바꿈
} // for end
console.log(output); // 예상출력 : \n\n\n\n\n



/*문제 3: 배열에서 특정 문자 찾기 (break 활용)
다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
힌트: 문자열의 .indexOf() 메소드를 사용하세요.*/

let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
for (let index = 0; index <= userNames.length - 1; index++) {// (1) 배열 내 모든 이름 하나씩 순회.반복
    let name = userNames[index]; // (2) index번째 이름 꺼내기
    if (name.indexOf("솔") != -1) { // (3) 문자열은 배열이다. 김[0] 하[1] 준[2]
        console.log(name); // (4) 이름 출력
        break; // (5) 가장 가까운 반복문 탈출
    } // if END
} // for END 




/*문제 4: 2차원 배열의 모든 요소 출력하기
다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오. */
let seatLayout = [['A1', 'A2', 'A3'],      // 1행 [1] [2] [3]
['B1', 'B2', 'B3'],      // 2행 [1] [2] [3]
['C1', 'C2', 'C3']];    // 3행 [1] [2] [3]

for (let row = 0; row <= seatLayout.length - 1; row++) {
    for (let col = 0; col <= seatLayout[row].length - 1; col++) {
        console.log(seatLayout[row][col]);

    } // for END
} // for END


/*문제 5: 배열의 중복 요소 제거하기
주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다.*/
let numbers2 = [1, 5, 2, 3, 5, 1, 4, 2];
let newAry = [] // 중복이 없고 새로운 배열이고
for (let index = 0; index <= numbers2.length - 1; index++) {
    let num = numbers2[index]; // index 값 추출/꺼내기
    if (newAry.indexOf(num) == -1) { // .index( 찾을 값 ) : 찾았으면 인덱스 반환 함수, 없으면 -1
        newAry.push(num);          // .pusg( 추가할 값 ) : 배열 내 마지막 요소 값 추가
    }
} // for  END
console.log(newAry);



/*문제 6: 버블 정렬 (Bubble Sort) 구현하기
주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다.*/

let numbers3 = [5, 3, 4, 1, 2]; // 오름차순은 더 큰 값이 뒤로 이동한다. 스왑 : let temp = a; a=b ; b=temp;
// 1 : (1) 5 > 3 (2) 3 > 4 (3) 4 > 1 (4) 1 > 2 네 번 비교
// 2 : (1) 5 > 3 (2) 3 > 4 (3) 4 > 1
// 3 : (1) 5 > 3 (2) 3 > 4
// 4 : (1) 5 > 3

// [1]
for (let i = 0; i < numbers3.length - 1; i++) { // 마지막 인덱스는 인접한 인덱스(+1)이 없기 때문에 생략.
    //console.log(i);
    for (let j = 0; j < numbers3.length - 1; j++) {
        //console.log(j);       // j는 마지막 인덱스끼지 갈 필요가 없다
        //console.log(j + 1);      // j와 근접한 인덱스 (+1)
        if (numbers3[j] > numbers3[j + 1]) {   // 만약에 J값이 인접한 J+1 보다 더 크면 스왑
            let temp = numbers3[j];     // let temp = a ;
            numbers3[j] = numbers3[j + 1];    // a = b ;
            numbers3[j + 1] = temp;       // b = temp;
        }
    }
} // for END
console.log(numbers3);


/*문제 7: 재고 관리 시스템
두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 수량을 입력받아,
재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 "재고가 부족합니다."를 출력합니다. */
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
// 배열 내 입력받은 값과 동일한 값 찾기 : [1] indexOf [2] for문
let name = prompt("제품명 : ");
let find = -1; // 찾은 인덱스 저장하는 변수 . -1 못 찾았다.
for (let i = 0; i <= products.length - 1; i++) {
    if (products[i] == name) { //만약에 i번째 제품명과 입력받은 값과 같으면
        find = i;  // 찾은 1번째 값을 대입/기억
        break; // 찾았으면 뒤에 있는 값은 확인할 필요 없으므로  [ 반복문 탈출 ]
    } // if END
} // for END // !!!!!!!!! 주의할 점 : 모든 { } 괄호들은 {지역특징} 갖는다. 즉 { } 안에서 선언(let/const)한 변수들은 } 중괄호 끝나면 사라진다.
if (find == -1) { console.log("없는 제품명입니다."); }
else {
    let count = Number(prompt("수량 : "));
    if (stock[find] >= count) {
        stock[find] -= count; // 재고차감
        console.log("구매 완료!");
    }// if END
    else { console.log("재고가 부족합니다.") }
}// else END


/*문제 8: 영화 평점 시각화하기
주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오./-*/

let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];

// 순회 : 배열 내 첫 인덱스(0번)부터 마지막 인덱스( length-1 ) 까지
// 누적합계 / 누계 / 추가 : 변수 += 새로운 값
let html = ``; // 빈 변수 선언
for (let index = 0; index <= movieNames.length - 1; index++) {
    let movie = movieNames[index]; // i번째 영화명 가져오기
    html += `<div>${movie}`;

    let rating = movieRatings[index]; // i번째 평점 가져오기
    for (let r = 1; r <= 10; r++) {
        if (rating >= r) { html += `<span>●</span>` }  // 달러중괄호가 있든 말든 문자열은 따옴표보다 백틱으로 감싸는 거 습관화하기.
        else { html += `<span>○</span>` }
    } // for END

    html += `</div>`
} // for END

document.write(html); // 최종적으로 반복 작성된 HTML 출력하기
/*(1). 초기 데이터
영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
(2). 구현 조건
for 반복문을 사용하여 모든 영화를 순회합니다.
각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
(3). HTML 출력 예시
히든페이스      ★★★★★★★★☆☆
위키드          ★★★★☆☆☆☆☆☆
글래디에이터2   ★★★★★★★☆☆☆
청설            ★★★★★★☆☆☆☆
*/


/*문제 9: 좌석 예약 상태 표시하기 
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.  조건 ? 참 : 거짓 */
/*(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의 <div> 태그로 표시합니다.
좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석 
예약석 빈좌석
예약석 빈좌석
*/
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
let html2 = ``;
for (let index = 0; index <= seatStatus.length - 1; index++) {
    html2 += `<span style="color : ${seatStatus[index] == "빈좌석" ? "blue" : "red"} ; ">   
             ${seatStatus[index]} 
                </span>
                ${(index + 1) % 2 == 0 ? "</br>" : ""}  
                `;
    if ((index + 1) % 2 == 0) {// 인덱스가 짝수이면 줄 바꿈 처리
        html += `</br>`;
    }
} //for END

document.write(html2);


/*$중괄호는 자바스크립트 코드가 들어가는 곳 $중괄호 밖은 html 코드가 들어감. 백틱은 html 안에서 스트립트 코드를 쓸 수 있어 좋다.*/





/*문제 10: 주차 요금 정산하기
차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
(2). 요금 규정
기본 요금: 최초 30분까지 1,000원
추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
(3). 구현 조건
for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
(4). 출력 예시 (HTML)
250어7142: 65분 주차, 최종 요금: 2500원
142가7415: 30분 주차, 최종 요금: 1000원
888호8888: 140분 주차, 최종 요금: 6500원
931나8234: 420분 주차, 최종 요금: 20000원
(힌트)
기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.

*/

let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
let html3 = ``;
for (let index = 0; index <= carNumbers.length - 1; index++) {
    // [1] 차량 번호 출력
    let number = carNumbers[index]; // i번째 차량번호 꺼내기
    html3 += `<div><span> ${number}</span>`; // div 열고

    // [2] 시간 출력
    let min = usageMinutes[index]; // i번째 이용시간[분] 꺼내기
    html3 += `<span> ${min}분 주차</span>`

    // [3] 요금 출력
    let money = 0; // 요금 저장하는 변수
    if (min <= 30) { money = 1000; } // 만약에 사용 시간이 30분 이하이면 요금 1000원
    else { //아니면(30분 초과이면)
        money = parseInt((min - 30) / 10) * 500 + 1000; // 10분 단위이므로 일의 자릿수 제거 + 10분마다 *500원 + 기본요금 1000    
    }
    if (money > 20000) { money = 20000; } // 만일 요금이 2만원 초과하면 2만원으로 고정
    html3 += `<span> ${money.toLocaleString()}원 </span>`; // 변수.toLocaleString()
    html3 += `</div>`; // div 닫기


} // for END
document.write(html3);
