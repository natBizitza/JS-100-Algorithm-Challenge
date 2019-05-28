function alphabeticShift(inputString: string): string {


    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';

    let alphabet: string [] = alphabetString.split("");

    let letters: string [] = inputString.split("");

    let resultarray: string [] = new Array();

    let b;

    for(let i = 0; i <= letters.length -1; i ++)
    {

        let a = alphabet.indexOf(letters[i])+1;
        console.log(a)

        if(a == 26)
        {
            a = 0
        }
         b = alphabet[a]
        console.log(b)

        resultarray.push(b);

       
    
    }

    let g = resultarray.join("");
    return g;

}

console.log(alphabeticShift('crazy'));