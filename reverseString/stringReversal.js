/* 

-> The Challenge
Given a string of text, write an algorithm that returns the text received in a reversed format. E.g
reverseString('algorithms') // should return 'smhtirogla'

-> Algorithmic Thinking
The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed.

Next, we would have to manipulate the characters in this string logically in order to return the string in reverse.


-> PREP

  i)parameters: string
  ii)return: reversed string
  iii)example: string -> gnirts
  iv)pseudocode: write an algo that takes in a parameter of type string and outputs  the rverse of the given string.
*/

//How to get Possible Solutions - chaining inbuilt methods, using for-loop, recursion and using reduce method


//1) chaining inbuilt methods
  //methods -> split(), reverse(), join()
  //chain them in succession to split the received text into an array of characters, reverse the order of array’s elements and join the elements of the reversed array to produce the reversed text.

  function reverseString(text){
   
     text.split('').reverse().join('');
    //applying cutting-edge ES6 syntax, we can use the spread operator as shown below to tweak this solution a bit.
    return [...text].reverse().join();
    // spread operator … , like the .split() method will spread the characters of the string into array elements.

  }


  //2) for-loop way
      //for loops are used to execute a piece of code as long as a condition is met. we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order.

      function stringReverse(text){
        let result = ''

        for(let i = text.length -1; i >= 0; i--){
            result += text[i]

        }

        return result;
        //we initialize the iterating variable i to the length of the string -1 . Since the index begins from zero, this gives us the index of the last character in the string. We simply append this last character to our result variable which is an empty string and continue the cycle until we are past the first character of the string i.e i is no longer greater than or equal to 0.
      }

      //We can improve this implementation further,by using the for…of loop in ES6.The for…of statement in JavaScript is used to execute a certain piece of code for each distinct item(property) of an iterable object.We use it below to run through each character in the text received and append it to the beginning of a new variable result which we return on completion as it now holds the reversed string.

      function stringReverse(text){
        let result = ''
         
        for( let char of text){
            result += char
        }
       return result; 
    }


    //3) recursive way
      //Recursion is a programming technique in which the intention is to reduce the problem into smaller instances of the same problem until it is completely solved. In the solution below, we write a function that does exactly so by calling itself repeatedly.Within the function, we make use of the .substr() method in JavaScript to return a portion of the text received. It expects two parameters, one specifying the starting index and the other specifying the number of characters afterwards(optional).


      function recurseString(text){

        if(text === ""){
            return ""
        }else {
            return recurseString(text.substr(1) + text[0])
        }
      }



      //4) Using reduce()
        //reduce() method is used to execute a function on every member of an array until it results in a single output value. It receives the function to be executed and the initial value of the accumulator as arguments. The accumulator serves as a holder for the value returned in the last execution of the callback.

        function reduceString(text){
            return text.split('').reduce((acc, cur) => cur + acc, '')
            //we split the text received into an array of characters and then we call the .reduce() method on the array which begins with an empty string as the initial value and accumulates each character in reverse until it has gone through all characters in the array. At this point, it returns the completely reversed string.
        }

        //Using the ES6 spread operator, we have

        function reduceString(text){
            return [...text].reduce((acc, curr) => curr + acc, '')
        }



        //Testing Performance with JSPerf
        //From the test carried out, the fastest solution we have considered is using the .reduce() method. Next, is the for-loop method which is only 6% slower and is a pretty close one. The slowest of them all is the method of chaining .split(), .reduce() and .join(59% slower).