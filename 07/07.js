document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    // 주사위 이미지 가져오기
    const com = document.querySelector('#diceImg1');
    const user = document.querySelector('#diceImg2');
    // 버튼 가져오기
    // const bt = document.querySelector('#btDiv > button');
    const bts = document.querySelectorAll('button');

    // 메시지 영역
    const msg = document.querySelector('#msg');

    // 버튼이 눌러지면
    for (let bt of bts) {
        bt.addEventListener('click', () => {
            console.log(bt.innerHTML[0].charAt(0));
            const userNum = parseInt(bt.innerHTML.charAt(0));
            const comNum = Math.floor(Math.random() * 6) + 1; // 1 ~ 6 까지
            com.setAttribute('src', `../img/${comNum}.png`);
            user.setAttribute('src', `../img/${userNum}.png`);
        
    })
    }
}); 