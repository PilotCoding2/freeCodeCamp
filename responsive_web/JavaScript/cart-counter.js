let count = 0;

const cardCounter = (card) => {
    if(card >= 2 && card <= 6){
        ++count;
    } else if (card >= 7 && card <= 9){
        count;
    } else if (card === 10 || typeof card === "string"){
        --count;
    }

    if(count > 0){
        return `${count} Bet`;
    } else if (count <= 0){
        return `${count} Hold`;
    }
}