


// So the last big show that we're going to look at is, oh, of log in.

// Someone explain this with a sorted array.
let a = [1,2,3,4,5,6,7,8]

// And in order to do what I'm about to do here, you have to have sorted data.

// Let's say you want to find a number in this array.

// And we're going to look for the number one, what would be the most efficient way to find that?

// But we're going to do here is we're going to take the array, we're going to cut it in half and say

let firsthalf = [1,2,3,4] 
let secondHalf = [5,6,7,8]

// is the number one in the first half or the second half?

// What's not in the second half, so we don't even have to look at any of those numbers and that may not

// seem like a big deal when you have an array with eight items in it.

// But if you have an array with a million items in it, you just made it where you have a half a million

// items that you don't have to look at.

// So then we do this again.

let firsthalfagain = [1,2]

// We cut this in half.

// It's not in the second half.

// We're going to remove that and then we do it again.

// And now we have found the number one.

// This is a technique called divide and conquer.

// So let's bring everything back here and count the number of steps that we went through to find that

// item.

// It was one.

// And remember, we had eight items in the array.

// And two to the third power.

// Equals eight, so I'm going to turn this into a logarithm.

// And if you're not a math person, don't worry, we're not going to go deep into this.

// But look at the three numbers we have here.

// The two.

// The three in the eight.

// log(base2)8 = 3

// Equals three.

// Back this up.

// And we'll look at this again, log sobe, two of eight equals three, we're basically saying two to

// the what power equals eight to to the what power equals eight.

// Well, that number is three.

// To put it another way, if we take the number eight and we repeatedly cut it in half, we divide it

// by two, how many times do we have to divide it by two to get down to one item?

// And that is three times.

// And the real power of this is when we get to very large numbers.

// Let's say we have logged sub of this number and this is over a billion.

// log(base2) 1073741824 = ?

// How many times would you have to cut this number in half to get down to one item?

// And that would be.

// 31 times, to put it another way, 2^31st power equals this number here, that's over

// a billion.

// So if you had an array with a billion items in it and you were going to iterate through that array linearly

// to find something and say what you were looking for was the last item, you would have to look at a

// billion items to find it.

// But if you use divide and conquer, you could find any item in that array in thirty one steps.

// And that is the power of O(lon n) again.

// So now let's look at this on a graph. https://www.bigocheatsheet.com/

// And see that this is very flat, not as flat as O(1), of course, but very flat, very efficient

// compared to O(n) , O(n^2) at this point.

// I want to show one other thing on the graph.

// I'm not going to talk about this whole a lot of detail, but I just want to show this.

// And that is O(nlog n) that is used in some sorting algorithms.

// And this is the most efficient that you can make a sorting algorithm unless you're sorting only numbers.

// But if you're going to sort multiple types of data, you're going to sort string's.

// This is as efficient as you can make a sorting algorithm.

// We will talk about this and how we came up with the Times log in when we get to those sorting algorithms,

// because it will make more sense then.

// So that's why I'm not going to talk about this now, but take this back out.

// So for the rest , everything that we look at is going to be one of these four. O(1),O(n),O(n^2),O(log n)

