function pairElement(str){
    let dna = [];
    
    for(let i = 0; i < str.length; i++){
        let dnaPair = [];
        if(str[i] === "A"){
            dnaPair.push(str[i]);
            dnaPair.push("T");
            dna.push(dnaPair);
        }
    }
    console.log(dna);
}

// finished on freeCodeCamp, lazy Saturday so not gonna redo it here for now