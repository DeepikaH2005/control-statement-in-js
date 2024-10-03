let choice = parseInt(prompt("Enter your choice:"));
let quantity = parseInt(prompt("Enter your quantity:"));
let n = 0;
switch(choice){
    case 1:
        
        n = 200*quantity;
        break;
    case 2:
        
        n = 300*quantity
        break;
    case 3:
        
        n = 250*quantity
        break;
    case 4:
        
        n = 100*quantity
        break;
    case 5:
        
        n = 80*quantity
        break;
    default:
        prompt("Enter the correct value");
        break;
}
    let discount=0;
    if(n>=500){
        discount = n*0.5;
        n=n-discount;
        alert(n);


    }
    else{
        alert(n)
    }

                                

