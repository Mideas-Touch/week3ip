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




// const buttonOne = document.getElementById("submitbutton1");
// buttonOne.addEventListener(click, dailyProduction);

// const buttonTwo = document.getElementById("submitbutton2");
// buttonTwo.addEventListener(click, checkLeap);



// const shedA = document.append("250")
// console.log(shedA)

const firstshed = document.getElementById("shed1");
const secondshed = document.getElementById("shed2");
const thirdshed = document.getElementById("shed3");
const fourthshed = document.getElementById("shed4");
const dairyform = document.getElementById("form1");


dairyform.addEventListener('submit', result =>{
    result.preventDefault();

    let dailyresult1 = document.getElementById("dailyresult1");
    const daily1 = parseInt(firstshed.value);
    
    let dailyresult2 = document.getElementById("dailyresult2");
    const daily2 = parseInt(secondshed.value);

    let dailyresult3 = document.getElementById("dailyresult3");
    const daily3 = parseInt(thirdshed.value);

    let dailyresult4 = document.getElementById("dailyresult4");
    const daily4 = parseInt(fourthshed.value);

    dailyresult1.innerHTML = `Your production in shed A is ${daily1} litres per day`
    dailyresult2.innerHTML = `Your production in shed B is ${daily2} litres per day`
    dailyresult3.innerHTML = `Your production in shed C is ${daily3} 
    litres per day`
    dailyresult4.innerHTML = `Your prodution in shed C is ${daily4} litres per day`


    let DayTotal = daily1+daily2+daily3+daily4;

    const wholeDay = totalresult.innerHTML = `Total daily production is ${DayTotal} litres per day`

    // document.getElementById(totalresult).innerHTML=`Total production for the day is ${DayTotal}`;

    document.getElementById("dailyresult1").style.display='block';
    document.getElementById("dailyresult2").style.display='block';
    document.getElementById("dailyresult3").style.display='block';
    document.getElementById("dailyresult4").style.display='block';
    document.getElementById("DayTotal").style.display='block';


})








// function dailyProduction() {
//     var first = document.getElementById("shed1");
//     var second = document.getElementById("shed2");
//     var third = document.getElementById("shed3");
//     var fourth = document.getElementById("shed4");

//     var i;
//     for (i = 0; i < first.length ;i++) {
//         text += first.elements[i].value;
//     }

//     let totalProduction = first + second + third + fourth;

//     document.getElementById("dailytotal").innerHTML = totalProduction
// }



// function checkLeap(year) {
//     const year = prompt('Enter a year:');
//     const buyingPrice = prompt("Enter current buying price:")

//     if ((0 == year%4) && (0 != year/100) || (0 == year%400)) {
//         const leapIncome = 366*buyingPrice
//         let feedback1 = ('You will make' + leapIncome + '' + 'in' + '' +year);
//         document.getElementById("displayleap").innerHTML = feedback1;
//     } else {
//         let feedback2 = (year + 'is not a leap year');
//         document.getElementById("displayleap").style.display = feedback2;
//     }
// }





