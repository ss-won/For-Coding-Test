function solution(clothes) {
    let answer = 1;
    const dress_type = {};

    clothes.forEach(v => {
        let [name, type] = v;
        dress_type[type] = (dress_type[type] || 1) + 1;
    })

    for (let val of Object.values(dress_type)) {
        answer *= val;
    }

    return answer - 1;
}