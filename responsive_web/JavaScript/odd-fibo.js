function sumFibs(num){
   let sequence = [0, 1];
   let sum = 0;
   for(let i = 2; i < num + 1; i++){
        sequence.push(sequence[i - 1] + sequence[i - 2]);
   }
   for(let i = 0; i < sequence.length; i++){
    if(sequence[i] % 2 !== 0 && sequence[i] <= num){
      sum += sequence[i];
    }
   }
   
   console.log(sequence)
   console.log(sum);
   return sum
}