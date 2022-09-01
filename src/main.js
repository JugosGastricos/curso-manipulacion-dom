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

function log(item){
    return console.log(item);
}

log("Using id");
log(docGetElementById('emptySpan'));

log("Using class");
log(docGetElementsByClassName('text-content'));

log("Using tag");
log(docGetElementsByTagName('p'));

log("Query selector an id");
log(docQuerySelector('#textSpan'));

log("Query selector a class");
log(docQuerySelector('.text-content'));

log("Query selector all");
log(docQuerySelectorAll('.text-content'));

//Clase 5
const randomClassItems = docQuerySelectorAll('.text-content');
log(randomClassItems);

const arrayOfRandomClassItems = Array.from(randomClassItems);
log(arrayOfRandomClassItems);