function addBorder(picture: string[]): string[] {
    let length = picture[0].length+2;
    let topBtm = ('*').repeat(length)

    for(let i =0; i< picture.length; i++){
        console.log(picture[i])
        picture[i] = `*${picture[i]}*`
    }

    picture.unshift(topBtm);
    picture.push(topBtm);
    return picture;
}

console.log(addBorder(["abc", "ded"]));  
