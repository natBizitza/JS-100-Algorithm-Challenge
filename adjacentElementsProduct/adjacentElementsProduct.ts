function adjacentElementsProduct(inputArray: number[]): number {

    let product: number [] = new Array();

    for( let i=0; i < inputArray.length - 1; i ++)
    {     
            product.push(inputArray[i]*inputArray[i+1]);                  
    }
    return Math.max(...product);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
