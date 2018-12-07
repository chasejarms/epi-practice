/*
    Compute the smallest amount of change that the given coins cannot produce.

    Here the best way to do this is to loop through the coins (after they are sorted)
    and we look to see if the current coin is greater than the sum of all the previous
    coins. If it is, we know our smallest amount of change is somewhere between
    the coin we're currently looking at and the last coin that we looked at. In particular,
    we know that the smallest amount is one more than the sum of the previous coins.

    The time complexity here is O(n log n) because the time complexity of quick sort is
    O(n log n) and the time complexity of looping through the sorted coins is O(n). Together
    these are O(2n log n) but asymptotically, the 2 is constant and so the time complexit
    is O(n log n). From a space complexity standpoint, storing the coin total is constant.
    However, quicksort is creating memory of O(n log n) where n is the size of the array
    and the log n is represented by the amount of stacks that are created from the recursive
    function calls.
*/

function smallestCoinsAvailable(coins) {
    const sortedCoins = quickSortCoins(coins);
    let coinTotal = 0;
    for (let i = 0; i < sortedCoins.length; i++) {
        const currentCoin = sortedCoins[i];
        if (i === 0) {
            coinTotal = currentCoin;
            continue;
        }

        if (currentCoin > coinTotal + 1) {
            return coinTotal + 1;
        } else {
            coinTotal += currentCoin;
        }
    }

    return coinTotal + 1;
}

function quickSortCoins(coins) {
    if (coins.length === 1 || coins.length === 0) {
        return coins;
    }

    const smallerCoins = [];
    const sameSizeOrLargerCoins = [];
    const currentCoin = coins[0]

    for (let i = 1; i < coins.length; i++) {
        const compareCoin = coins[i];
        if (compareCoin >= currentCoin) {
            sameSizeOrLargerCoins.push(compareCoin);
        } else {
            smallerCoins.push(compareCoin);
        }
    }

    const smallerCoinsSorted = quickSortCoins(smallerCoins);
    const sameSizeOrLargerCoinsSorted = quickSortCoins(sameSizeOrLargerCoins);
    return smallerCoinsSorted.concat([currentCoin]).concat(sameSizeOrLargerCoinsSorted);
}

const result1 = smallestCoinsAvailable([1,1,10,5,25,1,1,1]);
console.log(result1);

const result2 = smallestCoinsAvailable([12,2,1,15,2,4]);
console.log(result2);



