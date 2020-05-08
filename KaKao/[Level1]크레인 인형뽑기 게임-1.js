/*
***
 @Test
***
console.log(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
], [1, 5, 3, 5, 1, 2, 1, 4]));
*/

function solution(board, moves) {
    let answer = 0;
    let bucket = [];
    let box = [];
    
    for(let i in board){
        box.push([]);
    }

    for(let col=0;col<board.length;col++){
        for(let row=0;row<board.length;row++){
            if (board[col][row]!=0)
                box[row].push(board[col][row]);
        }
    }
    
    for(let n of moves){
       if(box[n-1].length==0) continue;
       let doll = box[n-1].shift();
       if(bucket[bucket.length-1]==doll){
           answer += 2;
           bucket.pop();
       }
       else{
         bucket.push(doll);
       }
    }

    return answer;
}