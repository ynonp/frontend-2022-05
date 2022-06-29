class Palette {
  constructor() {
    this.colors = [
      'white',
      'black',
      'red',
      'green',
      '#2202AA',
    ];
  }

  getColor(value) {
    return this.colors[value];
  }
}

export default new Palette();