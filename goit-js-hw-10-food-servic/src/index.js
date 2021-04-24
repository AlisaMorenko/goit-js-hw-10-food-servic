import './styles.css';
import card from './menu.json';
import cardTmpl from './card-template.hbs';

const cardsMenuEl = document.querySelector('.js-menu');

const cardsMarkUp = cardTmpl(card);
cardsMenuEl.insertAdjacentHTML('afterbegin', cardsMarkUp);
