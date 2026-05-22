function smallestCommons(arr){
    arr.sort((a, b) =>  a - b);
    let range = [];
    for(let i = arr[0]; i <= arr[1]; i++){
        range.push(i);
    }
    function gcd(a, b){
        return !b ? a : gcd(b, a % b);
    }
    function lcm(a, b){
        return (a * b) / gcd(a, b);
    }
    let multiple = arr[0];
    range.forEach(function(n){
        multiple = lcm(multiple, n);
    })
    return multiple;
}