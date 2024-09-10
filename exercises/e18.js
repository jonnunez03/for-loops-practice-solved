// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  let newString = '';
  for (let i = 0; i < array.length; i++) {
    // check if it's the last char
    // if so, just add the element 
    // if not, then we add i and sep 
    // plus reassign once each line. (+=)
    if (i === (array.length - 1)) {
      newString += array[i];
    } else {
      // this copies one at a time instead of copying the whole data every iteration. 
      // ("copying whole book vs adding one chapter at a time.")
      const chunk = array[i] + separator; 
      newString += chunk;
    }
  }
  return newString
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
