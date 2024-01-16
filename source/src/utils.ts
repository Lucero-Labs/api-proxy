
const base64regex = /^[0-9a-zA-Z+_\-]*$/;



function validateIdentifier(did: String)  : boolean{
    console.log("validating did:")
    console.log(did);
    const parts = did.split(":");
    console.log(parts);

    if(parts.length ==1)
        return base64regex.test(parts[0]);
    else if(parts.length == 2)
        return base64regex.test(parts[0]) &&base64regex.test(parts[1]);

    return false;
}

export{
    validateIdentifier
}