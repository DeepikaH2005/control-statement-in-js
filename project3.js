let m = prompt("Enter the first number:");
let n = prompt("Enter the seconf number:");
let i;  
let product=1;
if(m>=n){
    alert("1")
}
else{
  
    for(i=m;i<=n;i++){
        if(i%2!=0){
            product*=i
        }

    }
    alert(product)


}