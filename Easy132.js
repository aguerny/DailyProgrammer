/*Easy132
Your goal is to write a program that takes two integers, and returns the greatest common divisor.
If no GCD exists, print one ('1').*/

function gcd(a, b) {
    var n = 1;
    for (var i = 0; i <= a; i++) {
        if (a%i === 0 && b%i === 0) {
            n = i;
        }
    }
    return n;
}

//Though I guess this would get caught up with large numbers. Will update using Euclid's algorithm.