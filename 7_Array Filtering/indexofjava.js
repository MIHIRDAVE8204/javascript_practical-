// let array1 = [];
// function arraayfilter(){
//     let array2 = document.getElementById('num').value
//     array1.push(array2)
    
// }

function even(){
    let number = document.getElementById("num").value
    if(number%2 ==0){
        document.getElementById('show').innerHTML = number + "even number"
    }else{
        document.getElementById('show').innerHTML = number + "odd number"
    }
}
