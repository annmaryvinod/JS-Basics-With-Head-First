# JS-Basics-With-Head-First
Learning JS with Head First!



1.  Variables are used to store values.
       * What do they store?
          1. Numerical values
          2. Strings
          3. Booleans{Booleans are not expressed within quotes!}

       * Declaration:
           <!-- Semicolon is important at the end of a statement! -->
         1.  var variable name = value;
             eg; var myAge = 20;
                var myName = "Ann";
                var isEligible = true;

          2. You can create a variable and assign value later on:
                eg; var myPlace;       
    <!-- Just avoid the = and the value -->

    * Rules for creating Variables!
    1. Start your variables with a letter, an underscore or a dollar sign.{But not with a number!}
    2. After that, use as many letters, numeric digits,underscores or dollar signs as you like.

2. Keywords
        A keyword is a reserved word in JavaScript. JavaScript uses these reserved
        words for its own purposes, and it would be confusing to you and the browser if you started using them for your variables.

3. Naming Tips:
         1. Use camel case,in which you capitalize the first letter of each word (other than the first):
         eg: twoHeadedDragonWithFire.
         2. Never use space in the name!
         3. Do not use signs other than $ and _

<!-- NOTES -->

NOTE 1 ; JavaScript, unlike HTML markup, is case sensitive, meaning upper- and lowercase matters. The variable "counter" is different from the variable "Counter". 

NOTE 2; Did you notice that the "=" operator is used in assignments,while the" ==" operator tests for equality? That is, we use one equal sign to assign values to variables. We use two equal signs to test if two values are equal to each other. Substituting one for the other is a common coding mistake.
=== stands for exactly equal to.

4. WHILE loop
    
    1. A while statement starts with the keyword while.
    2. While uses a boolean expression that we call a conditional test, or conditional for short.
    3. If the conditional is true, everything in the code block is executed.
    4. What’s a code block? Everything between the curly braces; that is, between { }
    5. And, if our conditional is true, then, after we execute the code block, we
    loop back around and do it all again. If the conditional is false, we’re done.

5. Ways of Commmunication and their uses:
         
         1. document.write : I can insert a little HTML
                            and text into a document.
                            I’m not the most elegant
                            way to get a message to
                            your users, but I work on
                            every browser.

         2. console.log   : I’m just here for simple
                            debugging purposes. Use
                            me and I can write out
                            information to a special
                            developer’s console.   

         3. alert         :  I’ll stop your user in his
                             tracks and deliver a short
                             message. The user has
                             to click on “ok” to go
                             further.   

          4. document object model : Using me you can totally
                                     control a web page: get
                                    values that a user typed in,
                                    alter the HTML or the style,
                                    or update the content of
                                    your page.


6. prompt function 
         
         The browser provides a built-in function you can use to get input from the user, named prompt. The prompt function is a lot like the alert function - prompt causes a dialog to be displayed with a string that you provide,  just like alert—but it also provides the user with a place to 
         type a response. That response, in the form of a string, is then returned as a result of calling the function. Now, if the user cancels the dialog or doesn’t enter anything, then null is returned instead.    


         eg ;  
         
         var guess;
         
         guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); 

    <!-- prompt is followed by  a string that appears as an instruction !-->

7. Math.random function ;
     * Math.random is part of standard JavaScript and returns a random number.
     *  The only problem is it returns numbers like 0.128, 0.830, 0.9, 0.42.
        These numbers are between 0 and 1 (not including exactly 1).  
                                  <!-- NOTE THE POINT : it does not include 1.
                                        If you want a number between 0-4 just multiply the Math.random func with 5
                                         If you want to return an integer just nest the Math.random func inside a Math.floor func!
                                                          Eg; Math.floor(Math.random() * 5)-->





8. Functions

     * Help us reuse a bit of a code over and over in case we need it.
     * Syntax:
            1. The function keyword begins a function definition.
            2. Next we give the function a name.
            3. Then we have the parameters of the function. We put these in parentheses after the function name.
            4. Then we have the body of the function within {}.

            eg ; "function bark(name, weight) {}"
            
        <!--Here name and weight are the parameters! -->

    * The browser executes the code within the function only when it is called!
                  <!-- How To Call a Function ? -->
                   * To call, or invoke, a function, just use its name, followed by an open parenthesis,then any values you need to pass it,
                   separated by commas, and finally a closing parenthesis. The values in the parentheses are arguments. 


                   * When we call the function,the arguments are assigned to the parameter names.

                   * After you call the function, the body of the function does all the work.

    * You can pass pretty much any JavaScript value as an argument, like a string, a boolean, or a number.
              <!-- Eg; saveMyProfile("krissy", 1991, 3.81, false); -->

        <!-- Remember : So you’ll only define your parameters once, but you’ll probably call your function with many different arguments.-->

     "console.log"  and "alert" are built in functions. 
         So all the string arguments to alert and console.log are also arguments!

    * JavaScript passes arguments to a function using pass-by-value.   
      <!-- For a clear idea visit page no. 92 or pdf page no.132 of HeadFirst JS1 -->
          
           Eg; 
                 1. Let’s declare a variable age, and initialize it to the value 7. 
                      var age = 7;

                 2. Now let’s declare a function addOne, with a parameter named x, that adds 1 to the value of x.
                    
                     function addOne(x) {
                         x = x + 1;}
                 3. Now let’s call the function addOne, pass it the variable age as the argument. The value in age is copied into the parameter x.

                      addOne(age);

                 4. Now the value of x is incremented by one. But remember x is a copy, so only x is incremented, not age.   

                       function addOne(x) {
                           x = x + 1;}

         * The real impact of pass-by-value is that any changes to a parameter’s value within the function will affect only the parameter, not the original variable passed to the function.
            Because of pass-by-value, whatever happens to a parameter in the function, stays in the function.

9. Return
      * The return statement ends function execution and specifies a value to be returned to the function caller.
      * The expression whose value is to be returned. If omitted, undefined is returned instead.
      * A function immediately stops at the point where return is called.

                             Q: What does a function return if it doesn’t have a return statement?

                              A: A function without a return statement returns undefined.
10. Global and local variables

      * Global variables; they’re accessible everywhere in your JavaScript code.
    
      *  Local variables are defined within a function. They are know locally within the function. They are not used outside the function in the code.

      * If a variable is declared outside a function, it’s GLOBAL. If it’s declared inside a function, it’s LOCAL.

          * Globals live as long as the page. A global variable begins life when its JavaScript is loaded into the page. But, your global variable’s life ends when the page goes away. Even if you reload the same page, all your global variables are destroyed and then recreated in the newly loaded page.

          * Local variables typically disappear when your function ends. Local variables are created when your function is first called and live until the function returns (with a value or not).

          * Don’t forget to declare your locals!
                              If you use a variable without declaring it first, that variable will be global. That means that even if you use a variable for the first time inside a function
                              (because you meant for it to be local), the variable will actually be global, and be available outside the function too (which might cause confusion later). So, don’t forget to declare your locals!

                <!-- DECLARE MEANS TO USE THE var KEYWORD! -->
                                         

                                         function playTurn(player, location) {
                                             points = 0;
                                             if (location == 1) {
                                                 points = points + 100;
                                                 }
                                                 return points;
                                                 }
            <!-- Here points is a global variable though it is inside a function. It can be used outside this function also.
                  REASON : points is not declared within the function as "var points;" -->



          * What happens when I name a local variable the same thing as an existing global variable?  
                   
                   1. You “shadow” your global.
                   2. Any references to the variable within the function refer to the local variable and not the global.
                   3. So we say the global variable is in the shadow of the local variable (in other words we can’t see the global variable because the local version is in our way).



<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                                                                Webville Guide to Code Hygiene



1. Global variables, right at the TOP!

2. Functions like to sit together.

3. Let your local variables be declared at the TOP of the function they’re in.
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

10. Arrays:

    1. An array is a JavaScript type that can hold many values.
    2.   How to create an array :
        * EG:
              var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];

              * To begin the array,use the "[" character...
              * And then list each item of the array...
              * Notice that each item in the array is separated by a comma.
              * ... and end the array with the "]" character. 

    3. When you create an array, each item is placed at a location, or index, in the array.
    4. The first item has an index of 0 and next 1 etc.
    5. The array is assigned to a variable.
    6. How to access an array item :   To access an item just follow the array variable name with an index, surrounded by square brackets. 
    7. Updating a value in the array : 
                        Eg;        flavors[3] = "vanilla chocolate chip";
    
    8. How big is that array anyway? : 
        * Here we use the length property : Eg ; "var numFlavors = flavors.length;"
             <!-- This gives us the lenght i.e the number of items present!-->

        * Notice that because we start numbering the indices of the array at 0, the length of the array will always be one more than the last index.


   9. How to find or get the last item of an array?
         
         * Eg ;  var products = ["Choo Choo Chocolate", "Icy Mint",  "Cake Batter", "Bubblegum"];
         <!-- To find the last item follow : -->
               var last = products.length - 1;
               var recent = products[last];
        <!-- var last gives a number that is 1 less than the array length = index of the last item -->
        <!-- var recent gives the last item itself! -->

11. FOR loop
       *  A for loop starts with the keyword for.
       * In the parentheses, there are three parts. The first part is the loop
       variable INITIALIZATION.This initialization happens only once, before the for loop starts.   
       * The second part is the CONDITIONAL test. Each time we loop, we perform this test, and if it is false, we stop.
       * And the third part is where we INCREMENT the counter. This happens once per loop, after all the statements in the BODY.

12. Methods of creating an array:
      * Create a variable and assign it an array to which you literally type the items.
      * Create an empty array and then add items by using the index.
            Eg ; var empty = [];
                 empty [0] = 23455;
                 empty [1] = 87837786;
                 empty [2] = "cat";

      * Create an empty array and use "push" 

           Eg; var myArray = [];
                myArray.push = 243524;
                myArray.push ="doggy";
                myArray.push =565655;

   <!-- Here the array looks like :
              myArray = [243524 , "doggy" , 565655] 
              It follows the order as index!-->

       * Using the "new Array"

         1. Eg ;   var myarray = new Array(3);
            * This creates a new array, with three empty spots in it (that is, an array with length 3, but no values yet). Then you can fill them, just like you normally would,
            by providing values for myarray at indices 0, 1, and 2. Until you add values yourself, the values in myarray are undefined.

            * Notice here "new" is lowercase while "Array" is capitalised in the syntax.

13. Objects in javascript
     * How to create an object in javascript?
         1. Add a variable declaration for the object.
         2. Next, start an object with a left curly brace.
         3. Then all the object’s properties go inside.Each property has a name, a colon and then a value. Here we have strings, numbers and one boolean as property values.
         4. Notice that each property is separated by a comma. 
         5. We end the object with a closing curly brace, and just like any other variable declaration, we end this one with a semicolon.
            Eg ;   
                var chevy = {
                make: "Chevy",
                model: "Bel Air",
                year: 1957,
                color: "red",
                passengers: 2,
                convertible: false,
                mileage: 1021
                };
        6. Now you’ve got a live object complete with a set of properties. And you’ve assigned your object to a variable that you can use to access and change its properties.  

        7. Notice that if you use a string with a space in it for a property name, you need to use quotes around the name.
               Eg ; var widget = {
                    cost$: 3.14,
                    "on sale": true
                     };

        8. No two properties in an object can have the same name.
        9. Separate each property name and value pair with a comma:
        10. Don’t use a comma after the last property value. 



14. How to access a property:
 * DOT notation : start with the object name, follow it with a period (otherwise known as a “dot”) and then use the property name.
       Eg : fiat.mileage


 * Dot Notation .
     ● Dot notation (.) gives you access to an object’s properties.
     ● For example, fiat.color is a property in fiat with the name color and the value “Medium Blue”. 

15. How to change a property? 
   * assign the property to a new value
     Eg : fiat.mileage = 10000;


16. How to add new properties?
     * just specify the new property and give it a value.
     * eg; fiat.needsWashing = true;
      <!-- As long as the property doesn’t already exist in the object, it’s added to the object. Otherwise, the property with this name is updated. -->

17.  How to compute with properties?
   * You can use an object’s property just like you use a variable, except you need to use dot notation to access the property in the object.
   *  Eg ;    if (fiat.year < 1965) {
               classic = true;
               }
               for (var i = 0; i < fiat.passengers; i++) {
                   addPersonToCar(); 
                   }

18. How to delete a property?
    * Use the keyword delete :  'delete fido.dogYears;'
    * When you delete a property, you’re not just deleting the value of the property, you’re deleting the property itself. And, if you try to use fido.dogYears after
    deleting it, it will evaluate to undefined.The delete expression returns true if the property was deleted successfully. delete will return false only if it can’t delete
    a property (which could happen for, say, a protected object that belongs to the browser). It will return true even if the property you’re trying to delete doesn’t exist in the object.

19. An important note:
   * Variables don’t actually hold objects.
   * Instead they hold a reference to an object.
   * The reference is like a pointer or an address to the actual object.
   * In other words, a variable doesn’t hold the object itself, but it holds something like a pointer. And, in JavaScript we don’t really know what is inside a
   reference variable. We do know that whatever it is, it points to our object.
    * When we use dot notation, the JavaScript interpreter takes care of using the reference to get the object and then accesses its properties for us.

20. NOTE ;if you change a property of the object in a function, you’re changing the property in the original object. So any changes you make to the object inside a function 
will still be there when the function completes.

21. How to add behavior to your objects :

    1.    * Eg ;
        var fiat = {
 make: "Fiat",
 model: "500",
 year: 1957,
 color: "Medium Blue",
 passengers: 2,
 convertible: false,
 mileage: 88000,
 drive: function() {
 alert("Zoom zoom!");
 }
};
 
 * <!-- Here, the property "drive" is a method(function on an object). -->
 * <!-- The function is not given a name in it's declartion because the name of the property is the name of the function i.e the name of the function here is "drive" itself. -->

    2. How to call this method?
      * syntax : objectname.methodname();
      * Eg ; fiat.drive();

    3. NOTE: You can pass arguments to methods, just like you can to regular functions.
    4. An object has both state and behavior. State can affect behavior, and behavior can affect state.

 

22. THIS keyword
    * You can think of this like a variable that is assigned to the object whose method was just called.
    * The real key to understanding this is that whenever a method is called, in the body of that method you can count on this to be assigned to the object whose method was called.

23. Visit pdf page number 249 to learn about all the properties in object and to access any method or property. 

      * How to get the properties of an object?
          1. Use : for in

             * Eg ;
                        var fiat = {
                        make: "Fiat",
                        model: "500",
                        year: 1957,
                        color: "Medium Blue",
                        passengers: 2,
                        convertible: false,
                        mileage: 88000,
                        drive: function() {
                        alert("Zoom zoom!");
                      }
                };

    * To access all the properties ;
         1. for (var prop in fiat){
           console.log(prop + ":" + fiat[prop]);
        }

         2. You may use any name for the variable instead of prop.
                 
24. Read in detail about DOM on chapter 6.
25. .getElementById gets the element only not the content inside the element.
    Use the .getElementById within a variable so that it is easier to call it later in the JS code.
26. .innerHTML can be used to read, change the content etc.
27. .getElementById and .innerHTML are methods of the "document" object.

28. Read through and test the DOM folder completely.

29. .setAttribute can be used to set or change or add a new attribute like a class, id etc to an object element.

    *  syntax EG ; planet.setAttribute("class", "redtext");

      1. We take our element object.

      2. And we use its setAttribute method to either add a new attribute or change an existing attribute.
      
      3. The method takes two arguments, the name of the attribute you want to set or change and the value you'd like to set that attribute to.
      {Here the method is .setAttribute and "class" and "redtext" are arguments.}

       4. Note if the attribute doesn’t exist a new one will be created in the element.

       5. setAttribute does not require an = 




 
     










  











 




 

    







     







      
                             






















 

   



                







          




      
 
 
 
 




 

















                
 
  




     

  









            



 

 
 



















      




