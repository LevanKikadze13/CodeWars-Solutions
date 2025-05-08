function toCamelCase(str){
let newString = ""
for(let i = 0; i < str.length; i++){
    if(str[i] === "-" || str[i] === "_"){
        newString += str[i+1].toUpperCase()
        i++ 
        continue
    }
    newString += str[i]
}
return newString
}

