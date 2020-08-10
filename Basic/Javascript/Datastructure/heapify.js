// # Heapify(+ reverse heapify) 구현하기

// parameter obj -> Heap Object in heap.js file

const mx_rv_heapify = function (obj) {
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
    obj.root = obj.store[1]; 
};

const mn_rv_heapify = function (obj) {
    let cid = obj.store.length - 1;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        if (obj.store[pid] > obj.store[cid]) {
            let tmp = obj.store[pid];
            obj.store[pid] = obj.store[cid];
            obj.store[cid] = tmp;
        }
        cid = pid;
        pid = parseInt(cid / 2, 10);
    }
    obj.root = obj.store[1];
};

const mx_heapify = function (obj) {
    //터미널 노드까지 탐색
    let pid = 1;
    let repeat = true;
    let tmp = 0;
    while (pid < obj.store.length && pid > 0 && repeat){
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        // # left child는 있고, rightchild는 없을 때
        if(leftid < obj.store.length && rightid >= obj.store.length){
            //console.log("Case1");
            if(obj.store[pid] < obj.store[leftid]){
                tmp = obj.store[pid];
                obj.store[pid] = obj.store[leftid];
                obj.store[leftid] = tmp;
                pid = leftid;
            }
            repeat = false;  
        }
        // # left child도 있고, right child도 있을 때
        else if(leftid < obj.store.length && rightid < obj.store.length){
            //console.log("Case2");
            if(obj.store[leftid] > obj.store[rightid]){
                if(obj.store[pid] < obj.store[leftid]){
                    tmp = obj.store[pid];
                    obj.store[pid] = obj.store[leftid];
                    obj.store[leftid] = tmp;
                    pid = leftid;
                }
                repeat = false;
            }
            else{
                if(obj.store[pid] < obj.store[rightid]){
                    tmp = obj.store[pid];
                    obj.store[pid] = obj.store[rightid];
                    obj.store[rightid] = tmp;
                    pid = rightid;
                }
                repeat = false;
            }
        }
        // # right child만 있을 때(오류), child가 없는 경우(터미널 노드)
        else{
            //console.log("Case3");
            repeat = false;
        }
    }
    obj.root = obj.store[1];
};

const mn_heapify = function (obj) {
    //터미널 노드까지 탐색
    let pid = 1;
    let repeat = true;
    let tmp = 0;
    while (pid < obj.store.length && pid > 0 && repeat) {
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        if (leftid < obj.store.length && rightid >= obj.store.length) {
            if (obj.store[pid] > obj.store[leftid]) {
                tmp = obj.store[pid];
                obj.store[pid] = obj.store[leftid];
                obj.store[leftid] = tmp;
                pid = leftid;
            }
            repeat = false;
        } else if (leftid < obj.store.length && rightid < obj.store.length) {
            if (obj.store[leftid] < obj.store[rightid]) {
                if (obj.store[pid] > obj.store[leftid]) {
                    tmp = obj.store[pid];
                    obj.store[pid] = obj.store[leftid];
                    obj.store[leftid] = tmp;
                    pid = leftid;
                }
                repeat = false;
            } 
            else {
                if (obj.store[pid] > obj.store[rightid]) {
                    tmp = obj.store[pid];
                    obj.store[pid] = obj.store[rightid];
                    obj.store[rightid] = tmp;
                    pid = rightid;
                }
                repeat = false;
            }
        } 
        else {
            repeat = false;
        }
    }
    obj.root = obj.store[1];
};

export {
    mx_rv_heapify,
    mn_rv_heapify,
    mx_heapify,
    mn_heapify
};

// Memo //
// 객체메소드가 arror function으로 선언되면 내부에서 this 키워드를 사용할 수 없다.