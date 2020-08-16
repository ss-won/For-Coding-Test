// # python heapdict 대체
import { mx_rv_heapify, mn_rv_heapify, mx_heapify, mn_heapify } from '../Datastructure/heapobj_heapify.js';

function Heapobj(stand='greater'){
    // # default status : MinHeap
    this.store = [null];
    this.root = this.store[1];
    this.nodes = {};

    // return node's weight value.
    this.get = (key) => {
        const position = this.nodes[key];
        if(position)
            return this.store[position][1];
        else
            return;
    }

    //O(logN) -> rv_heapify
    this.set = (key, value) => {
        if(Object.keys(this.nodes).includes(key)){
            // # heap 정보값 변경
            let cid = this.nodes[key];
            this.store[cid][1] = value;
        }
        else {
            // # 새로운 값 heap에 push
            this.store.push([key, value]);
            this.nodes[key] = this.store.length - 1;
        }
        // # heapify & nodes[key] 값 업데이트
        if (stand === 'greater')
            mn_rv_heapify(this, this.nodes[key]);
        else
            mx_rv_heapify(this, this.nodes[key]);
    }
    
    //O(logN) -> heapify
    this.pop = () => {
        let _root = this.root;
        let curr = this.store.pop();
        // # nodes[key] 값 삭제
        delete this.nodes[_root[0]];
        if (this.store.length > 1) {
            this.store[1] = curr;
            this.nodes[curr[0]] = 1;
            // # heapify & nodes[key] 값 업데이트
            if (stand === 'greater')
                mn_heapify(this);
            else
                mx_heapify(this);
        }
        this.root = this.store[1];
        return _root;
    }

    this.isempty = () => {
        return (this.store.length <= 1) ? true : false;
    }
}

export default Heapobj;

/*
// @ Test
let ex = new Heapobj()
console.log(ex.isempty());
ex.set('a',1);
console.log(ex);
ex.set('a', 3);
console.log(ex);
ex.set('b', 2);
console.log(ex);
console.log(ex.pop()); // ['b', 2]
console.log(ex);
console.log(ex.get('a'));
*/