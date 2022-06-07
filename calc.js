const operator=prompt('+,-,*,/')
const a=parseFloat(prompt());
const b=parseFloat(prompt());

if (operator=='/'){
    result= a/b;
}
else if (operator=='-'){
    result= a-b;
    }
else if (operator=='*'){
    result= a*b;
}
else{
    const sum=a+b
    result= sum;
}
window.alert(result)