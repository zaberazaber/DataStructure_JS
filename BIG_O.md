It is essential that you understand Big O when you go into a technical interview, because this will

absolutely come up. Understanding this will also make you a better coder.

So what is it?

So think of it like this.

We have two sets of code.

We have code one and we have code two.

How do we determine which one is better?

Now, both of these are going to accomplish the same thing, but they're written differently.

Is code one better?

You know, maybe it is easier to read or is code two better?

Well, you know, maybe there are other things about that that make code two better.

Well, big O is a way to mathematically figure out which of these two is better, which one runs more

efficiently.

So obviously, we can't measure this with a scale.

So I'm going to bring in a stopwatch to make the point.

Let's say we run code one and when we run it, we start a stopwatch and it runs for 15 seconds.

Then we reset the stopwatch and we run code two.

And code two,

Runs a lot longer than 15 seconds.
Well, obviously, we want our code to run as quickly as possible, be as efficient as possible.

So by this measure, code one is the better code.

This is what is called time, complexity.

But we don't measure time, complexity in time, we measure it in the number of operations, and the

reason we do that is if you took the same code and we ran it on a faster computer.

Obviously, it would complete in less time, but the number of operations would be the same.

So either way, on the fast computer or the slow computer, the time complexity would be the same,

the number of operations would be the same.

Also with Big O, we measure what is called space complexity and space

Complexity is the amount of memory that something uses.

So let's say code one, while you know it's very fast and runs in 15 seconds are comparatively fast.

Maybe it uses a lot of memory.

And then we reset all of this and we look at code two, and while that runs a really long time, the

full minute maybe it uses less memory.

And if this is what's most important to you, maybe code two is better

now. We are going to look mostly at time complexity, but space complexity will come up in interviews.

They'll ask you, OK, you wrote this code in such a way, maybe during a whiteboard session or something

like that.

And they say, great, you've optimized for time, complexity.

But what if we care about space complexity more?

How would you write it

then? you will have to understand both concepts.

So when you're dealing with this kind of notation, there are three Greek letters that you'll consistently

see, they are Omega, Theta and Omicron.

Omicron is better known as O as in Big O.

And Big O is the one, of course, that you're going to see most often.

So to explain this, I'm just going to bring up an array.

array = [1,2,3,4,5,6,7]

Let's say we're going to build a four loop to iterate through this array until we find a particular number.

If we're looking for the number one, this is our best case with the least number of iterations through

the array.

This would be our worst case and for would be our average case, so this best case is represented with

the Greek letter Omega.

This average case is represented with the Greek letter Theta, and our worst case is represented with Omicron

or O so Big O is always going to be worst case.

And I want to point this out because it is very common for people to say things like, OK, that's your

worst case, big O, but what's your best case or average case, Big O?

Well, technically, there is no best case or average case, Big O.

That would be Omega or Theta.

So when we measure Big O, we are always measuring worst case.



for more go to
https://www.bigocheatsheet.com/