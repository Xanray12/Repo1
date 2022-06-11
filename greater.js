a=parseInt(prompt());
b=parseInt(prompt());
function isGreater(){
    while(a>0 && b>0){
        if(a>b){
            return a+"is greater";
        }
        else if(a==b){
            return " equal ";
        }
        else{
            return b+"is greater";
        }
    }
    while(a<0 && b<0){
        if(Math.abs(a)>Math.abs(b)){
            return b+"is greater";
        }
        else if(Math.abs(a)==Math.abs(b)){
            return " equal ";
        }
        else{
            return a+"is greater";
        }
    }
    while(a<0){
        if(b>0){
            return b+" is greater";
        }
    }
    while(b<0){
        if(a>0){
            return a+" is greater";
        }
    }
}
console.log(isGreater());