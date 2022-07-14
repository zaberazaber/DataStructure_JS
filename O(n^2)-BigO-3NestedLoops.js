function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             for(let k = 0; k < n; k++) {
                 console.log(i, j, k) 
             }       
         }       
     } 
 }
 
 logItems(10)



//  So now we're going to look at our next big O notation, which is of in squared, so we're going to start

// this off with the code that we used in the last video where we had a for loop followed by another for

// loop.

// But I'm going to change this and we're going to remove the console logs and we're going to next one

// for loop inside of the other than our console log is going to be for I and J inside of the two for loops.

// So let's go over to Dev tools.

// And there's our code and we're going to call this with the number 10.

// So let's run this, and if we scroll up to the top, we start with zero zero.

// And if I scroll to the bottom, we go to.

// Ninety nine, so we output 100 items.

// So let's go back over here.

// The number of items that were output in this case is in times in.

// Or in squared.

// And that's where we get our whole event squared.

// Now let's take our code and add one more thing to it, because I want to point out a thing that we do

// for simplifying this notation.

// Let's take our four loops, one layer deeper than one console, logout the variable for that for loop.

// And let's take a look at this in depth tools.

// OK, there's our three, four loops once again, we're going to call it with the number 10.

// And will run this, so we end in nine nine nine at the bottom there, if we scroll all the way to the

// top.

// We have zero zero zero.

// So we had a thousand things that were output in this case.

// Let's go back over here.

// In times and times in operations or ten times, ten times ten since we pass at the number 10.

// So this is in cubed.

// Which would be oblivion cubed, but it doesn't matter if it's into the third, into the fourth, into

// the tenth, we are still going to write this as Alvin squared.

// We're going to simplify this.

// So let's take a look at this on a graph.

// So if we had two sets of code that accomplish the same task and one was over, then squared and the

// other is over, then the O of in code is better because it's going to complete the task in fewer operations.

// So this is our first opportunity to see how it is that we could compare one code set against another.

// And all of squared is generally considered inefficient code, if you can write your code in a way that

// is going to become over, then it is going to be much more efficient.

// Is Auvergne squared?