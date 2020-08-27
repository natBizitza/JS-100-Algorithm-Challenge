function centuryFromYear(year: number): number {
    // if(year <= 1000){
    //     if(year%100 ===0){
    //         return Math.floor(year/100);
    //     }
    //     else{
    //         return Math.floor(year/100)+1;
    //     }
    // }
    // else if(year > 1000){
    //     if(year%100 ===0){
    //         return Math.floor(year/100);
    //     }
    //     else{
    //         return Math.floor(year/100)+1;
    //     }
    // }
    const century = year/100;

    if(year%100 === 0){
        return century;
    }

    return Math.floor(century+1);
}

console.log(centuryFromYear(409));
console.log(centuryFromYear(1700));