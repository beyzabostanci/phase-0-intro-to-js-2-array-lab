// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
function appendCat(name){
    var newArray = cats.slice()
    newArray.push(name)
    return newArray
}
function prependCat(name){
    var newwArray = cats.slice()
    newwArray.unshift(name)
    return newwArray
}
function removeLastCat(name){
    var newArrray = cats.slice()
    newArrray.pop(name)
    return newArrray
}
function removeFirstCat(name){
    var newArrraay = cats.slice()
    newArrraay.shift(name)
    return newArrraay
}
