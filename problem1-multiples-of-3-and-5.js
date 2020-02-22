/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sumOfmultipleOf3And5(limit) {
    let sum = 0;
    for (let i=1; i<limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }

    return sum == 0 ? -1 : sum;
}

// test 1
let input = 1000;
let answer = sumOfmultipleOf3And5(1000);
console.log('Expected: ' + 233168);
console.log('Result: ' + answer);
