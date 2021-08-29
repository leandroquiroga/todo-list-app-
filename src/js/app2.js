import { createCards } from "./function/createCards.js";
import { deleteOrAgreeCards } from './function/deleteOrCreateCard.js';
import { removeClassHTML } from './function/removeHTML.js';
import { cards } from './function/cards.js';
import { checkValue } from './function/checkValueForm.js';
import { scrollUP } from "./function/scrolling.js";

// constantes exportadoras
export const selector = (element) => document.querySelector(element);
export const selectorAll = (element) => document.querySelectorAll(element);
export const creator = (element) => document.createElement(element);

// constantes para obtener un id con numero randon entre 1 y 500000;
export const max = 500000;
export const min = 1;

const initAPP = () => {
    let array = [];
    let input = selector('#text-title');
    let textArea = selector('#formControlTextarea');
    let button = selector('#saveTask');
    let spinner = selector('.spinner-border');
    let form = selector('form');
    let noTask = selector('.no-task')

    button.addEventListener('click', (e) => {
        const objeto = {id: '', title: '', task: '', date:''}
        e.preventDefault();
        if(input.value !== '' && textArea.value !== ''){
            createCards(input, textArea, objeto,spinner);
            array = [...array, objeto]
            setTimeout(() =>{
                removeClassHTML(noTask, 'none', 'hidden', 0);
                removeClassHTML(spinner, 'none', 'hidden', 0);
                form.reset()
                cards(array)
            },2000); 
        }else{
            checkValue(textArea.value, input.value, form, button);
        }
        localStorage.setItem('task', JSON.stringify(array));
    });
    array = JSON.parse( localStorage.getItem('task')) || [];
    deleteOrAgreeCards(array);
    scrollUP()
} 

initAPP()