let array = ['1','2','3','4','5'];
// document.getElementById('one').innerHTML = JSON.stringify(array)
console.log(array)

function find(){
    let num = document.getElementById('input').value 
    let print = array.indexOf(num)
    document.getElementById('print').innerHTML = print
    console.log(print)
}
