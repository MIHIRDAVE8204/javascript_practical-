function palindrom(){
    let x = document.getElementById('number').value
    let y =x.split("").reverse("").join("")

    if(x == y) {
        document.getElementById('result').innerHTML = "This called palindrome"
    } else{
        document.getElementById('result').innerHTML = "This is not palindrome"
    }
}