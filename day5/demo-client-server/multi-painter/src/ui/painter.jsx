import repo from '../dl/images_repo';
import { observer } from 'mobx-react-lite';
import ViewImage from './view_image';

export default observer(function Painter(props) {
;
    const image = repo.activeImage;
    console.log(image);
    return (
        <div className='painter'>
          <ViewImage image={image} />
        </div>
    )
});
