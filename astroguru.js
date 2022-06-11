function astroguru(){
    const job=prompt("job");
    const location=prompt("location");   
    const partner=prompt("spouse name");
    const numkids=parseInt(prompt("number of children"));
    return "You will be a "+job+" in "+location+" and married to "+partner+" with "+numkids+"kids";
}
console.log(astroguru());