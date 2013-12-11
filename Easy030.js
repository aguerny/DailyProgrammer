/*Easy030
Write a program that takes a list of integers and a target number and determines if any two integers in the list sum to the target number. If so, return the two numbers. If not, return an indication that no such integers exist.*/

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 10;
var didfind = false;

for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
        if (list[i] + list[j] === target) {
            alert(list[i] + " + " + list[j] + " = " + target + "!");
            didfind = true;
        }
    }
}
if (didfind === false) {
    alert("Nothing adds up to " + target + " . :(");
}