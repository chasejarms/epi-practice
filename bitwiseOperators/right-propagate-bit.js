/*
Time complexity is O(1) because regardless of the input size, we're
performing a constant number of operations. Space complexity here is O(1)
because we're storing a constant number of variables in memory.
*/

const rightPropagateBitV1 = (num) => {
    const rightMostBitOneIsolated = num & ~(num - 1);
    return (num - 1) ^ rightMostBitOneIsolated;
};

const rightPropagateTen = rightPropagateBitV1(10);
console.log(rightPropagateTen);

const rightPropagateEight = rightPropagateBitV1(8);
console.log(rightPropagateEight);

