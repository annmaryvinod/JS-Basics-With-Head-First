//  Creating a function

function bark(name,weight){
    if (weight > 20){
        console.log(name + " says Woof WOOF!");
    } else{
        console.log(name + " says woof woof!");
    }
}





// -------------------------------------


function message (term,person){
    if (term > 0){
        alert("I love " + term + " " + person);
    }
    else {
        alert ("No way " + person);
    }
};

message(2,'Suma');
message(-2,"Aniv");


// Calling a function

bark('Roger',12);
bark('Dick',32);
bark('Fred',2);
bark('Snoof',45);




//  Just a Message!

document.write("Check Console!");