let inventory = [];

function findProductIndex(name){
    const normalizedName = name.toLowerCase();
   for(let i = 0; i < inventory.length; i++){
        if(inventory[i].name === normalizedName) {
            return i;
        }
   }
   return -1;
}

function addProduct(obj){
    if(findProductIndex(obj.name) >= 0){
        inventory[findProductIndex(obj.name)].quantity += obj.quantity;
        console.log(`${obj.name.toLowerCase()} quantity updated`);
    } else {
        let normalizedName = obj.name.toLowerCase();
        obj.name = normalizedName;
        inventory.push(obj);
        console.log(`${obj.name} added to inventory`);
    }
}

function removeProduct(name, quantity){
    const index = findProductIndex(name);
    const normalizedName = name.toLowerCase();

    if(index === -1){
        console.log(`${normalizedName} not found`);
        return;
    }
    if(index >= 0){
        if(inventory[index].quantity < quantity){
            console.log(`Not enough ${normalizedName} available, remaining pieces: ${inventory[index].quantity}`)
        }
        if(inventory[index].quantity - quantity === 0){
            inventory[index].quantity -= quantity;
            inventory.splice(index, 1);
        }

        if(inventory[index].quantity > quantity){
            inventory[index].quantity -= quantity;
            if(inventory[index].quantity > 0){
                console.log(`Remaining ${normalizedName} pieces: ${inventory[index].quantity}`);
            }
        }
    }

}



