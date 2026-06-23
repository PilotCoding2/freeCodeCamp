const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

const formatDateMMDDYYYY = (date) => {
    return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

const formatDateLong = (date) => {
    return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}`;

}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));