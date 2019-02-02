const amount = parseFloat(prompt("Please, write amount from 0 to 9999999"));
const disc = parseFloat(prompt("Please, write discount from 0 to 99"));
if (amount < 0 || amount > 9999999 || disc < 0 || disc > 99 || isNaN(amount) || isNaN(disc)) {
    alert("Invalid input data");
} else {
    let priceWithDiscount = amount - (amount * disc / 100);
    let saved = amount - priceWithDiscount;
    alert(`Price without discount: ${+amount.toFixed(2)} \nDiscount: ${+disc.toFixed(2)}%`
    + `\nPrice with discount: ${+priceWithDiscount.toFixed(2)} \nSaved: ${+saved.toFixed(2)}`);
}

