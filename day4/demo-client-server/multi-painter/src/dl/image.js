import { makeObservable, observable, action, computed, runInAction } from 'mobx';
import { io } from "socket.io-client";

class Image {
  constructor() {
    /*
    this.data = new Array(8).fill(0).map(() =>
      new Array(8).fill(0)
    );
    */
    this.reset();
    this.currentColor = 1;
    this.socket = io('http://localhost:8080');
    
    this.socket.on('message', (msg) => {
      runInAction(() => {
        this.data = JSON.parse(msg);
      });
    });

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
    this.socket.emit('message', JSON.stringify(this.data));
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




