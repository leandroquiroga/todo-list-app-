import { creator, selector} from "../app2.js";


export const showMessages = (btn,text,form) =>{
    let textError = selector('.todo-input');
    let div = creator('div');

    btn.disabled= true;
    div.classList.add('textErrForm');
    div.textContent = text;
    textError.insertBefore(div, textError.childNodes[3]);
     setTimeout(() => {
        textError.childNodes[3].remove();
        btn.disabled= false;
        form.reset()
    },3500) 
}