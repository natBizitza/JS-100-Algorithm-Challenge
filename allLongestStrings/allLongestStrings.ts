function allLongestStrings(inputArray: string[]): string[] {

    let longestString = 0;

    let longestStringsArray: string [] = new Array();

    inputArray.forEach(element => {
        longestString = longestString > element.length ? longestString : element.length;
    });

    inputArray.forEach(element => {
        if(element.length === longestString)
        {
            longestStringsArray.push(element);
        }
    });

   return longestStringsArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));