import { selector } from "../app2.js";

export const scrollUP = () =>{
    let scroll = selector('.iconUp');
    let img = selector('body').childNodes[3];
    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop; 
        (scrollPosition >= 100) ? scroll.classList.add('visibility'): scroll.classList.remove('visibility');
    });   

    scroll.addEventListener('click', () => {
        if(img.matches('.iconUp'))
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            })
        
    })
}