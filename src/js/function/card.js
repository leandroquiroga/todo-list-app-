import { creator, selector } from "../app2.js"
import { removeClassHTML } from "./removeHTML.js";


/* 
    - Crea una carta con la tarea y su titulo
    - Elimina una tarea segun el id que se selecciona 
    - Si el elemento padre no tiene elementoscoloca un mensaje y una imagen.
*/

export const cardTask = (obj, div,array) =>{
    let divCard = creator('div');
    let divBody = creator('div');
    let h6 = creator('h6');
    let p = creator('p')
    let small = creator('small');
    let botonClose = creator('button');
  
    divCard.classList.add('card','w-100', 'p-0');
    div.appendChild(divCard);
    
    botonClose.classList.add('close-icon');
    botonClose.textContent = 'x';
    botonClose.onclick = () =>{
        deleteCard(obj.id,divCard);    
    }

    divCard.insertBefore(botonClose, divCard.childNodes[0])

    divBody.classList.add('card-body');
    divCard.insertBefore(divBody, divCard.childNodes[0]);

    h6.classList.add('card-title');
    h6.textContent = `${obj.title}:`;
    divBody.insertBefore(h6, divBody.childNodes[0]);

    p.classList.add('card-text');
    p.textContent = `${obj.task}`;
    divBody.insertBefore(p, divBody.childNodes[1]);

    small.classList.add('time-task');
    small.textContent = `${obj.date}`
    divCard.insertBefore(small, divCard.childNodes[2])
}




function deleteCard(id,div){
    let noTask = selector('.no-task');   
    let divParent = selector('.card-task')
    let contentStore = JSON.parse(localStorage.getItem('task'));
    contentStore.forEach(task =>{
        if(task.id == id){
            let posId = contentStore.indexOf(task);
            contentStore.splice(posId,1);
            location.reload(true)
            
            setTimeout(() => {
                div.remove()
                if(divParent.childNodes.length === 0){
                    removeClassHTML(noTask, 'flex', 'visible', 1);
                    localStorage.clear()
                }
            }, 500)
        };
        localStorage.setItem('task',JSON.stringify(contentStore))
    })
};