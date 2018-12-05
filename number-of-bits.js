/*
The initial time complexity is O(n) where n is the binary representation of the
passed in number. The initial space complexity is O(1) because we're storing a
a constant number of variables, regardless of the input size.
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

/*
The time complexity for most cases is O(s) where s is the number of bits set
to one in the given number. The space complexity is O(1) because we're storing a
constant number of variables, regardless of the input size. It's worth noting that
the worst case here will be O(n) where n is the numbers of bits for a given number.
The worst case would occur if all of the bits are set to the one (i.e. 1, 3, 5, etc.)
*/

const bitsSetToOneV2 = (num) => {
    let numberOfOnes = 0;
    while (num > 0) {
        const lowestBitOneIsolated = num & ~(num - 1);
        if (lowestBitOneIsolated > 0) {
            numberOfOnes += 1;
        }

        num = num ^ lowestBitOneIsolated;
    }
    return numberOfOnes;
}

// const v2Eight = bitsSetToOneV2(8);
// console.log(v2Eight);

// const v2Fifteen = bitsSetToOneV2(15);
// console.log(v2Fifteen);