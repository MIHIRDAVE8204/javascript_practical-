function fibbonacci(){
    let num = document.getElementById('First').value 
    let x = 0, y =1, z

    for(let i=0; i<=num; i++)
    {
    console.log(z)
    document.getElementById('result').innerHTML = z 
    z = x + y
    x = y
    y = z
    }
}