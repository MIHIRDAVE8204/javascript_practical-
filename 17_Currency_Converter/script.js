function convertCurrency() {
    
    var amountFrom = document.getElementById('amountFrom').value;
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;

    
    var convertedAmount = amountFrom * (toCurrency / fromCurrency);

    
    document.getElementById('amountTo').value = convertedAmount.toFixed(2);
}