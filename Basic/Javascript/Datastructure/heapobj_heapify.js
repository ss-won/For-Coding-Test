// # heapobj 객체를 위한 heapify 함수
import { swap } from '../Datastructure/heapify.js';

const mx_rv_heapify = function (obj, start) {
    let cid = start;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        let [ck, cv] = obj.store[cid];
        let [pk, pv] = obj.store[pid];
        if (cv > pv) {
            swap(obj.store, cid, pid);
            obj.nodes[ck] = pid;
            obj.nodes[pk] = cid;
        }
        cid = pid;
        pid = parseInt(cid / 2, 10);
    }
    obj.root = obj.store[1];
};

const mn_rv_heapify = function (obj, start) {
    let cid = start;
    let pid = parseInt(cid / 2, 10);
    while (pid >= 1) {
        let [ck, cv] = obj.store[cid];
        let [pk, pv] = obj.store[pid];
        if (pv > cv) {
            swap(obj.store, cid, pid);
            obj.nodes[ck] = pid;
            obj.nodes[pk] = cid;
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
    while (pid < obj.store.length && pid > 0 && repeat) {
        let leftid = pid * 2;
        let rightid = pid * 2 + 1;
        let [lck, lcv] = obj.store[leftid] || [];
        let [rck, rcv] = obj.store[rightid] || [];
        let [pk, pv] = obj.store[pid] || [];
        // # left child는 있고, rightchild는 없을 때
        if (leftid < obj.store.length && rightid >= obj.store.length) {
            //console.log("Case1");
            if (pv < lcv) {
                swap(obj.store, pid, leftid);
                obj.nodes[pk] = leftid;
                obj.nodes[lck] = pid;
                pid = leftid;
            }
        }
        // # left child도 있고, right child도 있을 때
        else if (leftid < obj.store.length && rightid < obj.store.length) {
            //console.log("Case2");
            if (lcv > rcv) {
                if (pv < lcv) {
                    swap(obj.store, pid, leftid);
                    obj.nodes[pk] = leftid;
                    obj.nodes[lck] = pid;
                    pid = leftid;
                    continue;
                }
            } else {
                if (pv < rcv) {
                    swap(obj.store, pid, rightid);
                    obj.nodes[pk] = rightid;
                    obj.nodes[rck] = pid;
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
        let [lck, lcv] = obj.store[leftid] || [];
        let [rck, rcv] = obj.store[rightid] || [];
        let [pk, pv] = obj.store[pid] || [];
        if (leftid < obj.store.length && rightid >= obj.store.length) {
            if (pv > lcv) {
                swap(obj.store, pid, leftid);
                obj.nodes[pk] = leftid;
                obj.nodes[lck] = pid;
                pid = leftid;
            }
        } else if (leftid < obj.store.length && rightid < obj.store.length) {
            if (lcv < rcv) {
                if (pv > lcv) {
                    swap(obj.store, pid, leftid);
                    obj.nodes[pk] = leftid;
                    obj.nodes[lck] = pid;
                    pid = leftid;
                    continue;
                }
            } else {
                if (pv > rcv) {
                    swap(obj.store, pid, rightid);
                    obj.nodes[pk] = rightid;
                    obj.nodes[rck] = pid;
                    pid = rightid;
                    continue;
                }
            }
        }
        // # right child만 있을 때(오류), child가 없는 경우(터미널 노드)
        repeat = false;
    }
};

export { mx_rv_heapify, mn_rv_heapify, mx_heapify, mn_heapify };