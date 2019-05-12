function addBorder(picture: string[]): string[] {

    picture[0] = "*abc*";
    picture[1] = "*ded*";


   /*  picture.forEach(element => {    
       // element = "*" + element + "*";    
              
    }); */

    picture.unshift("*****");
    picture.push("*****"); 
    return picture.join('\,\n');
}

console.log(addBorder(["abc", "ded"]));  