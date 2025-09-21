//  배열의 순회
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// 2.key(index) 값 가져오기
for(let i in arr1) {
    console.log(arr1[i]);
}

for(let item of arr1) {
    console.log(item);
}

arr1.forEach((item, i) => {
    console.log(item, i)
});

const arr3 = arr1.map((item) => {
    return item * 2;
})

const arr4 = arr1.map(item => teim * 2);

const arr6 = arr1.filter(tiem => item %2 == 0);

let arr7 = [];
for(let c of arr1) {
    arr7.push(c * 2);
}

