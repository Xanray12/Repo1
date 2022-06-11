function isPerfectSquare(n)
{
    for (let i = 1; i * i <= n; i++) {
 
        if ((n % i == 0) && (Math.floor(n / i) == i)) {
            return true;
        }
    }
    return false;
}
const a=parseInt("Enter the number:");
if (isPerfectSquare(a)){
    document.write("Yes");
}

else{
document.write("No");}