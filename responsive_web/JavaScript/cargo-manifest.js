const normalizeUnits = (manifest) => {
    const newManifest = {...manifest};
    if (newManifest.unit === "lb"){
        newManifest.weight = newManifest.weight* 0.45;
        newManifest.unit = "kg";
        return newManifest;
    } else {
        return newManifest;
    }
}

function validateManifest(manifest){
    let newManifest = {...manifest};
    let errors = {}
    if((newManifest.containerId == null || newManifest.containerId <= 0)|| (Number.isInteger(newManifest.containerId) === false && newManifest.hasOwnProperty("containerId"))){
        errors.containerId = "Invalid";
    }
    if(newManifest.hasOwnProperty("containerId") === false){
        errors.containerId = "Missing";
    }
    if(newManifest.hasOwnProperty("destination") === false){
        errors.destination = "Missing";
    }
    if((newManifest.hasOwnProperty("destination") && typeof newManifest.destination !== "string") || (newManifest.hasOwnProperty("destination") && newManifest.destination.trim()==="")){
        errors.destination = "Invalid";
    }
    if(newManifest.hasOwnProperty("weight") === false){
        errors.weight = "Missing";
    }
    if(newManifest.hasOwnProperty("weight") && newManifest.weight <= 0 || newManifest.hasOwnProperty("weight") && Number.isInteger(newManifest.weight) === false || newManifest.hasOwnProperty("weight") && Number.isNaN(newManifest.weight)){
        errors.weight = "Invalid";
    }
    if(newManifest.hasOwnProperty("unit") === false){
        errors.unit = "Missing";
    }
    if((newManifest.unit !== "lb" && newManifest.hasOwnProperty("unit")) && (newManifest.unit !== "kg" && newManifest.hasOwnProperty("unit"))){
        errors.unit = "Invalid";
    }
    if(newManifest.hasOwnProperty("hazmat") === false){
        errors.hazmat = "Missing";
    }
    if((newManifest.hasOwnProperty("hazmat") && newManifest.hazmat !== true) && (newManifest.hasOwnProperty("hazmat") && newManifest.hazmat !== false)){
        errors.hazmat = "Invalid";
    }
    return errors;
}

function processManifest(manifest){
    let newManifest = validateManifest(manifest);
    if(newManifest.containerId === "Invalid" || newManifest.containerId === "Missing"){
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(newManifest);
    } else {
        let normalizedManifest = normalizeUnits(manifest);
        console.log(`Validation success: ${manifest.containerId}`);
        console.log(`Total weight: ${normalizedManifest.weight} kg`);
    }
}
