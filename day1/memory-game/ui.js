class UI {
  constructor() {
    const el = document.createElement('div');
    el.classList.add('game');
    document.body.appendChild(el);
    this.root = el;
  }

  showCards(cards) {
    const frag = document.createDocumentFragment();
    for (const card of cards) {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
      cardDiv.textContent = card;
      frag.appendChild(cardDiv);
    }

    this.root.appendChild(frag);
  }
}

const ui = new UI();
export default ui;











