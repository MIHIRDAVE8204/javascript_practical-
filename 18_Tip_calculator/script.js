function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for bill amount and tip percentage.");
        return;
    }
    let a = document.getElementById("tbl").style.border = "5"

    let tipAmount = (billAmount * tipPercentage) / 100;
    let tax = (billAmount * 18) / 100
    let totalAmount = billAmount + tipAmount + tax;


    document.getElementById("tip").innerHTML = "Tip amount : ₹" + tipAmount.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax amount ₹" + tax.toFixed(2);
    document.getElementById("totalAmount").innerHTML = "Final toatal bill (including tax and tip) ₹" + totalAmount.toFixed(2);
}