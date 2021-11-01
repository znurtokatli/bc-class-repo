// Answer the following questions after discussing with a partner.

/* 1. What does SVG stand for? How are they used with D3? */
/*
SVG - SCALABLE VECTOR GRAPHIC 

<svg width = "300" height = "300">

</svg>

import * as d3 from "d3";



*/

/* 2. What is data binding? */
/*
Data binding is a process that allows an Internet user to manipulate Web page elements using a Web browser. 
It employs dynamic HTML (hypertext markup language) and does not require complex scripting or programming.

is the process of connecting a display element, such as a user interface control, with the information that populates it. 
This connection provides a path for the information to travel between the source and the destination
*/



/* 3. Given the following and an HTML page with no elements currently in the body,
use the enter() pattern to render three <li> elements to the page with text matching
the integers in the array. */

var arr = [1, 2, 3];
var ul = d3.select("body").append("ul");
// YOUR CODE HERE//
var selection = ul.selectAll("li") //creates virtuak selection
    .data(arr) //bind data
    .enter()
    .append("li") //append li element for each item in array
    .text(function(d) {
        return d;
    }); //set the text of each element to match the items in arrat



/* 4. Imagine three <li> elements already exist on the page.  Create code to update the text of those elements while also adding three new elements to match the array below. */
// Leave the number 3 code uncommented as it is needed for number 4 to work properly.
var arr = [1, 1, 2, 3, 5, 8];
var ul = d3.select("ul");
// YOUR CODE HERE //
var selection = ul.selectAll("li") //creates virtuak selection
    .data(arr);//bind data

    selection.enter()
    .append("li") //append li element for each item in array
    .merge(selection)
    .text(function(d) {
        return d;
    }); //set the text of each element to match the items in arrat



/* Bonus - Refactor your solution to number 4 above using the ES6 syntax for arrow functions. Then, modify the code to set the text of each
element to "<index in the array>: <item from the array>" */
// Be sure to comment out your number 4 code (not the arr or ul variables) before running your bonus code.
// YOUR CODE HERE //
var selection = ul.selectAll("li") //creates virtuak selection
    .data(arr);//bind data

selection.enter()
    .append("li") //append li element for each item in array
    .merge(selection)
    .text((d, i) => `${i}: ${d}`);  