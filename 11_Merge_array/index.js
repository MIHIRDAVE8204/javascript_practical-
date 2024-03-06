 array1 = [1,2,3,4,5,6,7]
 array2 = [6,7,8,9,10]

 array3 = [...array1,...array2]
 
 let c = array3.sort(function(a,b){
    return a-b;
})


A = new Set(c)
console.log(A)