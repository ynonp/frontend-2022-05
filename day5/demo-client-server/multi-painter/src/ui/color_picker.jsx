import repo from '../dl/images_repo';
import palette from '../dl/palette';
import { observer } from 'mobx-react-lite';

export default observer(function ColorPicker() {
  const colors = palette.colors;
  const activeColor = repo.activeImage.currentColor;

  return (
    <div className='color-picker'>
      <p>Active Color = {activeColor}</p>
      {colors.map((colorName, index) => (
        <div
          onClick={() => repo.activeImage.setColor(index)}
          style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            margin: '5px',
            background: colorName,
            border: activeColor === index ? '5px solid purple' : '0',
          }}
          key={index}
        ></div>
      ))}
    </div>
  )
});