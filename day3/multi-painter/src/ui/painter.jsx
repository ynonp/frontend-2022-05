import repo from '../dl/images_repo';
import { observer } from 'mobx-react-lite';
import ViewImage from './view_image';

export default observer(function Painter(props) {
;
    const image = repo.activeImage;
    return (
        <div className='painter'>
            <pre>{JSON.stringify(image)}</pre>
            <ViewImage image={image} />
        </div>
    )
});