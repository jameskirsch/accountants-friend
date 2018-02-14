// The Basic Accounting Equation
var stockhodersEquity = 5000;
var liabilities = 5000;
var assets = liabilities + stockhodersEquity;
var date = new Date();
console.log(date);

if (assets !== (stockhodersEquity + liabilities)) {
    console.log('You are in balance');
} else if (assets === 1) {
    console.log('you are at risk');
} else {
    console.log('nothing');
}

function myFunc() {
    return 20;
}


