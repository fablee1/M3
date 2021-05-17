/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = function(string) {
    let charOccurences = {}
    for(x of string) {
        if(!charOccurences[x]) {
            charOccurences[x] = 1
        } else {
            charOccurences[x] ++
        }
    }
    let char = ''
    let count = 0
    for(y in charOccurences) {
        if(charOccurences[y] > count) {
            char = y
            count = charOccurences[y]
        }
    }
    return char
}
console.log(maxChar('hello'), maxChar('apple 1231111'), maxChar('abcccccccd'))


/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = function(string1, string2) {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr1AlphabetOnly = []
    let arr2AlphabetOnly = []
    for(string of [string1, string2]) {
        for(char of string) {
            if(alphabet.includes(char)) {
                if(string === string1) {
                    arr1AlphabetOnly.push(char)
                } else {
                    arr2AlphabetOnly.push(char)
                }
            }
        }
    }
    return arr1AlphabetOnly.sort().join('') === arr2AlphabetOnly.sort().join('') ? true : false
}
console.log(anagrams('rail safety', 'fairy tales'), anagrams('RAIL! SAFETY!', 'fairy tales'), anagrams('Hi there', 'Bye there'))


/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const palindrome = function(string) {
    return Array.from(string).reverse().join('') === string ? true : false
}
console.log(palindrome("abba"), palindrome("abcdefg"))



/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reverseInt = function(num) {
    let numString = num.toString()
    let minus = ''
    if(numString[0] === '-') {
        minus = '-'
        numString = numString.slice(1)
    }
    return parseInt(minus + Array.from(numString).reverse().join(''))
}
console.log(reverseInt(15), reverseInt(981), reverseInt(500), reverseInt(-15), reverseInt(-90))



/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const steps = function(levels) {
    for(let x=1; x<=levels; x++) {
        console.log('#'.repeat(x) + ' '.repeat(levels-x))
    }
}
steps(5)



/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'elppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverse = function(string) {
    return Array.from(string).reverse().join('')
}
console.log(reverse('apple'), reverse('hello'), reverse('Greetings!'))



/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

const chunk = function(array, size) {
    let final = []

    let count = 0
    let subArr = []
    for(num of array) {
        subArr.push(num)
        count ++
        if(count === size) {
            final.push(subArr)
            count = 0
            subArr = []
        }
    }
    if(!(subArr === [])) {
        final.push(subArr)
    }
    return final
}
console.log(chunk([1, 2, 3, 4], 2), chunk([1, 2, 3, 4, 5], 2), chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), chunk([1, 2, 3, 4, 5], 4), chunk([1, 2, 3, 4, 5], 10))



/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = function(levels) {
    for(let x=1; x<=levels; x++) {
        let hashes = (x*2) - 1
        let space = ((levels*2) - 1 - hashes) / 2
        console.log(' '.repeat(space)+'#'.repeat(hashes)+' '.repeat(space))
    }
}
pyramid(4)

        

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/