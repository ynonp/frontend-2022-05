class UI {
  constructor() {
    const el = document.createElement('div');
    el.classList.add('game');
    document.body.appendChild(el);
    this.root = el;
  }

  setOnClickHandler(handler) {
    this.onClick = handler;
  }

  showCards(cards) {
    const frag = document.createDocumentFragment();
    for (const card of cards) {
      const cardDiv = document.createElement('div');
      cardDiv.addEventListener('click', () => {
        this.onClick(card.id);
      });

      cardDiv.classList.add('card');
      if (card.visible) {
        cardDiv.classList.add('visible');
      }
      cardDiv.textContent = card.value;
      frag.appendChild(cardDiv);
    }

    this.root.innerHTML = '';
    this.root.appendChild(frag);
  }
}

const ui = new UI();
export default ui;











