function arrayPreviousLess(items: number[]): number[] {
    let res = [-1];
    for(let i=1; i<items.length;i++){
        if(items[i-1]<items[i]){
            res.push(items[i-1]);
        }else{
            res.push(-1)
        }
    }
    return res;
}


console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
