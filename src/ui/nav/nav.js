import '../body.css';
import './nav.css';
import { createDivWithClass } from '../common/commonHelper';

const container = document.querySelector('.container');


function createNavElement(){
    const nav = createDivWithClass('nav');


    return nav;
}


container.appendChild(createNavElement());

export {
    createNavElement
}
