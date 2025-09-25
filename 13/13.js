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

const getrankInten = (rankInten) =>{
    let sprankInten ;

    if (rankInten > 0)
        sprankInten = `▲${rankInten}`
    else if (rankInten < 0)
        sprankInten = `▼${rankInten}`
    else
        sprankInten = `-`
    
    return sprankInten ;
}

// 박스오피스 가져오기
const getData = (gdt, box) => {
    let apiKey = 'c70a2264c862a040e02d9fbd0b4b06e2'
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${gdt}`

    // fetch api 데이터 가져오기
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let boxs = data.boxOfficeResult.dailyBoxOfficeList;
            let tags = boxs.map((item) => `<li class="boxli>
                                            <span class="boxrank">${item.rank}</span>
                                            ${getrankInten(item.rankInten)}
                                            <span>${item.movieNm.slice(0, 20)})</span>
                                            </li>` );

            tags = tags.join('');
            box.innerHTML = tags;
        })
        .catch(err => console.log(err))

    console.log(url);
} 


document.addEventListener('DOMContentLoaded', () => {
    // 요소 가져오기
    const dt = document.querySelector('#dt');
    const box = document.querySelector('#box');

    // 날짜가 변경될 때
    dt.addEventListener('change', () => {
     getData(dt.value.replaceAll('-', ''), box);
    });


    // 어제 날짜

    dt.value = getYesterday();
    dt.setAttribute('max', getYesterday());

    getData(dt.value.replaceAll('-', ''), box);
});