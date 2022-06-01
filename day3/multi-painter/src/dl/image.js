import { makeObservable, observable, action, computed } from 'mobx';

class Image {
  constructor() {
    /*
    this.data = new Array(8).fill(0).map(() =>
      new Array(8).fill(0)
    );
    */
    this.reset();
    this.currentColor = 1;
    makeObservable(this, {
      data: observable,
      currentColor: observable,
      paint: action,
      reset: action,
      setColor: action,

      paintedPixelsCount: computed,
    })
  }

  get paintedPixelsCount() {
    return this.data.flat().filter(x => x !== 0).length;
  }

  setColor(value) {
    this.currentColor = value;
  }

  paint(rowIndex, columnIndex) {
    this.data[rowIndex][columnIndex] = this.currentColor;
  }

  reset() {
    this.data = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]
  }
}


const mainImage = new Image();

window.mainImage = mainImage;

export default Image;




