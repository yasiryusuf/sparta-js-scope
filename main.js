// var outsideVariable = 5;
//
// function doSomething(insideVariable) {
//   console.log(outsideVariable);
// }
//
// doSomething();

//calls both functions in order
// function firstFunction() {
//   console.log("i am the first function");
//
// }
//
// function secondFunction() {
//   firstFunction();
//   console.log("i am the second function");
// }
//
//
// secondFunction();

// function firstFunction() {
//   console.log("i am the first function");
//
// }
//
// function secondFunction() {
//   firstFunction();
//   console.log("i am the second function");
//   function insideSecondFunction() {
//     console.log("i'm inside the second function");
//   }
//   insideSecondFunction();
// }
//
//
// secondFunction();

function joinStringsAndPrint( string1, string2,) {
  var newString = string1 + string2;

//Declaring the function
  function printString( string ) {
    console.log(string);
  }

//call the function here
  printString(newString);

  return newString;
}

var hello = "hello, ";
var world = "world";
joinStringsAndPrint( hello, world);
