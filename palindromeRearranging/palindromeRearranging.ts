function palindromeRearranging(inputString: string): boolean {
    let arr = inputString.split('');
    let word1 = arr.filter((item,i)=> arr.indexOf(item)!==i);

    return word1.length ===arr.length/2;
}

console.log(palindromeRearranging('aabb'));