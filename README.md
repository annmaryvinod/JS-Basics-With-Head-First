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

NOTE 1 ; JavaScript, unlike HTML markup, is case sensitive, meaning upper- and lowercase matters. The variable counter is different from the variable Counter. 

NOTE 2; Did you notice that the = operator is used in assignments,while the == operator tests for equality? That is, we use one equal sign to assign values to variables. We use two equal signs to test if two values are equal to each other. Substituting one for the other is a common coding mistake.
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


                   * When we call the bark function,the arguments are assigned to the parameter names.

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




      
 
 
 
 




 

















                
 
  




     

  









            



 

 
 



















      




