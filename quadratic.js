a=[];
for(i=0;i<=2;i++){
    a[i]=parseInt(prompt());
}
function quadratic(){
    if(a[0]==0){
        console.log("Not a quadratic eqn.");
    }
    else{
        b=a[1]*a[1]-4*a[0]*a[2];
        d=2*a[0]
        arr=[];
        if(b>=0){
            r1=-(Math.sqrt(b)+a[1])/d;
            r2=(Math.sqrt(b)-a[1])/d;
            arr.push(r1);
            arr.push(r2);
            return arr;
        }
        else{
            console.log("No real roots");
        }
    }
}
console.log(quadratic(a));