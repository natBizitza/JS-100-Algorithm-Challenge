function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

   let  yourStrongestArm = yourLeft >= yourRight ? yourLeft : yourRight;
   let  yourWeakestsArm = yourRight >= yourLeft ? yourLeft : yourRight;
   let  friendsStrongestArm = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
   let  freindsWeakestArm = friendsRight >= friendsLeft ? friendsLeft : friendsRight;

   return friendsStrongestArm === yourStrongestArm && freindsWeakestArm === yourWeakestsArm;


}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
