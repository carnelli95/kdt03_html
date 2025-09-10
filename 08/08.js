document.addEventListener('DOMContentLoaded', () => {
    // 노드 불러오기
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    // input 
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    // label
    const txt1lb = document.querySelector('[for=txt1]');
    const txt2lb = document.querySelector('[for=txt2]');

    console.log(txt1lb.textContent);
    console.log(txt2lb.textContent);

    // 공통함수

    
    // select 변경시
    sel1.addEventListener('change', () => {
        sel2.value = sel1.value == '℃' ? '℉' : '℃' ;

        txt1.value = '' ;
        txt1lb.textContent = sel1.value;

        txt2.value = '' ;
        txt2lb.textContent = sel2.value;
    })

    sel2.addEventListener('change', () => {
        sel1.value = sel2.value == '℃' ? '℉' : '℃' ;

        txt1.value = '' ;
        txt1lb.textContent = sel1.value;

        txt2.value = '' ;
        txt2lb.textContent = sel2.value;
    })

    // input txt1에 값이 입력이 되면
    txt1.addEventListener('input', () => {
        let temp;
        // 섭씨온도 -> 화씨온도로
        if (sel1.value == '℃') {
            temp = (parseFloat(txt1.value) * (9 / 5)) + 32;
        }
        // 화씨온도 -> 섭씨온도
        else {
            temp = (parseFloat(txt1.value) - 32) * (5 / 9);
        }

        txt2.value = parseFloat(temp.toFixed(4));
    })
});

