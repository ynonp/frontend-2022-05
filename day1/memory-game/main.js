// export function in utils.js =>
// I can do:
import { twice, text } from './utils.js';
// import * as Utils from './utils.js';

// import <anything> from file
import myCards from './game';
import ui from './ui';

ui.showCards(myCards);
