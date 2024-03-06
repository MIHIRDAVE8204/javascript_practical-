let num1 = [10,20,30,40,50,60,70,80,90,100]
let num2 = [5,10,15,20,25,30,90,95,100]

function array(num1,num2){
    let num3 = []
    for(let i=0;i<=num1.length;i++){
        for(let j=0;j<num2.length;j++){
            if(num1[i] == num2[j]){
                num3.push(num1[i])
            }
        }
    }
    return num3;

}
console.log('obtained =')
console.log(array(num1,num2));
