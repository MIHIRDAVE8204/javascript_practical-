let test = [1,2,5,4,8,9,4,77,6,77,48,98,554,67,55]
let newarray = [... new Set(test)];
newarray.sort()

console.log(test)
console.log(newarray)