document.addEventListener('DOMContentLoaded', () => {
    const bt = document.querySelector('section > button');
    const cols = document.querySelectorAll('.col');
    const msg = document.querySelector

    let arrnum = [0,0,0,0,0,0,0,0,1];
    let flag = false;
    let idx = 0;
    let cnt = 0;

    // 초기화
    const init = () => {
        flag = false;
        cnt = 0;
        bt.innerHTML = '폭탄섞기';
        msg.innerHTML = ()
    }


    bt.addEventListener('click', () => {
        if (flag) return;
        
        // shuffle
        arrnum.sort(() => Math.random() - 0.5);
        flag = true;
        bt.innerHTML = '게임중...';
        console.log(arrnum);
    });

    //보드 선택
    for(let col of cols) {
        col.addEventListener('click', () => {
            if (!flag) {
                if(cnt == 0 ) 
                msg.innerHTML= "<span>폭탄을 섞어주세요.</span>"
                return;
            }

            idx = parseInt(col.getAttribute('id').replace('col', ''));
            if(arrnum[idx] == 0) {
                col.innerHTML = '❤';
                if(cnt == 8) {

                }
            }
            else {
                col.innerHTML = '💣'
                msg.innerHTML = "<span>실패</span>";
                bt.innerHTML = "다시하기";
                flag = false;
            }
            console.log(arrnum[idx]);
        })
    }



})
