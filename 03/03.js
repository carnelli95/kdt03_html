// 기존 방식
// function Hello(n) {
//     if (n == '1') alert(n + "안녕하세요");
//     else alert('반갑습니다.');

//     console.log('콘솔출력입니다.');
// }

// 화살표함수
const Hello = (n) => {
    // ==, === 를 비교
    if (n == '1') alert(n + "안녕하세요");
    else alert('반갑습니다.');

    console.log('콘솔출력입니다.');
}

const CheckVar = () => {
    let x;
    x= 'test';

    const y = '20';

    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`)
    console.log(`문자열 ${x}는 문자인가요? ${isNaN(x)? '예' : '아니오'}`);
    console.log(`문자열 ${y}는 문자인가요? ${isNaN(y)? '예' : '아니오'}`);
}