import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Globalstyle/Popper';
import Styles from './Map.module.scss';
import classNames from 'classnames/bind';
import MapItems from './MapItems';

const cx = classNames.bind(Styles);

function Map({ children, items = [], onSelect }) {
    const mapItems = items.map((item, index) => <MapItems key={index} data={item} onSelect={onSelect} />);

    return (
        <div>
            <Tippy
                // zIndex= {9999}
                trigger="click"
                interactive={true}
                placement="bottom-start"
                render={(attrs) => (
                    <div className={cx('map-container')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('map-wrapper')}>{mapItems}</PopperWrapper>
                    </div>
                )}
            >
                <div>{children}</div>
            </Tippy>
        </div>
    );
}

export default Map;
