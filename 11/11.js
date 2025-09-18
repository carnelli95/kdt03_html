document.addEventListener('DOMContentLoaded', () => {

    const prevBt = document.getElementById('prevBt');
    const nextBt = document.getElementById('nextBt');
    const mainimg = document.querySelector('#mainimg > img');

    const arrimg = ['html.png', 'js.png', 'css.png', 'react.png'];
    let idx = 0;

    const updateImg = () => {
        mainimg.setAttribute('src', `../img/${arrimg[idx]}`);
        mainimg.setAttribute('alt', arrimg[idx].split(',')[0]);

        // 버튼 배경 업데이트
        prevBt.style.backgroundColor = (idx === 0) ? "white" : "rgb(54, 54, 79)";
        nextBt.style.backgroundColor = (idx === arrimg.length - 1) ? "white" : "rgb(54, 54, 79)";
    }

    prevBt.addEventListener('click', () => {
        if(idx > 0) {
            idx--;
            updateImg();
        }
    });

    nextBt.addEventListener('click', () => {
        if(idx < arrimg.length - 1) {
            idx++;
            updateImg();
        }
    });

    // 초기 이미지 표시
    updateImg();
});
