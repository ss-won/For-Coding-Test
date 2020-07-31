// # Heapify(+ reverse heapify) 구현하기

// parameter obj -> Heap Object in heap.js file

const rv_heapify = function (obj) {
    let cid = obj.store.length - 1;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        if(obj.store[cid] > obj.store[pid]){
            let tmp = obj.store[pid];
            obj.store[pid] = obj.store[cid];
            obj.store[cid] = tmp;
        }
        cid = pid;
        pid = parseInt(cid / 2, 10);
    }
    obj.root = (obj.root !== obj.store[1]) ? obj.store[1] : obj.root; 
};

const heapify = function (obj) {
    //터미널 노드까지 탐색
    let pid = 1;
    let repeat = true;
    while (pid <= obj.store.length - 1 && repeat) {
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        if(leftid < obj.store.length && rightid >= obj.store.length){
            if(obj.store[pid] < obj.store[leftid]){
                let tmp = obj.store[pid];
                obj.store[pid] = obj.store[leftid];
                obj.store[leftid] = tmp;
                repeat = false;
            }  
        }
        else if(leftid < obj.store.length && rightid < obj.store.length){
            if(obj.store[leftid] > obj.store[rightid]){
                if(obj.store[pid] < obj.store[leftid]){
                    let tmp = obj.store[pid];
                    obj.store[pid] = obj.store[leftid];
                    obj.store[leftid] = tmp;
                    pid = leftid;
                }
            }
            else{
                if(obj.store[pid] < obj.store[rightid]){
                    let tmp = obj.store[pid];
                    obj.store[pid] = obj.store[rightid];
                    obj.store[rightid] = tmp;
                    pid = rightid;
                }
            }
        }
        else{
            repeat = false;
        }
    }
    obj.root = (obj.root !== obj.store[1]) ? obj.store[1] : obj.root;
};

export { rv_heapify, heapify };

// Memo //
// 객체메소드가 arror function으로 선언되면 내부에서 this 키워드를 사용할 수 없다.