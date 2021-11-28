
// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

let array = [28, 43, -12, 30, 4, 0, 12]


let numZero = false

for (let i = 0; i < array.length; i++) {
    for(let x= 0; x < array.length; x++){
        if(array[i] + array[x] === 0){
            numZero = true
        }
        if(array[i] + array[i] === 0){
            numZero = false
        }
    }
}
console.log(numZero);

//     if (numbers[i] <= 0) {
//         result = false;
//         break;
//     }
// }
// console.log(result);

//The runtime for this code is quadratic, O(n^2)


//2.
function uniqueCharacters(str)
{
     
 
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j]){
                return false;
            } else {
 
   
    return true;
            }
        }
    }

}
console.log(uniqueCharacters("Moonday"))

// The runtime for this is O(n^2), quadratic

//3.

function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }

 console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

 //The runtime for this function is linear, O(n)

 function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//the runtime for this function is constant, or O(1)

// Extra Credit
// List out the space complexity of each solution in Step 2.