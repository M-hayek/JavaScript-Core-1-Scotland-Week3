
let scoresList = [45, 83, 15, 8, 62, 60, 79];

// 1. Write a function called hasPassed 
// It should have one input parameter called score
// It should return true if the score is 60 or above
// otherwise return false

function hasPassed (score) {
  
    return (score >= 60);

}

// 2. Use array.filter to create a new array with only the values in scoresList which have passed
let newArray = scoresList.filter (hasPassed);


// 3. Print the new array to the screen
console.log(newArray);