var myArray = ["hello", 100, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

var fruits = [];
console.log(fruits[0]);
fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";
console.log(fruits[0])
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


var animals = [];
animals.push("dogs");
animals.push("cats");
animals.push("rabbits");
console.log(animals[0]);/*"dogs"*/
console.log(animals[1]);/*"cats"*/
console.log(animals[2]);/*rabbits*/
console.log(animals[3]);/*undefined*/


var shapes = ["rectangle", "square", "circle", "triangle"];
shapes.shift();/*"triangle" is removed*/
shapes.pop();
console.log(shapes); 


/*remove 1 element starting from the third element*/
var furnitures = ["chair", "table", "desk", "closet", "sofa"];
furnitures.splice(2, 2);
console.log(furnitures);


/*add "bike" after "bus"*/
var transportation = ["train", "bus", "plane", "foot"];
transportation.splice(2, 0, "bike");
console.log(transportation);


/*remove 2 element starting from the third element, and insert "soup" after the removed element, in other words, replace "hotdog" and "dumplings" with "soup"*/
var food = ["burger", "fries", "hotdog", "dumplings", "curry"];
furnitures.splice(2, 2, "soup");
console.log(food);


var mydivContent = $("#mydiv").html();
console.log(mydivContent);

$("#div1").html("hello");
