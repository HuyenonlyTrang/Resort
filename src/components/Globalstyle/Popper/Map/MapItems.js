import Styles from './Map.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);
function mapItems({ data, onSelect }) {
    const title = data.title;
    var nameWords = title.split(' ');
    var shortName = nameWords.length > 3 ? nameWords.slice(0, 3).join(' ') + '...' : title;
    return (
        <div
            className={cx('map-item')}
            onClick={() => {
                onSelect(title);
            }}
        >
            <img src={data.src} alt={data.title} />
            <h3>{shortName}</h3>
        </div>
    );
}

export default mapItems;
