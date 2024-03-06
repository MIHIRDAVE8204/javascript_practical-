let user = [];
function Numbersort(){
 let Name = document.getElementById('bharat').value;
    user.push(Name);
    let newarray = user.sort(); 
    document.getElementById('india').innerHTML = JSON.stringify(newarray);
}

