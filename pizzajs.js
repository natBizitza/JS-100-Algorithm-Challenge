var x = [2, 5, 6, 8];
var sums = [];
var sets = [];

function SubSets(read, queued){
 if( read.length == 4 || (read.length <= 4 && queued.length == 0) ){
  if( read.length > 0 ){
   var total = read.reduce(function(a,b){return a+b;},0);
   if(sums.indexOf(total)==-1){
    sums.push(total);
    sets.push(read.slice().sort());
   }
  }
 }else{
  SubSets(read.concat(queued[0]),queued.slice(1));
  SubSets(read,queued.slice(1));
 }
}
SubSets([],x);
console.log(sums.sort(function(a,b){return a-b;}));
//log sums without sort to have them line up to sets or modify previous structure
console.log(sets);