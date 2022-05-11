import _ from 'lodash';
import './style.css';

export const cards = _.shuffle([
  { id: 0, value: 0, visible: false },
  { id: 1, value: 0, visible: false },
  { id: 2, value: 1, visible: false },
  { id: 3, value: 1, visible: false },
  { id: 4, value: 2, visible: false },
  { id: 5, value: 2, visible: false },
  { id: 6, value: 3, visible: false },
  { id: 7, value: 3, visible: false },
  { id: 8, value: 4, visible: false },
  { id: 9, value: 4, visible: false },
  { id: 10, value: 5, visible: false },
  { id: 11, value: 5, visible: false },
]);

export function handleClickOnCardById(cardId) {
  const card = cards.find(c => c.id === cardId);
  card.visible = !card.visible;
}













export default cards;
