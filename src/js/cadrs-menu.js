import menuTemplate from '/templates/menu.hbs';
import menuData from '/menu.json'

// 
const markup = menuTemplate(menuData);
// console.log(markup);
const menuCardsEl = document.querySelector('.js-menu');
menuCardsEl.innerHTML = markup;


