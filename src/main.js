//Clase 4: 

function clase4 (){

    console.log("Using id");
    console.log(document.getElementById('emptySpan'));

    console.log("Using class");
    console.log(document.getElementsByClassName('text-content'));

    console.log("Using tag");
    console.log(document.getElementsByTagName('p'));

    console.log("Query selector an id");
    console.log(document.querySelector('#textSpan1'));

    console.log("Query selector a class");
    console.log(document.querySelector('.text-content'));

    console.log("Query selector all");
    console.log(document.querySelectorAll('.text-content'));
}

// clase4();

//Clase 5

function clase5(){
    const randomClassItems = document.querySelectorAll('.text-content');
    console.log(randomClassItems);

    const arrayOfRandomClassItems = Array.from(randomClassItems);
    console.log(arrayOfRandomClassItems);
}

// clase5();

//Clase 6

function clase6 () {
    //trayendo el contenedor section donde se encuentra el título del documento
    const titleContainer = document.querySelector('section.main-content--title');
    //creando un elemento h3
    const h3 = document.createElement('h3');
    //agregando el h3 al contenedor titleContainer
    titleContainer.appendChild(h3);
    //creando texto para agregar al h3
    const texto = document.createTextNode('Buenas buenas');
    //agregando texto al h3
    h3.appendChild(texto);

    //agregando elementos con append
    titleContainer.append('Buenas tardes', document.createElement('div'));

    //agregando elementos con insertBefore entre el h1 y el h3
    const h2 = document.createElement('h2');
    titleContainer.insertBefore(h2, h3);

    //utilizando insertAdjacentElement
    const mainTitle = document.querySelector('h1');

    const anotherTitle = document.createElement('span');

    //colocando el título antes de la etiqueta h1
    mainTitle.insertAdjacentElement('beforebegin', anotherTitle);
    //colocando el título justo después de la etiqueta de apertura de h1
    mainTitle.insertAdjacentElement('afterbegin', anotherTitle);
    //colocando el título justo antes de la etiqueta de cierre de h1
    mainTitle.insertAdjacentElement('beforeend', anotherTitle);
    //colocando el título después de la etiqueta h1
    mainTitle.insertAdjacentElement('afterend', anotherTitle);
}

// clase6();

//Clase 7

function clase7(){
    const loremText = document.querySelector('p.lorem');
    console.log(loremText.outerHTML);
    console.log(loremText.innerHTML);
}

// clase7();

//Clase 9

function clase9() {
    //eliminar un nodo a partir de un padre directo
    const mainContent = document.querySelector('.main-content--content');
    const loremText = document.querySelector('p.lorem');
    mainContent.removeChild(loremText);
    
    //hallando el padre directo con parentElement
    const textInP = document.querySelector('p.text-content')
    const parentNode = textInP.parentElement;
    console.log(parentNode);
    parentNode.removeChild(textInP);

    //utilizando remove
    const lastOne = document.querySelector('#textSpan3');
    lastOne.remove();

    //reemplazando un nodo con replaceChild
    const oneMore = document.querySelector('#textSpan2');
    const somethingElse = document.createElement('h4');
    somethingElse.textContent = 'Pues uno más de más :P';
    mainContent.replaceChild(somethingElse, oneMore);
}

// clase9();

//Clase 10

function clase10() {
    //Agregar 100 inputs al final de todos los elementos
    //Forma no óptima:
    const mainContent = document.querySelector('.main-content--content');
    function noOptima(){
        for (let i = 0; i < 100; i++){
            const node = document.createElement('input');
            mainContent.insertAdjacentElement('beforeend', node);
        }
    }
    // noOptima();

    //Forma óptima:
    function optima(){
        const arr = [];
        for (let i = 0; i < 100; i++){
            const node = document.createElement('input');
            arr.push(node);
        }
        mainContent.append(...arr)
    }
    optima();
}

// clase10();

function clase12(){
    //api de los aguacates: https://platzi-avo.vercel.app/api/avo
    const URL = 'https://platzi-avo.vercel.app'

    const avoContainer = document.querySelector('#app');
    const arrDOM = [];
    const formatPrice = (price) => {
        const newPrice = new window.Intl.NumberFormat('en-EN', {
            style: "currency",
            currency: 'USD'
        }).format(price);

        return newPrice;
    }

    //usando async/await
    
    const fetchData = async () => {
        try {
            const apiData = await window.fetch(URL + '/api/avo');
            const avoData = await apiData.json();
            avoData.data.forEach(item => {
                const newDiv = document.createElement('div');

                const newImg = document.createElement('img');
                newImg.setAttribute('src', `${URL + item.image}`);
                newDiv.className = 'single-avocado';

                const newAvoName = document.createElement('p');
                newAvoName.className = 'avocado-name'
                newAvoName.textContent = item.name;

                const newAvoPrice = document.createElement('p');
                newAvoPrice.className = 'avocado-price';
                newAvoPrice.textContent = `Price: ${formatPrice(item.price)}`;

                const newAvoDescription = document.createElement('p');
                newAvoDescription.className = 'avocado-description';
                newAvoDescription.textContent = item.attributes.description;

                newDiv.append(newImg, newAvoName, newAvoPrice, newAvoDescription);

                arrDOM.push(newDiv);
            });
            avoContainer.append(...arrDOM);
            console.log(arrDOM);
        } catch {
            console.error(new Error(apiData.status))
        }
    }

    fetchData();

    //usando promesas
    function promiseData(){
        window.fetch(URL + '/api/avo')
            .then((apiData) => apiData.json())
            .then((avoData) => avoData.data.forEach(item => {
                const newDiv = document.createElement('div');

                const newImg = document.createElement('img');
                newImg.setAttribute('src', `${URL + item.image}`);
                newDiv.className = 'single-avocado';

                const newAvoName = document.createElement('p');
                newAvoName.className = 'avocado-name';
                newAvoName.textContent = item.name;

                const newAvoPrice = document.createElement('p');
                newAvoPrice.className = 'avocado-price';
                newAvoPrice.textContent = `Price: ${formatPrice(item.price)}`;

                const newAvoDescription = document.createElement('p');
                newAvoDescription.className = 'avocado-description';
                newAvoDescription.textContent = item.attributes.description;

                newDiv.append(newImg, newAvoName, newAvoPrice, newAvoDescription);

                arrDOM.push(newDiv);
            }))
            .then(() => avoContainer.append(...arrDOM))
            .catch((error) => console.error(error))
    }

    // promiseData();
}

// clase12();

function clase16() {
    const formContainer = document.querySelector('.main-content--form');
    
    const textFormLabel = document.createElement('label');
    textFormLabel.setAttribute('for', 'random-input');
    textFormLabel.innerText = 'Type something random: ';

    const textForm = document.createElement('input');
    textForm.setAttribute('type', 'text');
    textForm.setAttribute('id', 'random-input')
    formContainer.append(textFormLabel ,textForm);

    function click() {
        textForm.addEventListener('click', () => {
            console.log('Ha sucedido un click')
        });
    }
    click();
    
    function click2() {
        const click1 = console.log('Ha sucedido otro click :P');
        const click2 = console.log('Ha sucedido un tercer click lol');

        textForm.addEventListener('click', click1);
        textForm.addEventListener('click', click2);

        textForm.removeEventListener('click', click2);
    }
    click2();
    
    function input(){
        textForm.addEventListener('input', () => {
            console.log('Ha sucedido algo :O: ' + textForm.value);
        });
    }
    input();
}

// clase16();

function clase17(){
    clase12();

    const randomEvent = (evento) => console.log(`La llamada proviene del: ${evento.currentTarget.tagName}`)
    const body = document.querySelector('body');
    const avoContainer = document.querySelector('.avocado-content');
    
    window.setTimeout(() => {
        const firstTitle = avoContainer.firstElementChild;
        body.addEventListener('click', randomEvent);
        firstTitle.firstElementChild.addEventListener('click', (evento) => {
            evento.stopPropagation();
            console.log(`La llamada proviene del: ${evento.currentTarget.tagName}`);
        });
        firstTitle.addEventListener('click', randomEvent);
        
    }, 1000);
    
    function clase18(){
        const titleAlert = (evento) => {
            if(evento.target.className === 'avocado-name'){
                let avoTitle = evento.target.innerText;
                console.log(`Hola mi nombre es ${avoTitle} y esto es jackass`);
            }
        }
        document.addEventListener('click', titleAlert);
    }
    clase18();
}
// clase17();

function clase20() {
    const infoArr = [];
    const avoContainer = document.querySelector('#app');
    avoContainer.style.display = 'block';

    const newImgs = () => {
        const newDiv = document.createElement('div');

        const newImg = document.createElement('img');
        function newImgss() {
            const img = 'https://source.unsplash.com/random'
            return img;
        }
        newImg.setAttribute('src', newImgss());
        newDiv.className = 'single-avocado';

        const newAvoName = document.createElement('p');
        newAvoName.className = 'avocado-name';
        newAvoName.textContent = 'A random image';

        newDiv.append(newImg, newAvoName);
        avoContainer.append(newDiv);
    }
    
    newImgs();
    avoContainer.addEventListener('click', newImgs);
}

clase20();