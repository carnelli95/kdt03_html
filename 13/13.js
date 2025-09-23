// 어제 날짜 가져오기
const getYesterday = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // let year = yesterday.getFullYear(); // 연도 4자리
    // let mon = String(yesterday.getMonth() + 1).padStart(2, '0'); // 월 1 ~ 12
    // let day = String(yesterday.getDate()).padStart(2, '0'); // 일 1 ~ 31
    
    // return(year + '-' + mon + '-' + day);
    return yesterday.toISOString().slice(0, 10);
}

// 박스오피스 가져오기
const getData = (gdt) => {
   
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${gdt}`

    // fetch
    fetch(url)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
} 


document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기
    const dt = document.querySelector('#dt');
    const box = document.querySelector('#box');

    // 어제 날짜

    dt.value = getYesterday();
    dt.setAttribute('max', getYesterday());

    getData(dt.value.replaceAll('-', ''));
});