import { cards } from "./cards.js";
import { selector } from './../app2.js';
import { removeClassHTML } from './removeHTML.js';

export const deleteOrAgreeCards = (array) =>{
    let noTask = selector('.no-task');   
    let longitud = array.length;
    
    (longitud == 0) ? removeClassHTML(noTask, 'flex', 'visible', 1) : cards(array);
    
}