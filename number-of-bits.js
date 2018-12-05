/*
The initial time complexity is O(n) where n is the binary representation of the
passed in number. The initial space complexity is O(1) because we're storing a
a constant number of varibles, regardless of the input size.
*/


const bitsSetToOne = (num) => {
    let numberOfOnes = 0;
    while (num > 0) {
        numberOfOnes += num & 1;
        num = num >> 1;
    }
    return numberOfOnes;
}

// const fiveResult = bitsSetToOne(5);
// console.log(fiveResult);

// const eightResult = bitsSetToOne(8);
// console.log(eightResult);