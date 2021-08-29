import { cardTask } from './card.js';
import { selector } from './../app2.js';

export const cards = (arrayStore) =>{
    let div = selector('.card-task');

    //cheaquear si el div card-task contiene elementos.
    if(div.childNodes.length >= 1) clearHTML(div)
    if(arrayStore.length > 0) arrayStore.forEach(taskObject => { cardTask(taskObject, div,arrayStore);});        
}

const clearHTML = (div) =>{
    while( div.firstChild ){
        div.removeChild(div.firstChild);
    }
}