// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

const sum = function(num1, num2) {
    return num1 === num2 ? (num1+num2)*3 : num1+num2
}
console.log(sum(2,3), sum(2,2))


// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

const check = function(num1, num2) {
    return (num1 || num2) === 50 || (num1 + num2) === 50 ? true : false
}
console.log(check(50,3), check(30,20), check(9, 6))


// Create a function to remove a character at the specified position of a given string and return the new string.

const removeChar = function(string, pos) {
    return string.slice(0, pos-1) + string.slice(pos)
}
console.log(removeChar('hello', 2))


//  Create a function to find the largest of three given integers.

const largestOf3 = function(num1, num2, num3) {
    return num1 > num2 ? num1 > num3 ? num1 : num3 : num2 > num3 ? num2 : num3
}
console.log(largestOf3(1700, 150, 1900))


// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const inRange = function(num1, num2) {
    return ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 >= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) ? true : false
}
console.log(inRange(10, 90), inRange(40, 75))


// Create a function that creates and returns the specified number of copies of a given string (positive number).

const copyString = function(string, copiesNum) {
    return string.repeat(copiesNum)
}
console.log(copyString('Nice', 7))


// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

const city = function(string) {
    return string.startsWith('Los') || string.startsWith('New') ? string.split(' ').slice(0,2).join(' ') : ''
}
console.log(city('Los Nice Wow'))


// Create a function to calculate the sum of three elements of a given array of integers of length 3.

const threeSumArray = function(array) {
    return array.reduce((a,b) => { return a + b})
}
console.log(threeSumArray([2,5,9]))


// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

const arrayContains1Or3 = function(array) {
    for(num of array) {
        if(num === 1 || num === 3) {
            return true
        }
    }
    return false
}
console.log(arrayContains1Or3([5,8]), arrayContains1Or3([1,9]), arrayContains1Or3([1,3]))


// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const arrayNotContains1Or3 = function(array) {
    for(num of array) {
        if(num === 1 || num === 3) {
            return false
        }
    }
    return true
}
console.log(arrayNotContains1Or3([5,8]), arrayNotContains1Or3([1,9]), arrayNotContains1Or3([1,3]))


// Create a function to find the longest string from a given array of strings.

const longestString = function(array) {
    let string = array[0]
    for(x of array.slice(1)) {
        if(x.length > string.length) {
            string = x
        }
    }
    return string
}
console.log(longestString(['hello', 'bye', 'nice']), longestString(['cute', 'good', 'awesome']))


// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const angleType = function(degree) {
    let angle
    if(degree > 0 && degree < 90) {
        angle = 'Acute'
    } else if(degree === 90) {
        angle = 'Right'
    } else if(degree > 90 && degree < 180) {
        angle = 'Obtuse'
    } else if(degree === 180) {
        angle = 'Straight'
    } else {
        angle = 'Unknown'
    }
    return `${angle} angle`
}
console.log(angleType(90), angleType(67))


// Create a function to find the index of the greatest element of a given array of integers

const greatestIndex = function(array) {
    let greatest = 0
    let index = 0
    for(let i=0; i<array.length; i++) {
        if(array[i] > greatest) {
            greatest = array[i]
            index = i
        }
    }
    return index
}
console.log(greatestIndex([1,2,3,4,5]), greatestIndex([9,67,45,89,1]))


// Create a function to get the largest even number from an array of integers.

const largestEven = function(array) {
    let largest = 0
    for(num of array) {
        if(num%2 === 0 && num > largest) {
            largest = num
        }
    }
    return largest
}
console.log(largestEven([10,2,40,122]), largestEven([100,98,7,3,45]))


// Create a function to check from two given integers, whether one is positive and another one is negative.

const posNeg = function(num1, num2) {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0) ? true : false
}
console.log(posNeg(10, 5), posNeg(-1,5))


// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const lowerUpper = function(string) {
    if(string.length < 3) {
        return string.toUpperCase()
    } else if(string.length === 3) {
        return string.toLowerCase()
    } else {
        let first3 = string.slice(0,3).toLowerCase()
        let restChars = string.slice(3).toUpperCase()
        return first3 + restChars
    }
}
console.log(lowerUpper('hi'), lowerUpper('lul'), lowerUpper('awesome'))


// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const sum2 = function(num1, num2) {
    let sum = num1 + num2
    return sum > 50 && sum < 80 ? 65 : 80
}
console.log(sum2(1,2), sum2(10,41))


// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

const num2Str = function(num) {
    let strings = { 3: 'Diego', 5: 'Riccardo', 7: 'Stefano'}
    let string = ''
    for(let div=1; div<=num; div++) {
        if(num%div === 0 && div in strings) {
            string += strings[div]
        }
    }
    return string === '' ? num : string
}
console.log(num2Str(28), num2Str(30), num2Str(34))


// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const acronym = function(string) {
    let acr = ''
    for(x of string.split(' ')) {
        acr += x[0]
    }
    return acr
}
console.log(acronym('British Broadcasting Corporation'))