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
    dailyresult3.innerHTML = `Your production in shed C is ${daily3} litres per day`
    dailyresult4.innerHTML = `Your prodution in shed C is ${daily4} litres per day`


    let DayTotal = daily1+daily2+daily3+daily4;

    const wholeDay = totalresult.innerHTML = `Total daily production is ${DayTotal} litres per day`




    let January = DayTotal * 31 * 45;
    const janIncome = Month1.innerHTML = `Total income for January is ${January}`;
    document.getElementById("Month1").style.display='block';

    let February = DayTotal * 28 * 45;
    const FebIncome = Month2.innerHTML = `Total income for February is ${February}`;
    document.getElementById("Month2").style.display='block';

    let March = DayTotal * 31 * 45;
    const MarchIncome = Month1.innerHTML = `Total income for March is ${March}`;
    document.getElementById("Month3").style.display='block';

    let April = DayTotal * 30 * 45;
    const AprilIncome = Month4.innerHTML = `Total income for April is ${April}`;
    document.getElementById("Month4").style.display='block';

    let May = DayTotal * 31 * 45;
    const MayIncome = Month5.innerHTML = `Total income for May is ${May}`;
    document.getElementById("Month5").style.display='block';

    let June = DayTotal * 31 * 45;
    const junIncome = Month6.innerHTML = `Total income for June is ${June}`;
    document.getElementById("Month6").style.display='block';

    let July = DayTotal * 31 * 45;
    const julIncome = Month7.innerHTML = `Total income for July is ${July}`;
    document.getElementById("Month1").style.display='block';

    let August = DayTotal * 31 * 45;
    const AugIncome = Month8.innerHTML = `Total income for August is ${August}`;
    document.getElementById("Month8").style.display='block';

    let september = DayTotal * 31 * 45;
    const septIncome = Month9.innerHTML = `Total income for September is ${september}`;
    document.getElementById("Month9").style.display='block';

    let october = DayTotal * 31 * 45;
    const octIncome = Month10.innerHTML = `Total income for October is ${october}`;
    document.getElementById("Month10").style.display='block';

    let November = DayTotal * 30 * 45;
    const NovIncome = Month11.innerHTML = `Total income for November is ${November}`;
    document.getElementById("Month11").style.display='block';

    let December = DayTotal * 31 * 45;
    const DecIncome = Month12.innerHTML = `Total income for December is ${December}`;
    document.getElementById("Month1").style.display='block';



    

    // let february = DayTotal * 28 * 45;
    // const febIncome = Month2.innerHTML = `Total income for February is ${february}`;
    // document.getElementById("Month2").style.display='block';




    

    // document.getElementById(totalresult).innerHTML=`Total production for the day is ${DayTotal}`;

    document.getElementById("dailyresult1").style.display='block';
    document.getElementById("dailyresult2").style.display='block';
    document.getElementById("dailyresult3").style.display='block';
    document.getElementById("dailyresult4").style.display='block';
    document.getElementById("DayTotal").style.display='block';

    
    

 
    // let feb = document.getElementById("feb")
    // let mar = document.getElementById("mar")
    // let apr = document.getElementById("apr")
    // let may = document.getElementById("may")
    // let jun = document.getElementById("jun")
    // let jul = document.getElementById("jul")
    // let aug = document.getElementById("aug")
    // let sept = document.getElementById("sept")
    // let oct = document.getElementById("oct")
    // let nov = document.getElementById("nov")
    // let dec = document.getElementById("dec")

   


    // document.getElementById("feb").style.display='block'
    // document.getElementById("mar").style.display='block'
    // document.getElementById("apr").style.display='block'
    // document.getElementById("may").style.display='block'
    // document.getElementById("jun").style.display='block'
    // document.getElementById("jul").style.display='block'
    // document.getElementById("aug").style.display='block'
    // document.getElementById("sept").style.display='block'
    // document.getElementById("oct").style.display='block'
    // document.getElementById("nov").style.display='block'
    // document.getElementById("dec").style.display='block'


    // weeklyIncome.innerHTML = `Your weekly Income will average ${weeklyProduction}`

// function weeklyProduction(DayTotal, price) {
//     weeklyIncome

// }


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





