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