/* Easy145
Your goal is to draw a tree given the base-width of the tree (the number of characters on the bottom-most row of the triangle section). This "tree" must be drawn through ASCII art-style graphics[2] on standard console output. It will consist of a 1x3 trunk on the bottom, and a triangle shape on the top. The tree must be centered, with the leaves growing from a base of N-characters, up to a top-layer of 1 character. Each layer reduces by 2 character, so the bottom might be 7, while shrinks to 5, 3, and 1 on top layers.*/

function tree(base, trunk, leaves) {
    var space = (base-1)/2;
    for (var width=1; width <= base; width += 2) {
        console.log((Array(space+1).join(" ")) + Array(width+1).join(leaves) + (Array(space+1).join(" ")));
        space -= 1;
    }
    space = ((base-1)/2)-1;
    console.log((Array(space+1).join(" ")) + Array(4).join(trunk) + (Array(space+1).join(" ")));
}