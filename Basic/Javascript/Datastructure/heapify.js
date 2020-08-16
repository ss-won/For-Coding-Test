// # Heapify(+ reverse heapify) 구현하기

// parameter obj -> Heap Object in heap.js file
const swap = (obj, a, b) => {
    let tmp = obj[a];
    obj[a] = obj[b];
    obj[b] = tmp;
}

const mx_rv_heapify = function (obj, start) {
    let cid = start;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        if(obj.store[cid][0] > obj.store[pid][0]){
            swap(obj.store, cid, pid);
        }
        cid = pid;
        pid = parseInt(cid / 2, 10);
    }
};

const mn_rv_heapify = function (obj, start) {
    let cid = start;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        if (obj.store[pid][0] > obj.store[cid][0]) {
            swap(obj.store, cid, pid);
        }
        cid = pid;
        pid = parseInt(cid / 2, 10);
    }
};

const mx_heapify = function (obj) {
    //터미널 노드까지 탐색
    let pid = 1;
    let repeat = true;
    while (pid < obj.store.length && pid > 0 && repeat){
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        // # left child는 있고, rightchild는 없을 때
        if(leftid < obj.store.length && rightid >= obj.store.length){
            //console.log("Case1");
            if(obj.store[pid][0] < obj.store[leftid][0]){
                swap(obj.store, pid, leftid);
                pid = leftid;
            } 
        }
        // # left child도 있고, right child도 있을 때
        else if(leftid < obj.store.length && rightid < obj.store.length){
            //console.log("Case2");
            if(obj.store[leftid][0] > obj.store[rightid][0]){
                if(obj.store[pid][0] < obj.store[leftid][0]){
                    swap(obj.store, pid, leftid);
                    pid = leftid;
                    continue;
                }
            }
            else{
                if(obj.store[pid][0] < obj.store[rightid][0]){
                    swap(obj.store, pid, rightid);
                    pid = rightid;
                    continue;
                }
            }
        }
        // # right child만 있을 때(오류), child가 없는 경우(터미널 노드)
        //console.log("Case3");
        repeat = false;
    }
};

const mn_heapify = function (obj) {
    //터미널 노드까지 탐색
    let pid = 1;
    let repeat = true;
    while (pid < obj.store.length && pid > 0 && repeat) {
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        if (leftid < obj.store.length && rightid >= obj.store.length) {
            //console.log("Case1");
            if (obj.store[pid][0] > obj.store[leftid][0]) {
                swap(obj.store, pid, leftid);
                pid = leftid;
            }
        } else if (leftid < obj.store.length && rightid < obj.store.length) {
            //console.log("Case2");
            if (obj.store[leftid][0] < obj.store[rightid][0]) {
                if (obj.store[pid][0] > obj.store[leftid][0]) {
                    swap(obj.store, pid, leftid);
                    pid = leftid;
                    continue;
                }
            } 
            else {
                if (obj.store[pid][0] > obj.store[rightid][0]) {
                    swap(obj.store, pid, rightid);
                    pid = rightid;
                    continue;
                }
            }
        } 
        //console.log("Case3");
        repeat = false;
    }
};

export {
    mx_rv_heapify,
    mn_rv_heapify,
    mx_heapify,
    mn_heapify,
    swap
};

// Memo //
// 객체메소드가 arror function으로 선언되면 내부에서 this 키워드를 사용할 수 없다.