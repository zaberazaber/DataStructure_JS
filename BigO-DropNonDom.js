function logItems(n) {
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) {
         console.log(k)
     }
 }
 
 logItems(10)



//  Dropped non dominance is another way that we simplify bigo notation, so to explain this, bring up

// some code here.

// This is our nested for loop that we saw from before.

// What I'm going to add to this is an additional for loop that comes after the nested for loop.

// Let's take a look at this in depth tool's.

// So there's our code and we're going to run this with the number 10.

// Camera scroll to the top to begin with.

// So we have output here is zero zero, and this goes through to.

// Nine, nine.

// This is our nested for loop, that second for loop that follows, it goes from zero.

// So let's take a look at this over here.

// That nested for loop ran.

// O(n^2) times, the second one ran O(n) times when we add these together.

// This becomes O(n^2  + n), so if you think about this in terms of if N was 100 in squared,

// would be 10000, were the single in this added to it in this equation is only one hundred more.

// It's not really affecting the number of operations in squared is the dominant term and in by itself

// is the non dominant term.

// So we just remove it so.

// We dropped nine dominants.