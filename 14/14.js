
// 데이터 가져오기
const getData = () => {
        let keyword = '';
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=ulI8%2FG%2BhOY%2BO3Jtvo57Cd1CymM7pa2CaSPNBS%2B3mFOaYreZM3eOl%2FA0C8qPm%2FDeUjHR8W%2FTm0rTi7HSmbM4u1w%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EB%B6%80%EC%82%B0%EC%97%AD&_type=json';
    
        fetch(url)

            .then(resp => resp.json())
            .then(data => {
                let data2 = data.response.body.items.item;
                let images = data2.map((item) => `<img src=${item.galWebImageUrl}>` );
                
                content.innerHTML = images;
            })
            .catch(err => console.log(err))

            
}


document.addEventListener('DOMContentLoaded', () => {
    // 요소 선택
    const txt1 = document.querySelector('#txt1');
    const btOk = document.querySelector('#btOk');
    const btCancel = document.querySelector('#btCancel');
    const content = document.querySelector('#content');


    // 확인 버튼이 눌러지면 데이터 가져오기
    btOk.addEventListener('click', () => {
        getData();
    })
    // 취소 버튼이 눌러지면 화면 지우기 => 텍스트 내용과 content 내용 지우기
})