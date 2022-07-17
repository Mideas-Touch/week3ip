
    var shedA = 300;
    var shedB = 250;
    var shedC = 400;
    var shedD = 305;

dailyProduction = (shedA+shedB+shedC+shedD);
weeklyProduction = (dailyProduction * 7);
monthlyProduction = (weeklyProduction * 4);


function incomeOverAmonth(buyingPrice) {
    if(buyingPrice == 1) {
        return buyingPrice;
    }
    else{
        return buyingPrice * monthlyProduction(buyingPrice)
    }
console.log(incomeOverAmonth)
}

const



