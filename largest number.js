a=[];
size=prompt("Enter no of numbers to compare");
for (i=0;i<size;i++){
    a[i]=parseInt(prompt());
}
function islargest(){
    largest=0;
    for (i=0;i<=a.length;i++){
        if (a[i]>=largest){
            largest=a[i];
        }
    }
    return largest;
}
console.log(islargest(a));