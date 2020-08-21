function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let res: number[] = [];

    for(let i = 0; i < ratings.length; i++){
        let avg = ratings[i].reduce((a,b)=> (a+b))/ratings[i].length;
        if(avg<threshold){
            res.push(i)
        }
    }
    return res;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));