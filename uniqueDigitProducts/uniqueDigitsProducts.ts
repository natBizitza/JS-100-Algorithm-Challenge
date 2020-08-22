function uniqueDigitProducts(a: number[]): number {
    let res = [];
    let set = new Set();

    for(let i = 0;i < a.length; i++){
        let numArr = a[i].toString().split('').map(Number);
        if(numArr.length ===1){
            res.push(numArr[0]);
        }else{
            res.push(numArr.reduce((a,b)=>a*b,1))
        }
    }
    set = new Set([...res]);
    return set.size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));