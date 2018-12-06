/*
    Time complexity here is O(1) because we perform a constant amount
    of operations, regardless of the input size. Space complexity is O(1)
    as well.
*/

const isPowerOfTwo = (num) => {
    const isolatedRightMostBitOne = num & ~(num - 1);

    if (isolatedRightMostBitOne === 0) {
        return false;
    }
    return num === isolatedRightMostBitOne;
}

const oneIsPowerOfTwo = isPowerOfTwo(1);
console.log(oneIsPowerOfTwo);

const sixteenIsPowerOfTwo = isPowerOfTwo(16);
console.log(sixteenIsPowerOfTwo);

const fiveIsPowerOfTwo = isPowerOfTwo(5);
console.log(fiveIsPowerOfTwo);

const zeroIsPowerOfTwo = isPowerOfTwo(0);
console.log(zeroIsPowerOfTwo);