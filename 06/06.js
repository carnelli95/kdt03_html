document.addEventListener('DOMContentLoaded', () => {
    // 노드 가져오기
    // 주사위 이미지 가져오기
    const diceimg = document.querySelector('#diceDiv > img');
    // 버튼 가져오기
    const bt = document.querySelector('#btDiv > button');

    // 버튼이 눌러지면
    bt.addEventListener('click', ()=> {
        let n = Math.floor(Math.random() * 6) + 1 ; // 1 ~ 6 까지
        diceimg.setAttribute('src', `../img/${n}.png`);
        diceimg.setAttribute('alt', `${n}`);
    }) ;
}) 