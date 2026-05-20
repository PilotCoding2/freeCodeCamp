function sumAll([n, m]){
    let sum = 0;
    if(n > m){
        sum = n;
        for(let i = m; i < n; i++){
            sum += i;
            console.log(sum);
        }
        return sum;
    } else {
        sum = m;
        for(let i = n; i < m; i++){
            sum += i;
            console.log(sum);
        }
        return sum;
    }  
}

function sumAll([n, m]){
    let sum = 0;
    const sortedArr = [n, m].sort();
        sum = sortedArr[1];
        for(let i = sortedArr[0]; i < sortedArr[1]; i++){
            sum += i;
            console.log(sum);
        }
        return sum;
}