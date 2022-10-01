// DESCRIPTION

// String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// TEST CASES

// describe("Tests", function() {
//     it ("Basic tests", function() {
//       Test.assertSimilar(repeatStr(3, "*"), "***");
//       Test.assertSimilar(repeatStr(5, "#"), "#####");
//       Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
//     });
//   });

// MY SOLUTION

const repeatStr = (n,s) => s.repeat(n)