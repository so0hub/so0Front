
// [1] for 중첩 : for 안에 for , 구구단 출력
// (1) 2단 구구단
for (let 곱 = 1; 곱 <= 9; 곱++) { // 곱이 1부터 9까지 1씩 증가
    console.log(` 2 X  ${곱} = ${2 * 곱}`);
}

// (2) 2단 ~ 9단
for (let 단 = 2; 단 <= 9; 단++) { //단이 2부터 9까지 1씩 증가한다.
    console.log(` ${단} X 1 = ${단 * 1}`);
}

// (3) 1. 곱마다 단을 계산하는 건지? [X] 2. 단마다 곱을 계산하는 건지? [0]
// 2단일 때 9번 곱 , 3단일 때 9번 곱 , ~~~~ 
for (let 단 = 2; 단 <= 9; 단++) { //단이 2부터 9까지 1씩 증가한다.
    for (let 곱 = 1; 곱 <= 9; 곱++) { // 곱이 1부터 9까지 1씩 증가
        console.log(` ${단} X ${곱}`);
    } // 곱 END
} // 단 END // 즉 : 곱은 단마다 9번씩 실행된다. 총 실행횟수 72회 반복

// [2] 별 출력하기
/*      line(row)   star(column)                             찾은 패턴
*       1           1               첫 번째 줄의 별 1개 출력    line은 1부터 5까지 1씩 증가하면서 줄바꿈 ( \n ) 출력
**      2           1 2             두 번째 줄의 별 2개 출력    star은 1부터 현재 line까지 1씩 증가하면서 "*" 출력
***     3           1 2 3           세 번째 줄의 별 3개 출력
****    4           1 2 3 4         네 번째 줄의 별 4개 출력
*****   5           1 2 3 4 5       다섯 번째 줄의 별 5개 출력
*/

// (1)
let output = ""; // 출력할 문자열 선언
for (let line = 1; line <= 5; line++) { output = output + "\n"; } // console.log() 함수는 1개당 줄바꿈 1개 내장
// 예상 : output = "\n\n\n\n\n";

// (2)
//for(let star = 1 ; star <= 5 ; star++ ){output = output + "*";}
// 예상 : output = "\n\n\n\n\n*****";

// (3) 1. 줄마다 별을 출력하는 건지? 2. 별마다 줄을 출력하는 건지?
for (let line = 1; line <= 5; line++) {
    for (let star = 1; star <= line; star++) { output = output + "*"; } /* 총합계와 동일하게 문자열 추가/연결 */
    output = output + "\n"; // 줄바꿈처리
} // for END
console.log(output);
// 예상하기 output = line 1일 때 , *\n
// line 2일 때 , *\n**\n
// line 3일 때 ,  *\n**\n***\n
// line 4일 때 ,  *\n**\n***\n****\n
// line 5일 때 ,  *\n**\n***\n****\n*****\n


// [3] 반복문과 자주 사용되는 코드

// (1) continue;
for (let i = 1; i <= 5 ; i++){
    if (i === 3) { continue; } // 만약에 i(반복변수)가 3일 때 반복문으로 이동<이하코드 실행 안 됨>
    console.log(i); // 1 2 4 5 , 1 부터 3 제외한 5까지 출력된다. 이유 : 3일 때 continue 만났기 때문에
} // for END

// (2) break;
for (let i = 1 ; i <= 5 ; i++ ){
    if(i===3){break;} // 만약에 i(반복변수)가 3일 때 반복문 탈출/종료<이하코드 실행 안 됨>
    console.log(i); // 1 2 , 1부터 5까지 출력하되 3이면 종료, 이유 : 3일떄 break 만났기 떄문에
} // break END

// (3) 무한루프 : 종료가 없는 계속되는 반복문
// 방법 1 : for( ; ; ){console.log(1);}
// 방법 2 : while( true ){ console.log(1);}
// 활용1 : for( ; ; ){let a = prompt("무한입력 : ");}
// 활용2 : for( ; ; ){let b = prompt("무한입력 : "); if( b == "x")break; }