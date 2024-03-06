let array1 = [];
function largesmall(){
    let array2 = document.getElementById('num').value
    array1.push(array2)
    let newarr = array1.sort()
    let newnumber = array1.sort(function(a,b){
        return a-b;
    })
    let smallest = newnumber[0],
    largest = newnumber[newnumber.length-1]
    console.log(smallest)
    console.log(largest)
}