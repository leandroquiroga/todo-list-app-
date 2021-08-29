import { max, min  } from "../app2.js";
import { removeClassHTML } from "./removeHTML.js";

export const createCards = (title, text, objeto, spinner) =>{
    let date = new Date();
    removeClassHTML(spinner, 'block', 'visible', 1);
    loadObjeto(objeto, text.value, title.value,date);
   
    return objeto;
}

function loadObjeto(obj, text, title,date){
    let random = Math.floor((Math.random() * (max - min + 1)) + min);
    let day = date.toLocaleDateString();
    let hours = format(date.getHours());
    let minutes = format(date.getMinutes());

    obj.id = `${random}`;
    obj.title = `${title}`;
    obj.task = `${text}`
    obj.date = `${day}  ${hours}:${minutes}`
}

function format(time){
    if(time < 10){
        time = '0' + time;
    }
    return time;
}
