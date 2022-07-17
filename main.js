// alert("You have 1 pending tasks")

//     var shedA = 300;
//     var shedB = 250;
//     var shedC = 400;
//     var shedD = 305;

// dailyProduction = (shedA+shedB+shedC+shedD);
// weeklyProduction = (dailyProduction * 7);
// monthlyProduction = (weeklyProduction * 4);


// function incomeOverAmonth(buyingPrice) {
//     if(buyingPrice == 1) {
//         return buyingPrice;
//     }
//     else{
//         return buyingPrice * monthlyProduction(buyingPrice)
//     }
// console.log(incomeOverAmonth)
// }

// const body = document.body

// const shedA = document.append("250")
// console.log(shedA)

function dailyProduction() {
    var first = document.getElementById("shed1");
    var second = document.getElementById("shed2");
    var third = document.getElementById("shed3");
    var fourth = document.getElementById("shed4");

    var i;
    for (i = 0; i < first.length ;i++) {
        text += first.elements[i].value;
    }

    console.log(first)
}



function checkLeap(year) {
    if ((0 == year%4) && (0 != year/100) || (0 == year%400)) {
        const leapIncome = 366*buyingPrice
        console.log('You will make' + leapIncome + '' + 'in' + '' +year);
    } else {
        console.log(year + 'is not a leap year');
    }
}

const year = prompt('Enter a year:');
const buyingPrice = prompt("Enter current buying price:")

checkLeap(year);


