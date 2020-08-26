function bishopAndPawn(bishop: string, pawn: string): boolean {
    let letters = ['0','a','b','c','d','e','f','g','h']
    let bishopArr =[letters.indexOf(bishop[0]), parseInt(bishop[1])];
    let pawnArr =[letters.indexOf(pawn[0]), parseInt(pawn[1])];
    // let count=0;

    // if(bishopArr[0]<pawnArr[0]){
    //     while(bishopArr[0]!==pawnArr[0] && bishopArr[0]<=8){
    //         bishopArr[0]++;
    //         count++;
    //     }
    // }else{
    //     while(bishopArr[0]!==pawnArr[0] && bishopArr[0]>=1){
    //         bishopArr[0]--;
    //         count++;
    //     }
    
    // }

    // if(bishopArr[1]<pawnArr[1]){
    //     let localCount=0;
    //     while(bishopArr[1]!==pawnArr[1] && localCount<=count){
    //         localCount++;
    //         bishopArr[1]++;
    //     }
    // }
    // else{
    //     let localCount=count;
    //     while(bishopArr[1]>=1&&localCount<=count&&localCount>0){
    //         bishopArr[1]--;
    //         localCount--;
    //     }
    // }
    // return bishopArr[0] ===pawnArr[0] && bishopArr[1] ===pawnArr[1];

    if(bishopArr[0]+bishopArr[1]===pawnArr[0]+pawnArr[1]||bishopArr[0]+pawnArr[1]===bishopArr[1]+pawnArr[0]){
        return true;
    }
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));