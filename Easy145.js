function tree(base, trunk, leaves) {
    var space = (base-1)/2;
    for (var width=1; width <= base; width += 2) {
        console.log((Array(space+1).join(" ")) + Array(width+1).join(leaves) + (Array(space+1).join(" ")));
        space -= 1;
    }
    space = ((base-1)/2)-1;
    console.log((Array(space+1).join(" ")) + Array(4).join(trunk) + (Array(space+1).join(" ")));
}