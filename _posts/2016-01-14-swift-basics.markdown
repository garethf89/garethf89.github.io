---
layout: post
title:  "Basics of Swift and iOS Development"
subtitle: "Part 1 - Swift"
date:   2015-11-23 15:45:31 +0000
excerpt: "The basics of the new Apple Swift language for creating iOS apps. Various features of the language explained from the perspective of a JS developer"
categories: swift
comments: true
---
Swift is the new language created by Apple for creating iOS apps. It replaces Objective-C and has been created from the ground up with iOS in mind. By comparison, Objective-C is and older language used by Apple since the 1980s, long before the mobile and web technologies of today were created. 

Swift shares a lot on common with many other newer languages. It is clean, simple and most importantly very fast. It is object oriented and looks similar to modern languages such as Python.

I am primarily a Javascript developer working on the web so a switch to a compiled programming language like this was a fairly new experience for me as I have only breifly touched this in the past. This guide therefore might be obvious to some readers but it is meant as a basic guide to the language and specifically from someone who is from a JS background.

<h3>The very basics</h3>

Like many languages but unlike JS, Swift has constants and variables. If you dont want to modify data it needs to be declared using "let" instead of var.

This is a typed language so you need to declare a type, however Swift will automatically do this for you if you choose to let it.

The example below also shows to print a value to the Output window in Xcode. This has recently changed from 'println' to 'print' so some examples will have println.

You will also notice no semicolons are needed - ever!

{% highlight swift %}
let name = "Gareth"
let test:Int = 2
print("Hello \(name))"
#=> prints 'Hello Gareth'
{% endhighlight %}

<h3>Optional values and unwrapping</h3>

Values can be set as optional using the ? character. This means that a value can exist as defined or it might be nil (which is the requivalent of null in other langauges). The example below shows how an optional variable is declared and how it is returned from a function. 

{% highlight swift %}
var optionalString:String? = "Text"
func testFunc( param:String ) -> String?
{% endhighlight %}

To access the value when you are using an optional, you have to unwrap it using the '!' character.

{% highlight swift %}
if optionalString != nil{
    print("Value is: \(optionalString!) ")
}

{% endhighlight %}

<h3>Tuples</h3>

Tuples are a new data type for swift and they are incredibly simple. They are just pairs of values similar to how objects work in JS and other languages, with a key and value. It is useful for easy access to pairs (or more) of grouped values without having to create complex data structures.

{% highlight swift %}
let namedTuple = (name: "Gareth", age: 27)
print("Hello I am \(namedTuple.name)")
#=> prints 'Hello I am Gareth'.

let unnamedTuple = ("Gareth", 27)
print("Hello I am 27 \(unnamedTuple.1)")
#=> prints 'Hello I am 27'.
{% endhighlight %}

<h3>Enum</h3>

Short for Enumertion, an Enum is a simple data structure to define possible values. You can build on this basic functionality.

{% highlight swift %}
enum Direction {
    case North = "North"
    case South = "South"
    case East = "East"
    case West = "West"
}
var whichWay = Direction.West
{% endhighlight %}
<h3>Structs and Classes</h3>

Structs and Classes are often two ways of doing the same thing, however there is a key difference between them. A new instance of a Struct is copied from the original creating a new object in the app. This means it does not inherit from other Structs and exists as its own entity and is therefore a 'Value' type. This is more suitable for small sets of data that do not need shared functionality.

{% highlight swift %}
struct Shape
{
    var width: Int
    var height: Int
    init(width:Int, height:Int) {
        self.width = width
        self.height = height
    }  

}
var shape1 = Shape(width:20, height: 20)
var shape2 = shape1
shape2.width = 200
#=> Shape 1 and Shape 2 now have different widths.
{% endhighlight %}

A new class instance will always reference the same class it inherited from, making this a 'Reference' type. This allows data and functions to exist in a place where they can be used throughout the application, with subclasses extending the functionality where needed. In the example below you can see that 'shape2' updates the reference that both variables are reading from, while the Struct creates seperate copies. 

{% highlight swift %}
class Shape
{
    var width: Int
    var height: Int
    init(width:Int, height:Int) {
        self.width = width
        self.height = height
    }  

}
var shape1 = Shape(width:20, height: 20)
var shape2 = shape1
shape2.width = 200
#=> Shape 1 and Shape 2 now have the same width of 200.
{% endhighlight %}

<h3>Dictionaries And Arrays</h3>

Dictionaries are an unordered collection type - values can exist in any order and are reffered to with a key. An array is ordered so values are reffered to using an index.

{% highlight swift %}
let carDict = ["Name": "Leon", "Manufacturer": "Seat", "Year": "2015"]
let carArr = ["Leon","Seat","2015"]
{% endhighlight %}

Access data like this:

{% highlight swift %}
carDict["name"]
carArr[0]
{% endhighlight %}

Add data like this:

{% highlight swift %}
carDict["name"] = "New Name"
carArr[0] = "New Name"
carArr.append("New Name")
{% endhighlight %}

<h3>Resources</h3>

Apple have a great eBook available for free on iBooks [here][swift-book] which has all the information you need on Swift and how it works.

However the [Treehouse tutorials][treehouse] are fantastic and guide you thrugh the basic of the language all the way through to creating an app.

<h3>Part 2</h3>

Part 2 is coming soon and will be about using Xcode and Cocoapods to create an App.

[swift-book]: https://itunes.apple.com/gb/book/swift-programming-language/id881256329?mt=11
[treehouse]: https://teamtreehouse.com/