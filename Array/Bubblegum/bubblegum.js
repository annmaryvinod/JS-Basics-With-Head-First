






var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];

var hasBubbleGum = [false, false, false, true];
// Using WHILE loop 

var i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i++;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Same using the FOR loop



/*for (var i = 0; i < hasBubbleGum.length; i = i + 1) {
     if (hasBubbleGum[i]) {
            console.log(products[i] + " contains bubble gum");
           }
    }*/







    /* Note ; The third part of "for" loop is considered after
     executing the body. So the increment works within the for loop 
     but not within the while loop! */