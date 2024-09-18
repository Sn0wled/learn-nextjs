function Tag1(strings, ...values){
console.log('strings, type: ', typeof strings)
showObjKeys(strings)
console.log('values, type: ', typeof values)
showObjKeys(values)
}

function showObjKeys(obj){
    for (key in Object.getOwnPropertyDescriptors(obj)) {
        console.log('\t', key, ': ', obj[key])
    }
}

Tag1 `aboba ${123} asasasi ${Date()}`