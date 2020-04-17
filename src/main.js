import POTTER from './data/potter/potter.js';

console.log(POTTER);

//SHOW MORE INFO IN WELCOME
//create div
let addFirstElement = document.createElement('div');
let elementForTrailer = document.createElement('h3');
let textForTrailer = document.createTextNode('Aqui puedes ver el tráiler en español');
let addLinkTrailer = document.createElement('iframe');
let addButton = document.createElement('button');
let addTextButton = document.createTextNode('Ver menos');
addFirstElement.className = 'seeMore content';
addFirstElement.id = 'seeMore';
addLinkTrailer.className = 'youtubeLink'
addLinkTrailer.src = '"https://www.youtube.com/embed/3cA_EAtkaLc';
addButton.className = 'seeLess button';
addButton.id = 'seeLess';
addFirstElement.appendChild(elementForTrailer);
addFirstElement.appendChild(addLinkTrailer);
addFirstElement.appendChild(addButton);
elementForTrailer.appendChild(textForTrailer);
addButton.appendChild(addTextButton);

//function to show div
function seeMoreInfo(){
    console.log(addFirstElement);
}
//function in button
document.getElementById('seeMoreButton').onclick = function (){
    seeMoreInfo();
}