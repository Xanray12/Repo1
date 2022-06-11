a=parseInt(prompt("Enter first no:"));
b=parseInt(prompt("Enter second no:"));
c=parseInt(prompt("Enter third no:"));
if (a>b && b>c){
console.log("Decreasing order");
}
else if(c>b && b>a){
    console.log("Increasing order");
}
else{
    console.log("No order");
}