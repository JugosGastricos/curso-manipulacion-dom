//Clase 4: 

function docGetElementById(item){
    return document.getElementById(item);
}

function docGetElementsByClassName(item){
    return document.getElementsByClassName(item);
}

function docGetElementsByTagName(item){
    return document.getElementsByTagName(item);
}

function docQuerySelector(item){
    return document.querySelector(item);
}

function docQuerySelectorAll(item){
    return document.querySelectorAll(item);
}

//This makes it hard to pinpoint the exact locations of the logs
// function log(item){
//     return console.log(item);
// }

console.log("Using id");
console.log(docGetElementById('emptySpan'));

console.log("Using class");
console.log(docGetElementsByClassName('text-content'));

console.log("Using tag");
console.log(docGetElementsByTagName('p'));

console.log("Query selector an id");
console.log(docQuerySelector('#textSpan'));

console.log("Query selector a class");
console.log(docQuerySelector('.text-content'));

console.log("Query selector all");
console.log(docQuerySelectorAll('.text-content'));

//Clase 5
const randomClassItems = docQuerySelectorAll('.text-content');
console.log(randomClassItems);

const arrayOfRandomClassItems = Array.from(randomClassItems);
console.log(arrayOfRandomClassItems);

