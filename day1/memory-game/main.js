// export function in utils.js =>
// I can do:
import { twice, text } from './utils.js';
// import * as Utils from './utils.js';

// import <anything> from file
import myCards, { handleClickOnCardById } from './game';
import ui from './ui';

ui.setOnClickHandler(function(id) {
  handleClickOnCardById(id);
  ui.showCards(myCards);
});
ui.showCards(myCards);
