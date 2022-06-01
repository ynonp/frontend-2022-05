import { makeObservable, observable, action } from 'mobx';

class Image {
  constructor() {
    /*
    this.data = new Array(8).fill(0).map(() =>
      new Array(8).fill(0)
    );
    */
    this.reset();
    makeObservable(this, {
      data: observable,
      paint: action,
      reset: action,
    })
  }

  paint(rowIndex, columnIndex, color) {
    this.data[rowIndex][columnIndex] = color;
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

export default mainImage;




