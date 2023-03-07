/* The Challenge
Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:

vowelsCounter('anehizxcv') // will return 3

-> Algorithmic Thinking
Reading through the challenge statement above, you'd notice the phrase "given a string of text". From previous experience, this should bring the idea of functions to mind.

We can breakdown the solution to this challenge in three steps generally:

We write a function that’d receive a parameter called text. It would be a string of any length which would be passed to the function as an argument when it is called.
Next, within the function we have to go through the text and search for occurrences of the English vowels (a,e,i,o,u).
The function then returns the total number of matches(vowels) found. This brings return statements to mind as they simply stop the execution of a function and return a value from that function.

PREP: 
i)parameters: string(text)/ vowels(>=0)
ii)return: number of vowels in the sting
iii)example: vowelsCounter('anehizxcv') // will return 3
iv)pseudocode: write  a function that counts and returns the number of vowels on a string.


*/

//Iterative Approach
//In this approach, we loop through each letter of the string passed and then check to see if they match any of the English vowels. Before running through the text we create a counter initialized to a value of zero. When a match is found, the counter is incremented. At the end of it all, we return the counter which represents the total number of vowels found.

const Vowels = ["a", "e", "i", "e", "o", "u"]

function vowelCounter(text){

    //Initialize counter
    let count = 0;

    //Loop through text to test if character is a vowel
    for(let letter of text.toLowerCase()){
        if(Vowels.includes(letter)){
            count++
        }
    }

    //Return number of vowels
    return count

}




//Using Regular Expressions

function vowelsCounter(text){
    //Search text with Regex and store all matching instances
    let matchingInstances = text.match(/[aeiou]/gi);

    //Check if matching instances exist then calculate

    if(matchingInstances){
        //Return number of vowels

        return matchingInstances.length
    } else {
        return 0
    }
}