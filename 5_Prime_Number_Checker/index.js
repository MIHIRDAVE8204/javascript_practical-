function primenum(){
    let isprime = true;
    let num = document.getElementById("value").value

    for (let i = 2; i < num; i++)
     {
        if (num % i == 0) 
        {
            isprime = false;
            break;
        }
    }
    if (isprime){
        console.log("its prime")
        document.getElementById('result').innerHTML = "prime number"
    }
    
    else {
        console.log("it is not prime")
        document.getElementById('result').innerHTML = "it is not prime number"

    }


}