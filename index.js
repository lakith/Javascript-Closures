let passed = 3;
let addTO = (inner) => {
    return passed + inner
}
//The console.log() method prints out a toString representation of the object in the console to the user.
console.log(addTO(4));

//The console.dir() method output the list of object properties of a specified object in the console to the user.
console.dir(addTO);

/**** 
 * 
 * In simple words, the console.log() returns the object in its string representation and console.
 * dir() recognizes the object just as an object and outputs its properties.
 * Both log() and dir() returns the string just as a string.
 * 
 * ****/