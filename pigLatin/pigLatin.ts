function pigLatin(str: string): string {
    let arr: string[] = str.split('');
    let vowels = ['a', 'e', 'i', 'o','u'];
    // let vowelRegex = /[aeiou]/
    let suffix = '';

    // if(vowelRegex.test(str[0])){
    //     return `${str}way`;
    // }

    if(vowels.includes(arr[0])){
        return str.concat('way');
    }else{
        while(!vowels.includes(arr[0])){
            suffix+=(`${arr[0]}`)
            arr.shift();
        }
        return arr.join('').concat(`${suffix}ay`);
    }

}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
