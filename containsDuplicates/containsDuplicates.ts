function containsDuplicates(a: number[]): boolean {
    let set = new Set(a);
    
    return set.size !== a.length;
    //return !(new Set(a).size === a.length);
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
