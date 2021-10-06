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


 
 



















      




