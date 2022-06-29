import { observer } from 'mobx-react-lite';
import repo from '../dl/images_repo';

export default observer(function ImageSelector() {
  const images = repo.imageNames;
  return (
    <div>
    <button onClick={() => repo.addImage()}>Add Image</button>
    <button onClick={repo.addImage}>Add Image</button>

    <ul className="image-selector">
      {images.map((imageName, index) => (
        <li key={imageName}
            className={repo.activeImageName === imageName ? 'active' : ''}
        >
          <a
          href="#"
          onClick={() => repo.selectImage(imageName)}
          >
            {imageName}
          </a>
        </li>
      ))}
    </ul>

    </div>
  )
});