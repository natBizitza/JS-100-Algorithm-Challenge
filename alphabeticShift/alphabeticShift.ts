function alphabeticShift(inputString: string): string {


    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let alphabetArray: string [] = alphabet.split("");

    let separateLettersArray: string [] = inputString.split("");

    let resultarray: string [] = new Array();

    let letter;

    for(let i = 0; i <= separateLettersArray.length -1; i ++)
    {

        let a = alphabetArray.indexOf(separateLettersArray[i])+1;

        if(a == 26)
        {
            a = 0
        }
        letter = alphabetArray[a]
        console.log(letter)

        resultarray.push(letter);

       
    
    }

    let finalWord = resultarray.join("");
    return finalWord;

}

console.log(alphabeticShift('crazy'));