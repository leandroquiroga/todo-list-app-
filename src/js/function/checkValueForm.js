import { showMessages } from './showMessage.js';

export const checkValue = (text, input, form, button) =>{
    if(text === '' && input === ''){
        showMessages(button,'No se puede agregar campos vacios',form)
    }else{
        if(input === '') showMessages(button,'Ingrese un titulo a su tarea',form);
        if(text === '') showMessages(button,'Ingrese una descripcion a su tarea',form);
    }
}