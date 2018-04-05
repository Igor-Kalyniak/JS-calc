const 
      TAX_RATE = 0.10,
      PRICE_MEIZU = 149.99,
      PRICE_XIOMI= 169.99,
      PRICE_SAMSUNG  = 299.99,
      ACCESSORIES = 49.99;


var 
    cash = 1000,
    limit = 700,
    amount = 0;

function calculateTax(amount) {
    amount = amount + (amount*TAX_RATE)
    return amount;
}

function formatAmount(amount)  {
    return amount.toFixed(2);
}

function printAmount(amount) {
    amount = "$" + String (amount);
    return amount;
}

while(amount < limit) {
    amount = amount + PRICE_MEIZU;
}

console.log (amount)