function logItems(n) {
     for(let i = 0; i < n; i++) {
        console.log(i) 
     }
 
     for(let j = 0; j < n; j++) {
        console.log(j) 
     }       
 }
 
 logItems(3)



//  Big O has several ways in which we simplify the notation and it makes things easier.

// The first that we're going to look at is called drop constants, or you'll see it referred to as remove

// constants.

// You'll see it both ways.

// So to explain this, I'm going to start by bringing up the code that we had in the last video on O of n.

// But I'm going to add a second for loop that's identical to the one above, except that we're going to

// use J instead of I, and both of these four loops are going to run n times.

// So let's take a look at this in dev tool's.

// There's our code and we're going to call this.

// With a number three.

// OK, so let's run this.

// And our output is zero one two from the first for loop, and then once again, zero one, two from the

// second for Loop.

// So let's go back over here.

// So our code ran n plus n times.

// Or two n.

// So it makes sense to say that this is an O of 2n operation, but this is where that simplification

// comes in.

// It doesn't matter if it's two n three n or 100 n if there's a constant.

// We drop the constant.

// And we say that this code is O of n, so our first rule for simplifying our big O notation, drop constants.