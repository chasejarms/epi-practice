/*
    Time complexity here is O(1) because we perform a constant amount
    of operations, regardless of the input size. Space complexity is O(1)
    as well.

    The learning here is that every number to the power of two will only have one
    bit that is set to one and every other bit should be set to zero. Therefore, we
    can isolate the right most bit set to one and then compare it against the origal
    number. If it has changed, there were multiple bits set to one. If they are equal
    and there is at least one bit set to one, we have a number that is a power of two.
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