// 리터럴 표기법
let arr1 = [1,2,3];

//Array 생성자 이용
let arr2 = new Array(1,2,3);

//배열 크기
console.log(`arr1 요소개수 :  ${arr1}`)
console.log(`arr1의 요소개수 :  ${arr1.length}`)

//배열요소 제거
console.log(arr2);
// arr2 = [];
// arr2.length = 0;

//배열요소 추가
console.log(arr1)
arr1.push('가')
console.log(arr1)
let arr1pop = arr1.pop()
console.log(arr1, typeof(arr1));
console.log(arr1pop, typeof(arr1pop));

// 배열의 순회
//1.
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[1]);
}

//2. key(index)값 가져오기
for(let i in arr1) {
    console.log(arr1[i]);
}

//3. value 값 가져오기
for(let item in arr1) {
    console.log(item);
}

//4. forEach 메소드
arr1.forEach((item, i) => {
    console.log(item, i);
}) ;

//5. 배열 map 메소드
const arr3 = arr1.map((item) => {
    return item * 2;
});



console.log(arr3)

// 콜백함수는 파라미터가 1개이면 ()가 생략가능
// return 문만 있으면 {}와 return을 생략가능
const arr4 = arr1.map(item => item * 2);

console.log(arr4)

// 콜백함수는 파라미터가 2개 되면 인덱스를 가져옴
// return 문만 있으면 {}와 return을 생략가능
const arr5 = arr1.map((item, i) => item * i);

console.log(arr5);

//filter

const arr6 = arr1.filter((item) => {
    return item % 2 == 0;
    console.log(arr6);
});

const arr7 = arr1.filter(item => item % 2 == 0);
    console.log(arr7)

//map 함수
let arr8 = [];
for(let c of arr1) {
    arr8.push(c * 2);
}
console.log(arr8);

let arr9 = [];
for(let c of arr1) {
    if(c % 2 == 0) arr9.push(c);
}
console.log(arr9);
