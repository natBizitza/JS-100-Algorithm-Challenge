function switchLights(a: number[]): number[] {

    for(let i = 0; i < a.length;i ++){
        if(a[i]===1){
            a[i]=0;

            if(i!==0){
                for(let j =0; j< i;j++){
                    a[j]===1?a[j]=0:a[j]=1;
                }
            }
        }
    }
    return a;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));