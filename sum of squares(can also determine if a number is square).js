a=parseInt(prompt());
b=[];
function square(){
    for(i=0;i<a;i++){
        for(j=0;j<a;j++){
            if (i*i+j*j==a){
                if(i<=j){
                b.push(i,j);
                }
                
            }
            
        }
    }
    if(0 in b){
        return "the number is a square";
    }
    return b;
}
console.log(square());