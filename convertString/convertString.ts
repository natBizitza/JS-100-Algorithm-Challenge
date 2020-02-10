function convertString(s: string, t: string): boolean {

    let newS: string [] = s.split("");
    let newT: string [] = t.split("");
    let result: string [] = [];
    console.log(newS);
    console.log(newT);

//    for(let i = 0; i < newT.length; i++)
//    {
//        for(let a = 0; a < newS.length; a++)
//        {
//         newT[i] === newS[a]? result.push(newS[a]): ''
//        }
      
//    }

   newT.forEach(elementT => {
       if(newS.find(elementS => elementS===elementT) && result.indexOf(elementT) === -1)
       {

        result.push(elementT);
        console.log(result);
       }
   });

   console.log(result.join(""));
   console.log(t);


   if(result.join("") === t)
   {
       return true;
   }
   else{
    return false;
   }
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
