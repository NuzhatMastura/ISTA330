/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {

        let count = 0;
        n = input.length;
 
        // check for all possible pairs
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++)
                if ((input[i] & input[j]) == 0)
 
                    // add 2 as (i, j) and (j, i) are
                    // considered different
                    count += 1;
        }
 
        return count;

};
 
let test1 = numberOfOrderedPairs ([4,2,6,9]);
console.log(test1);