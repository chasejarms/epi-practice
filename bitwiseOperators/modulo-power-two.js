/*
    Compute x module a power of two.
*/

/*
    Time complexity and space complexity here are O(1)
*/

const moduloV1 = (num, mod) => {
    return num & (mod - 1);
}

const result1 = moduloV1(77, 64);
console.log(result1);

const result2 = moduloV1(128, 32);
console.log(result2);
