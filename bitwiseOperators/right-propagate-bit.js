/*
    Time complexity is O(1) because regardless of the input size, we're
    performing a constant number of operations. Space complexity here is O(1)
    because we're storing a constant number of variables in memory.

    The learning for me here comes from two insights. First, if we minus one from
    any number, the right most bit set to one becomes a zero and every bit right of
    that bit becomes a one. This gets us most of the way there, with only the original
    right most one bit now set to zero. Combining that with the isolated right most
    bit (using XOR) gives allows us to add back in that bit.
*/

const rightPropagateBitV1 = (num) => {
    const rightMostBitOneIsolated = num & ~(num - 1);
    return (num - 1) ^ rightMostBitOneIsolated;
};

const rightPropagateTen = rightPropagateBitV1(10);
console.log(rightPropagateTen);

const rightPropagateEight = rightPropagateBitV1(8);
console.log(rightPropagateEight);

