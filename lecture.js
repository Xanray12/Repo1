b=parseInt(prompt("Total lectures:"));
d=parseInt(prompt("lectures attended:"));
function min_class(){
    c=Math.ceil(b*0.75);
    if(d>=c){
        return "Not needed";

    }
    else{

        return c-d;
    }
}
console.log(min_class(b,d));
