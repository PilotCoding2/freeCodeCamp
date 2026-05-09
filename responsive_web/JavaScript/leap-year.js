let year = 1999;

const isLeapYear = (year) =>
{
    if(year % 4 === 0 && year % 100 !== 0){
        return `${year} is a leap year.`;
    } else if(year % 100 === 0 && year % 400 === 0){
        return `${year} is a leap year.`;
    } else if (year % 100 === 0){
        return `${year} is not a leap year.`;
    }
}

let result = 0;
result = isLeapYear(year);
console.log(result);