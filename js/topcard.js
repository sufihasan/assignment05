
const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getTopCardDate() {
    const dateOfTopCards = new Date();
    let topcardDate = dateOfTopCards.getDate();
    let topcardMount = dateOfTopCards.getMonth();
    let topcardYear = dateOfTopCards.getFullYear();
    let topcardDay = dateOfTopCards.getDay();


    let topcardMountNew = monthsName[topcardMount];

    let topcardDayNew = weekdayName[topcardDay];


    if (topcardDate < 10) {
        topcardDate = '0' + topcardDate;
    }


    document.getElementById('day-name').innerText = topcardDayNew;
    document.getElementById('mounth-date-year').innerText = topcardMountNew + ' ' + topcardDate + ' ' + topcardYear;

    setTimeout(getTopCardDate, 1000);

}

getTopCardDate();





