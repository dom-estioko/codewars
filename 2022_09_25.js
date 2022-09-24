// DESCRIPTION

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// TEST CASES

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });

//   it("Testing for true values", () => {
//     assert.strictEqual(boolToWord(0<1), 'Yes' )
//     assert.strictEqual(boolToWord(!(0>1)), 'Yes' )
//     assert.strictEqual(boolToWord(typeof boolToWord=="function" ), 'Yes' )
//     assert.strictEqual(boolToWord(!0), 'Yes' )
//     });

//   it("Testing for false values", () => {
//     assert.strictEqual(boolToWord(0>1), 'No' )
//     assert.strictEqual(boolToWord(!(0<1)), 'No' )
//     assert.strictEqual(boolToWord(typeof boolToWord=="string" ), 'No' )
//     assert.strictEqual(boolToWord(!1), 'No' )
//     });
//   });

// describe("Random tests", () => {  
  
//   const arr = [true, false]
  
//   function randint(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   for(let i = 0; i < 100; i++){
//     let b = arr[randint(0, 1)]
//     let expected = b?"Yes":"No"
//     it(`boolToWord(${b}) should equal ${JSON.stringify(expected)}`, () => {
//       assert.strictEqual(boolToWord(b), expected);
//    });
//   }
// })
 
// MY SOLUTION

const boolToWord = bool => bool ? "Yes" : "No"