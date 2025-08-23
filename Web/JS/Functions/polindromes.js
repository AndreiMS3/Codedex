/**create an isPalindrome() function that does the following:

It accepts a word string as a parameter.
The function returns true if the word is a palindrome. Otherwise, it returns false. */


function isPalindrome(word){
    let polindrome = "";
    console.log("My word : " + word.toLowerCase());
    for (let i = word.length -1; i >= 0 ; i--) {
        polindrome += word[i];
    }
    if(polindrome === word.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));

