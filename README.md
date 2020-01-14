# Javascript Closures

Closures are nothing but FUNCTIONS WITH PRESERVED DATA.

A closure is an inner function that has access to the outer function's variables.  Obviously the inner function has access to its own function scope ('local' variables defined between its braces),  and it has access to the outer function's variables, which are Closures, and it has access to the global variables.

Lets look at a simple example.

```javascript
let passed = 3;

let addTO = (inner) => {
    return passed + inner
}

console.log(addTO(4));

console.dir(addTO);

```

This is a simplest form of a Closure. In JavaScript variables define in outside of the function are automatically available inside. Because in JavaScript its using something call lexical scoping. 


### Lexical Scope Explanation. (additional Info)

A lexical scope in Javascript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true, the variables defined inside a function will not be accessible outside that function.

![Lexical Scope](https://curriculum-content.s3.amazonaws.com/web-development/js/principles/lexical-scoping-readme/lexical_scope.png)


If you even wonder how this happens (Lexical Scoping), the answer is Closures 

Lets take a look at how the addTo function looks like.


![output in cmd](https://github.com/lakith/Javascript-Closures/blob/master/images/Capture.PNG?raw=true )
 

if you expand the scope and if you take a look at the closure, you can see the "passed" variable as a property. So this is how the function got the outside value.


If you consider how the addTO function executes, it will look the variables it needs. since passed is not define in inside it will take a look at the outside of the function. if it didn't find that at that scope it will go further, until it finds the value.
If if cannot ind it will be undefined, if it find in any point then it will store in the memory.
