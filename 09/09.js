document.addEventListener('DOMContentLoaded', () => {
    // 1. 노드 가져오기
    const img = document.querySelector('img')
    const txt1 = document.querySelector('#txt1')
    const bt = document.querySelector('button')
    let flag = false;
    let n ;

    // 공통함수
    const init = (flagV, txt1v,)
    // 2. 버튼이 눌러졌을 때
    bt.addEventListener('click', (e) => {
        e.preventDefault();
    
        // 2-1. 처음 눌러졌는지 확인해서 랜덤수 생성
        if (!flag) {
            n = Math.floor(Math.random() * 100) + 1; // 1 ~ 100
            flag = true;
            txt1.style.dispaly = 'flex';
             bt.textContent = '확인'
            img.setAttribute('src', '../img/what.png')
        }
        console.log(`n=${n}`)
        // 2-2. 랜덤수와 입력 값을 비교해서 업다운 이미지 보여주기
        if (n > parseInt(txt1.value)) {
            img.setAttribute('src', '../img/up.png');
        }
        else if(n < parseInt(txt1.value)) {
            img.setAttribute('src', '../img/down.png');
        }
        else {
            img.setAttribute('src', '../img/good.png');
            txt1.value = '';
            txt1.style.dispaly = 'none';
            bt.textContent = '다시 시작하기'
            flag = false;
        }
    })
})
