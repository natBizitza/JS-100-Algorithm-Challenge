function reflectString(inputString: string): string {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let inputArr = inputString.split('');
    let length = abc.length-1;
    for(let i = 0; i < inputArr.length; i++){
      let indexCurr = abc.indexOf(inputArr[i]);
      let newChar = abc[length-indexCurr];
      inputArr.splice(i,1,newChar);
    }
    return inputArr.join('');
}

console.log(reflectString("name"));
