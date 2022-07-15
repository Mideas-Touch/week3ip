
    var shedA = 300;
    var shedB = 250;
    var shedC = 400;
    var shedD = 305;

dailyProduction = (shedA+shedB+shedC+shedD);
weeklyProduction = (dailyProduction * 7);
monthlyProduction = (weeklyProduction * 4);
console.log(monthlyProduction);
incomeOverTime();

function incomeOverTime() {
    let buyingPrice = prompt("Enter buying price: ");
    var monthlyIncome = monthlyProduction * buyingPrice;
    console.log(monthlyIncome);

}


