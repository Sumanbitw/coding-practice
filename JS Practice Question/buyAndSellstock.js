function maxProfit(prices) {
    let start = 0;
    let end = prices.length - 1;
    let maxResult = 0;

    while(start < end) {
        if(prices[start] > prices[end]) start++;
        else{
            let profit = prices[end] - prices[start];
            maxResult = Math.max(maxResult, profit);
            end--;
        }
    }
    return maxResult;
}

console.log(maxProfit([2,1,4]))