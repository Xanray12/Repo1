function power(){
    const a=parseInt(prompt());
    c=[];
    function base(){
    for (let i = 1; i  <= a; i++) {
 
        if (a % i == 0) {
            c.push(i);
        }
    }
    return c[1];
    }
    n=parseInt(Math.log(a)/Math.log(base(a)));
    b=[];
    for(i=0;i<a;i++){
        for(j=0;j<a;j++){
            if(Math.pow(i,n)+Math.pow(j,n)==a){
                b.push(i,j);
            }
        }
    }
    if(0 in b){
        return n+"th power of"+c[1];
    }
}
console.log(power());
