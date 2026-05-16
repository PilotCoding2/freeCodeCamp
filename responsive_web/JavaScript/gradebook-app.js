function getAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

function getGrade(score){
    if(score >= 0 && score <= 59){
        return "F";
    } else if(score >= 60 && score <= 69){
        return "D";
    } else if(score >= 70 && score <= 79){
        return "C";
    } else if(score >= 80 && score <= 89){
        return "B";
    } else if(score >= 90 && score <= 99){
        return "A";
    } else{
        return "A+";
    } 
}

function hasPassingGrade(score){
    const grade = getGrade(score);
    if(grade === "F"){
        return false;
    } else {
        return true;
    }
}

function studentMsg(arr, score){
    const classAverage = getAverage(arr);
    const yourGrade = getGrade(score);
    const isPassingGrade = hasPassingGrade(score);

    if(isPassingGrade === true){
        return `Class average: ${classAverage}. Your grade: ${yourGrade}. You passed the course.`
    } else {
        return `Class average: ${classAverage}. Your grade: ${yourGrade}. You failed the course.`
    }

}