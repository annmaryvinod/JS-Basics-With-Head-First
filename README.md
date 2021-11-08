# JS-Basics-With-Head-First

Learning JS with Head First!

1.  Variables are used to store values.

    - What do they store?

      1. Numerical values
      2. Strings
      3. Booleans{Booleans are not expressed within quotes!}

    - Declaration:
      <!-- Semicolon is important at the end of a statement! --> 1. var variable name = value;

      eg; var myAge = 20;
      var myName = "Ann";
      var isEligible = true;

            2. You can create a variable and assign value later on:
                  eg; var myPlace;

      <!-- Just avoid the = and the value -->

    - Rules for creating Variables!

    1. Start your variables with a letter, an underscore or a dollar sign.{But not with a number!}
    2. After that, use as many letters, numeric digits,underscores or dollar signs as you like.

2.  Keywords
    A keyword is a reserved word in JavaScript. JavaScript uses these reserved
    words for its own purposes, and it would be confusing to you and the browser if you started using them for your variables.

3.  Naming Tips: 1. Use camel case,in which you capitalize the first letter of each word (other than the first):
    eg: twoHeadedDragonWithFire. 2. Never use space in the name! 3. Do not use signs other than $ and \_

<!-- NOTES -->

NOTE 1 ; JavaScript, unlike HTML markup, is case sensitive, meaning upper- and lowercase matters. The variable "counter" is different from the variable "Counter".

NOTE 2; Did you notice that the "=" operator is used in assignments,while the" ==" operator tests for equality? That is, we use one equal sign to assign values to variables. We use two equal signs to test if two values are equal to each other. Substituting one for the other is a common coding mistake.
=== stands for exactly equal to.

4.  WHILE loop

    1. A while statement starts with the keyword while.
    2. While uses a boolean expression that we call a conditional test, or conditional for short.
    3. If the conditional is true, everything in the code block is executed.
    4. What’s a code block? Everything between the curly braces; that is, between { }
    5. And, if our conditional is true, then, after we execute the code block, we
       loop back around and do it all again. If the conditional is false, we’re done.

5.  Ways of Commmunication and their uses:

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

6.  prompt function

         The browser provides a built-in function you can use to get input from the user, named prompt. The prompt function is a lot like the alert function - prompt causes a dialog to be displayed with a string that you provide,  just like alert—but it also provides the user with a place to
         type a response. That response, in the form of a string, is then returned as a result of calling the function. Now, if the user cancels the dialog or doesn’t enter anything, then null is returned instead.


         eg ;

         var guess;

         guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

    <!-- prompt is followed by  a string that appears as an instruction !-->

7.  Math.random function ;

    - Math.random is part of standard JavaScript and returns a random number.
    - The only problem is it returns numbers like 0.128, 0.830, 0.9, 0.42.
      These numbers are between 0 and 1 (not including exactly 1).
       <!-- NOTE THE POINT : it does not include 1.
                                      If you want a number between 0-4 just multiply the Math.random func with 5
                                       If you want to return an integer just nest the Math.random func inside a Math.floor func!
                                                        Eg; Math.floor(Math.random() * 5)-->

8.  Functions

    - Help us reuse a bit of a code over and over in case we need it.
    - Syntax: 1. The function keyword begins a function definition. 2. Next we give the function a name. 3. Then we have the parameters of the function. We put these in parentheses after the function name. 4. Then we have the body of the function within {}.

           eg ; "function bark(name, weight) {}"

       <!--Here name and weight are the parameters! -->

    - The browser executes the code within the function only when it is called!
      <!-- How To Call a Function ? --> \* To call, or invoke, a function, just use its name, followed by an open parenthesis,then any values you need to pass it,

      separated by commas, and finally a closing parenthesis. The values in the parentheses are arguments.

                   * When we call the function,the arguments are assigned to the parameter names.

                   * After you call the function, the body of the function does all the work.

    - You can pass pretty much any JavaScript value as an argument, like a string, a boolean, or a number.
      <!-- Eg; saveMyProfile("krissy", 1991, 3.81, false); -->

        <!-- Remember : So you’ll only define your parameters once, but you’ll probably call your function with many different arguments.-->

    "console.log" and "alert" are built in functions.
    So all the string arguments to alert and console.log are also arguments!

    - JavaScript passes arguments to a function using pass-by-value.
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

      - The real impact of pass-by-value is that any changes to a parameter’s value within the function will affect only the parameter, not the original variable passed to the function.
        Because of pass-by-value, whatever happens to a parameter in the function, stays in the function.

9.  Return

    - The return statement ends function execution and specifies a value to be returned to the function caller.
    - The expression whose value is to be returned. If omitted, undefined is returned instead.
    - A function immediately stops at the point where return is called.

                           Q: What does a function return if it doesn’t have a return statement?

                            A: A function without a return statement returns undefined.

10. Global and local variables

    - Global variables; they’re accessible everywhere in your JavaScript code.

    - Local variables are defined within a function. They are know locally within the function. They are not used outside the function in the code.

    - If a variable is declared outside a function, it’s GLOBAL. If it’s declared inside a function, it’s LOCAL.

      - Globals live as long as the page. A global variable begins life when its JavaScript is loaded into the page. But, your global variable’s life ends when the page goes away. Even if you reload the same page, all your global variables are destroyed and then recreated in the newly loaded page.

      - Local variables typically disappear when your function ends. Local variables are created when your function is first called and live until the function returns (with a value or not).

      - Don’t forget to declare your locals!
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

      - What happens when I name a local variable the same thing as an existing global variable? 1. You “shadow” your global. 2. Any references to the variable within the function refer to the local variable and not the global. 3. So we say the global variable is in the shadow of the local variable (in other words we can’t see the global variable because the local version is in our way).

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

                                                                Webville Guide to Code Hygiene

1.  Global variables, right at the TOP!

2.  Functions like to sit together.

3.  Let your local variables be declared at the TOP of the function they’re in.
<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

4.  Arrays:

    1.  An array is a JavaScript type that can hold many values.
    2.  How to create an array :

        - EG:
          var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];

              * To begin the array,use the "[" character...
              * And then list each item of the array...
              * Notice that each item in the array is separated by a comma.
              * ... and end the array with the "]" character.

    3.  When you create an array, each item is placed at a location, or index, in the array.
    4.  The first item has an index of 0 and next 1 etc.
    5.  The array is assigned to a variable.
    6.  How to access an array item : To access an item just follow the array variable name with an index, surrounded by square brackets.
    7.  Updating a value in the array :
        Eg; flavors[3] = "vanilla chocolate chip";

    8.  How big is that array anyway? :

        - Here we use the length property : Eg ; "var numFlavors = flavors.length;"
             <!-- This gives us the length i.e the number of items present!-->

        - Notice that because we start numbering the indices of the array at 0, the length of the array will always be one more than the last index.

5.  How to find or get the last item of an array?

    - Eg ; var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
       <!-- To find the last item follow : -->
             var last = products.length - 1;
             var recent = products[last];
      <!-- var last gives a number that is 1 less than the array length = index of the last item -->
      <!-- var recent gives the last item itself! -->

6.  FOR loop

    - A for loop starts with the keyword for.
    - In the parentheses, there are three parts. The first part is the loop
      variable INITIALIZATION.This initialization happens only once, before the for loop starts.
    - The second part is the CONDITIONAL test. Each time we loop, we perform this test, and if it is false, we stop.
    - And the third part is where we INCREMENT the counter. This happens once per loop, after all the statements in the BODY.

7.  Methods of creating an array:

    - Create a variable and assign it an array to which you literally type the items.
    - Create an empty array and then add items by using the index.
      Eg ; var empty = [];
      empty [0] = 23455;
      empty [1] = 87837786;
      empty [2] = "cat";

    - Create an empty array and use "push"

      Eg; var myArray = [];
      myArray.push(243524);
      myArray.push("doggy");
      myArray.push(565655);

   <!-- Here the array looks like :
              myArray = [243524 , "doggy" , 565655] 
              It follows the order as index!-->

       * Using the "new Array"

         1. Eg ;   var myarray = new Array(3);
            * This creates a new array, with three empty spots in it (that is, an array with length 3, but no values yet). Then you can fill them, just like you normally would,
            by providing values for myarray at indices 0, 1, and 2. Until you add values yourself, the values in myarray are undefined.

            * Notice here "new" is lowercase while "Array" is capitalised in the syntax.

13. Objects in javascript

    - How to create an object in javascript?

      1.  Add a variable declaration for the object.
      2.  Next, start an object with a left curly brace.
      3.  Then all the object’s properties go inside.Each property has a name, a colon and then a value. Here we have strings, numbers and one boolean as property values.
      4.  Notice that each property is separated by a comma.
      5.  We end the object with a closing curly brace, and just like any other variable declaration, we end this one with a semicolon.
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
      6.  Now you’ve got a live object complete with a set of properties. And you’ve assigned your object to a variable that you can use to access and change its properties.

      7.  Notice that if you use a string with a space in it for a property name, you need to use quotes around the name.
          Eg ; var widget = {
          cost$: 3.14,
          "on sale": true
          };

      8.  No two properties in an object can have the same name.
      9.  Separate each property name and value pair with a comma:
      10. Don’t use a comma after the last property value.

14. How to access a property:

- DOT notation : start with the object name, follow it with a period (otherwise known as a “dot”) and then use the property name.
  Eg : fiat.mileage

- Dot Notation .
  ● Dot notation (.) gives you access to an object’s properties.
  ● For example, fiat.color is a property in fiat with the name color and the value “Medium Blue”.

15. How to change a property?

- assign the property to a new value
  Eg : fiat.mileage = 10000;

16. How to add new properties?

    - just specify the new property and give it a value.
    - eg; fiat.needsWashing = true;
    <!-- As long as the property doesn’t already exist in the object, it’s added to the object. Otherwise, the property with this name is updated. -->

17. How to compute with properties?

- You can use an object’s property just like you use a variable, except you need to use dot notation to access the property in the object.
- Eg ; if (fiat.year < 1965) {
  classic = true;
  }
  for (var i = 0; i < fiat.passengers; i++) {
  addPersonToCar();
  }

18. How to delete a property?

    - Use the keyword delete : 'delete fido.dogYears;'
    - When you delete a property, you’re not just deleting the value of the property, you’re deleting the property itself. And, if you try to use fido.dogYears after
      deleting it, it will evaluate to undefined.The delete expression returns true if the property was deleted successfully. delete will return false only if it can’t delete
      a property (which could happen for, say, a protected object that belongs to the browser). It will return true even if the property you’re trying to delete doesn’t exist in the object.

19. An important note:

- Variables don’t actually hold objects.
- Instead they hold a reference to an object.
- The reference is like a pointer or an address to the actual object.
- In other words, a variable doesn’t hold the object itself, but it holds something like a pointer. And, in JavaScript we don’t really know what is inside a
  reference variable. We do know that whatever it is, it points to our object.
- When we use dot notation, the JavaScript interpreter takes care of using the reference to get the object and then accesses its properties for us.

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

- <!-- Here, the property "drive" is a method(function on an object). -->
- <!-- The function is not given a name in it's declartion because the name of the property is the name of the function i.e the name of the function here is "drive" itself. -->

  2. How to call this method?

  - syntax : objectname.methodname();
  - Eg ; fiat.drive();

  3. NOTE: You can pass arguments to methods, just like you can to regular functions.
  4. An object has both state and behavior. State can affect behavior, and behavior can affect state.

22. THIS keyword                                                                                                                

    - You can think of this like a variable that is assigned to the object whose method was just called.
    - The real key to understanding this is that whenever a method is called, in the body of that method you can count on this to be assigned to the object whose method was called.
    - THIS points to the OBJECT.


    <!-- check on the use of "switch" , its syntax and the use of "default" within "switch" -->

23. Visit pdf page number 249 to learn about all the properties in object and to access any method or property.

    - How to get the properties of an object?

      1. Use : for in

         - Eg ;
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

    - To access all the properties ; " for in"

      1.  for (var prop in fiat){
          console.log(prop + ":" + fiat[prop]);
          }

      2.  You may use any name for the variable instead of prop.

24. Read in detail about DOM on chapter 6.
25. .getElementById gets the element only not the content inside the element.
    Use the .getElementById within a variable so that it is easier to call it later in the JS code.
26. .innerHTML can be used to read, change the content etc. It can be used to change the tag as well as the content inside.
27. .getElementById is a method of the "document" object.

- Added

1. .innerHTML can change the content as well as the tag.
2. .textContent can change only the content not the tag.

3. Read through and test the DOM folder completely.

   - A point on DOM:

   1. in case of getElementById we get back the asked thing only.
   2. in case we use "Elements" as in getElementaByClassName etc we get back an array.

4. .setAttribute can be used to set or change or add a new attribute like a class, id etc to an object element.

   - syntax EG ; planet.setAttribute("class", "redtext");

   1. We take our element object.

   2. And we use its setAttribute method to either add a new attribute or change an existing attribute.

   3. The method takes two arguments, the name of the attribute you want to set or change and the value you'd like to set that attribute to.
      {Here the method is .setAttribute and "class" and "redtext" are arguments.}

   4. Note if the attribute doesn’t exist a new one will be created in the element.

   5. setAttribute does not require an =

5. Null and undefined :

   - null : null is intended to represent an object that isn’t there.
   - undefined : it stands for something that is not initialized yet.

6. NaN : Not a Number

- represent numeric results that, well, can’t be represented {0/0}
- NaN is not equal to NaN!

32. Test for NaN

- NaN isn’t equal to anything, not even itself, so, any kind of test for equality with NaN is off the table.
  i.e you cannot use

  > if (myNum == NaN) {
  > myNum = 0;
  > }

   <!-- THIS WOULD NOT WORK! -->

  - So we use "isNaN" to test for NaN

  - if (isNaN(myNum)) {
    myNum = 0;
    }

33. The equality operator (==);

    - How does it operate ?

      1. First it checks if both the values are of same type and then compare.

      2. If they are of different types then it converts them to same type and then compare.
         It is here we get "true' for 99 =="99".

      3. When we compare a string and a number like 99 =="Star", "Star" is converted to a number that is NaN.

         - Since NaN is not equal to anything this gives back "false".
         - Note ; An empty string like "" is converted to 0 not NaN.

      4. When we compare a number and a boolean, {true is 1 and false is 0} and the comparison proceeds.

      5. null == undefined {TRUE}

34. The Strict Equality Operator: ===

    - Two values are strictly equal only if they have the same type and the same value.

35. We use the same equality rules for comparing say, a boolean and a number with < and >, like 0 < true.

36. For comparison between strings' rules follow “Unicode” on Google.

37. Other Cases:

38. Concatenate : var addi = 3 + "4"; Gives "34'
39. Conversion happens for :

    - var multi = 3 * "4"; Gives 12(number not string)

    - var divi = 80 / "10"; Gives 8 (number not string)

    - var mini = "10" - 5; Gives 5 (number not string)

40. Conclusion : Addition results in concatenation while other three operations result in conversion to number when string and number are involved.

41. If you want to avoid concatenation bn string and number during addition use the keyword "Number" :

    - Eg ; var num = 3 + Number('5');

     <!-- Remember that the N in 'Number' is capitalised! -->

42. Difference between NaN and Infinity

- Infinity refers to an extremely large number but NaN represents a value that cannot be represented as a number.
- - Infinity represents an extremely small number.
- Infinity - 1 gives 'Infinity'.
- 0/ 0 is NaN
- 5/0 , 3/0 etc gives 'Infinity' {Just use the logic of LIMITS in maths}
- Infinity - Infinity gives 'NaN'.

39. When we deal with equality of objects == and === mean the same.

40. Truthy and Falsey in JS;

- They are the values that are not precisely true or false but can behave as true or false in a conditional.
- Five things are always falsey in JS all others except false are truthy.
- A string with atleast one space is truthy itself! ' ' .

- The 5 falsey things are :
  1. null
  2. undefined
  3. '' (empty string)
  4. 0
  5. NaN

41. UNDEFINED

- I get returned from a function when there is no return statement.

- I’m the value of a variable when I haven’t been assigned a value.

- I’m the value of an array item that doesn’t exist in a sparse array.

- I’m the value of a property that doesn’t exist.

- I’m the value of a property that’s been deleted.

42. How to check for undefined : Compare

1. Eg : var x;
   if (x == undefined) {
   <!-- x isn’t defined! just deal with it! -->
   }
1. Eg ; var customer = {
   name: "Jenny"
   };
   if (customer.phoneNumber == undefined) {
   <!-- get the customer's phone number -->

   }

1. Some common string methods :

   1. length property

      - var input = "jenny@wickedlysmart.com";
      - input.length

   2. charAt method :

      - To get the character at a particular index in the string.
      - input.charAt(i) == ....

   3. indexOf method :

      - Eg ; var phrase = "the cat in the hat";
      - var index = phrase.indexOf("cat");
      <!-- Here we get the index of "c" that is the first letter in the word "cat". -->

   4. substring method :

      - Give the substring method two indices, and it will extract and return the string contained within them.

      - Eg 1 : var data = "name|phone|address";
        var val = data.substring(5, 10);
        console.log("Substring is " + val);

        - <!-- Here we get "Substring is phone" -->
        - <!--We'd like the string from index 5 and up to (but not including) 10 returned. We get back a new string with the characters from index 5 to 10. -->

      - You can omit the second index and substring will extract a string that starts at the first index and then continues until the end of the original string.

   5. split method :

      - The split method takes a character that acts as a delimiter, and breaks the string into parts based on the delimiter.

      - Split uses the delimiter to break the original string into pieces, which are returned in an array. AN ARRAY IS RETURNED!

      - var data = "name|phone|address";
        var vals = data.split("|");
        console.log("Split array is ", vals);

        <!-- Here we get "Split array is ["name", "phone", "address"] " -->
        <!-- Look at the console argument the split array is seperated from string with a comma. Concatenation will not give us an array! -->

      - Read through pdf page number 339.

   6. See pdf pg 340.

1. Types in JS ;

   - There are two types in JS : 1. primitives and 2. objects

   - The primitives are: numbers, strings, booleans, null and undefined. Everything else is an object.

1. DOM Notes

- A property is a value that you can get or set (like changing the content of an HTML element).
- A method is an action you can do (like add or deleting an HTML element).
- For a method we fill in the arguments.
- For a property we assign the values.

- METHODS :
  1.  document.getElementById(id) : Find an element by element id
  2.  document.getElementsByTagName(name) : Find elements by tag name
  3.  document.getElementsByClassName(name) : Find elements by class name
  4.  element.setAttribute(attribute, value) : Change the attribute value of an HTML element

Refer w3schools

- PROPERTY :

  1. element.innerHTML = new html content
  2. element.attribute = new value
  3. element.style.property = new style

- Extra

  1. document.querySelectorAll("p.intro"); "This gets all <p> with the class name 'intro' as an array.

46. "switch" statements in JS can be used instead of the "if" ,"else" statements

47. Use the 'for(x of Array)' to loop through each item of an array.

Eg ; const charActors = ['Potter','Snape','McGonagall','Lupin','Sirius','Granger','Weaseley'];
for (r of charActors){
console.log(r);
}

48. Arrow Functions

- Used to represent anonymous function

- Syntax : " variable = () => "value to be returned without the return statement" "

49. Take a look at how chaining works on page 385(pdf).

<!-- ------------------------------- -->

50. Events & eventhandlers

- window.onload = "function name";
  Eg ; window.onload = pageLoadedHandler;
  function pageLoadedHandler() {
  alert("I'm alive!");
  }

51. Extra DOM

- methods like "getElementsByTagName" returns a list much like an array not exactly an array.
 
- The returned list an "object" called "NodeList".

- "NodeList" is a collection of Nodes.

- Nodes are the DOM elements.

52. Liberated Functions

*  Method 1 : function declaration

function quack(num) {
for (var i = 0; i < num; i++) {
console.log("Quack!");
}
}


quack(3);

 * Method 2 : function expression


 var fly = function(num) {
 for (var i = 0; i < num; i++) {
 console.log("Flying!");
 }
};

fly(3);   


53. The first thing that the browser looks for in a code is the "function declaration". Do refer page number 473.
Also check page number 505.


54. functions in JavaScript are values—
 * values that can be assigned to variables. And you know that with values of other types, like numbers, booleans, strings and even objects, we can do all sorts of things with those values, like pass them to functions, return them from functions
 or even store them in objects or arrays.

 * Such values are called "first-class values".

 * First class: a value that can be treated like any other
value in a programming language, including the
ability to be assigned to a variable, passed as an
argument, and returned from a function.

55. Functions can be used within the "sort" method for an array.
   Refer page number 500 for an example.

56. Anonymous Function 
 1. 
 * Usual method :
   function handler() { alert("Yeah, that page loaded!"); }
   window.onload = handler;

 *  Easy : 
  window.onload = function() { alert("Yeah, that page loaded!"); };

2.   

 * Usual method :
  function cookieAlarm() {
 alert("Time to take the cookies out of the oven");
}
setTimeout(cookieAlarm, 600000);


*  Easy :  "Please note the syntax here!"
  
  setTimeout(function() { alert("Time to take the cookies out of the oven");}, 600000);


57. Terms to checkout :
  1. Hoisting
  2. Lexical scope (Check page number 528 and 531).
  3. Environment(pg 531).
  4. Closure : A closure is a function  together with a referencing environment.

   * A closure results when we combine a
function that has free variables with
an environment that provides variable
bindings for all those free variables.

* The closure concept is used to call a function within a function outside it. See "eg.html".


  5. Free variables : They are the variables that are neither "locally" declared nor are parameters in a function.


58. Hoisting in JS : 
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
* That is , a JS variable can be used before it is even declared.


59. Lexical Scoping : A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.













 


