class Cookie {
    constructor(color) {
        this.color = color
    }
    getColor() { //getter
        return this.color
    }
    setColor(color) { //setter
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

cokkieOne.getColor()  //return green
cokkieOne.setColor("yellow") //change the color of cokkieOne to yellow
cookieOne.getColor() //return yellow

// So now we're going to look at classes, and if you're not familiar with these a class, the analogy

// I like to use is this like a cookie cutter.

// So I'm going to put this over here.

// And we're going to say class Cookie.

// So when you create a class, you always capitalized the name of the class in this case, Cookie.

// Classes always have something that is called a constructor.

// This is what creates the new cookies, if you will, from the class.

// So in this case, we're going to pass this a color, and that's what this is referencing, and then

// we're going to pass it to the particular cookie that we are creating.

// And we will talk more about the this key word that is being used here.

// But it's for this cookie that we are creating.

// And that right there is a valid class, it doesn't do much, but it is a valid class, so now that we

// have that created, we can create new cookies.

// So this first part looks like declaring any other variable, but we set it equal to a new cookie.

// There's a new keyword in here.

// So Cookie one is the specific instance of Cookie that we are creating.

// And we do that by using the new keyword that calls the constructor.

// And we are passing it a color green, and that is going to create a green cookie.

// So we would say that this cookie is green.

// This one right here, that is called cookie one, that's where that this key word applies because we

// can have multiple cookies that are created by this.

// That this key word is going to refer to a specific one, so to expand on this, let's create another

// cookie so we'll see.

// Let Cookie to equal the new cookie that is blue.

// So Cookie, too, is a specific instance of cookie.

// This one is blue.

// That is this cookie.

// Is blue, so now we have created a class which is like a cookie cutter, and then we've created a green

// cookie and a blue cookie.

// Let's drop the cookies out of here and expand this class, so far we have created a constructor.

// But now we are going to create get color and set color, and these are the two broad categories of methods

// that you create.

// They are getters and setters.

// So let's bring our cookies back here and let's look at all of this code individuals.

// So there is a simple class and the creation of our two cookies.

// I'm just going to run this and clear this and then zoom in at the bottom here, so if we say cookie

// one dot get color, this is where that this key word comes in.

// We are getting the color for this cookie.

// And you can see that this is green and we can do the same thing for Cookie, too.

// And this one is blue.

// And I will clear this, and then we're going to do set colour for Cookie one and we're going to change

// the color of cookie one to yellow.

// It will clear this now we can do get color again for kookie one.

// And now Cookie one is yellow, so this is roughly how you can use classes.

// OK, so let's flip back over and we have changed cookie one to yellow.

// So how were we going to use this in this course?

// Let's say we're going to build a linked list class.

// In fact, all of our data structures are going to use classes.

// And this is why I want to spend some time on this.

// So as we discussed, we're going to have to have a constructor.

// So we're going to pass this a value to create the first node in the linked list and the curly braces

// here.

// I'm just putting a dot, dot, dot to show that there would be code here to do whatever in this case

// the constructor would need to do.

// But I'm not going to build this out, just going to do a quick overview of that.

// So some of the other methods that we could create for a linked list would be push.

// On shift.

// Insert an item, add an index with a particular value, remove pop.

class LinkedList {
    constructor(value){}
    push(value){}
    unshift(value){}
    insert(index,value){}
    remove(index,value){}
    pop(value){}
    shift(value){}
    }

// And shift and will create all of these in the link last session and a few more, but let's just go over

// what we could do with this.

// We could say let my linked list equal a NewLink list will pass it a number 23, and now we have a node

// with 23.

// We can say my link lists push with the number seven, we could do that.

// On shift with the number three and do that.

// Insert at the index of one, the number 11.

// Like that, we could remove the item at the index of one and remove that 11.

// We can pop an item.

// We could shift an item like that, so these are some of the things that we can do by building out the

// linked list class, and we have all of this ability to do all of these very specific things with these

// data structures by using classes.

class LinkedList {
constructor(value){}
push(value){}
unshift(value){}
insert(index,value){}
remove(index,value){}
pop(value){}
shift(value){}
}
