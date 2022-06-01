import { makeObservable, observable, action, computed } from 'mobx';
import Image from './image';

class ImagesRepo {
  constructor() {
    this.images = {
      'ugly kitten': new Image(),
      'scary mouse': new Image(),
    }
    this.activeImageName = 'ugly kitten';
    makeObservable(this, {
      images: observable,
      activeImageName: observable,
      selectImage: action,
      imageNames: computed,
      activeImage: computed,
    });
  }

  selectImage(imageName) {
    this.activeImageName = imageName;
  }

  addImage() {
    let newImageName = 'New Image';
    let index = 0;

    while(!!this.images[newImageName]) {
      newImageName = `New Image ${index++}`
    }

    this.images[newImageName] = new Image();
  }

  get imageNames() {
    return Object.keys(this.images);
  }

  get activeImage() {
    return this.images[this.activeImageName];
  }
}

const repo = new ImagesRepo();
window.repo = repo;
export default repo;