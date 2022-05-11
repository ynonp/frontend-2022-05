import './style.css'
import './demo.scss';
import _ from 'lodash';

const myNumber = _.random(10);

document.querySelector('#app').innerText = `I have ${myNumber} apples`;
