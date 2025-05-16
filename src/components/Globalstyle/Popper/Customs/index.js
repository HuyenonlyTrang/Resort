import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Globalstyle/Popper';
import Styles from './Customs.module.scss';
import classNames from 'classnames/bind';
import CustomsItem from './CustomsItem';

const cx = classNames.bind(Styles);

function Customs({ children, items, setItems, onText }) {
    const customsItem = items.map((item, index) => (
        <CustomsItem key={index} data={item} setItems={setItems} items={items} index={index} onText={onText} />
    ));

    return (
        <Tippy
            trigger="click"
            interactive={true}
            onClickOutside={false}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('map-container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('map-wrapper')}>{customsItem}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Customs;
