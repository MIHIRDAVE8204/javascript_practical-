function AddTransaction(){
    let YourBalance = document.getElementById('balance').value
    let Income = document.getElementById('money-plus').value 
    let expense = document.getElementById('money-minus').value
    let Text = document.getElementById('description').value
    let amount = document.getElementById('amount').value


    // expense & income

    let type = " ";
    if(amount>=0){
        type='i'
    }else{
        type='e'
    }


    let transaction = JSON.parse(sessionStorage.getItem("items")) 
        if(transaction == null){
            transaction = []
        }
    transaction.push(
        {
            transaction:Text,amount:amount,type:type
        }
    );
    sessionStorage.setItem("items", JSON.stringify(transaction));
        console.log(JSON.parse(sessionStorage.getItem("items")))

        let sum = 0 
        transaction.forEach(x=> {
            sum += parseInt( x.amount
                )
                });
        document.getElementById('balance').innerHTML = sum
                let history = document.createElement("li")

                let hist = document.createElement("li")
                let data = document.createTextNode(Text + " " + amount);
                hist.appendChild(data)
                document.getElementById("mylist").appendChild(hist);



                let money_plus = 0;
                let money_minus = 0;
                transaction.forEach((x) => {
                    if(x.type === "i"){
                        money_plus += parseInt(x.amount);
                    }
                    else{
                        money_minus += parseInt(x.amount);
                    }
                });
                document.getElementById("money-plus").innerHTML = money_plus;
                document.getElementById("money-minus").innerHTML = money_minus;
};
