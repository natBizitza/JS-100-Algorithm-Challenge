function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

   let  yourStrongestArm: number = 0;
   let  yourWeakestsArm: number = 0;
   let  friendsStrongestArm: number = 0;
   let  freindsWeakestArm: number = 0;

   if(yourLeft >= yourRight)
   {
        yourStrongestArm = yourLeft;
        yourWeakestsArm = yourRight;
   }
   else 
   {
        yourStrongestArm = yourRight;
        yourWeakestsArm = yourLeft;
   }

   if(friendsLeft >= friendsRight)
   {
        friendsStrongestArm = friendsLeft;
        freindsWeakestArm = friendsRight;
   }
   else 
   {
       freindsWeakestArm = friendsLeft;
       friendsStrongestArm = friendsRight;
   }

   if(friendsStrongestArm == yourStrongestArm && freindsWeakestArm == yourWeakestsArm)
   {
       return true;
   }
   else
   {
       return false;
   }

1
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
