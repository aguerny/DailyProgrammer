/*Easy130
You will be given a string of the for NdM, where N and M are describe above in the challenge description. Essentially N is the number of times to roll the die, while M is the number of faces of this die. N will range from 1 to 100, while M will range from 2 to 100, both inclusively. This string will be given through standard console input.
You must simulate the die rolls N times, where if there is more than one roll you must space-delimit (not print each result on a separate line). Note that the range of the random numbers must be inclusive of 1 to M, meaning that a die with 6 faces could possibly choose face 1, 2, 3, 4, 5, or 6.*/

function roll(input) {
    var n = parseInt(input.substring(0,input.indexOf("d")));
    var m = parseInt(input.substring(input.indexOf("d")+1));
    var rolls= [];
    for (i=0; i<n; i++) {
        rolls += Math.floor(Math.random() * (m - 1 + 1)) + 1 + " ";
    }
    return rolls;
}