const solution = (key, lock) => {
    let answer = true;
    let zerolist = [];
    let max_box = [0,0];
    lock.forEach((rv,ri)=>{
        rv.forEach((cv,ci)=>{
            if(cv==0){
                zerolist.push([ri,ci]);
                max_box = [Math.max(ri,max_box[0]),Math.max(ci,max_box[1])];
            }
        })
    })
    /*패턴만들기*/
    let size = key.length;
    let patts = [];
    let mat = [];
    //상
    if(max_box[0]==size||max_box[1]==size){
        
    }
    for (let i=0;i<size;i++) {
        let tmp = [];
        tmp.push(0);
    }

    console.log(mat);
    //우
    //좌
    //하

    console.log(max_box, zerolist);
    return answer;
}

console.log(solution([
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1]
], [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
]));

//@Time 1차 1:18:48