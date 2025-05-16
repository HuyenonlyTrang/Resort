import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import Styles from './Customs.module.scss';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);

function CustomsItem({ data, setItems, items, index, onText }) {
    const handleIncrease = () => {
        const newItems = [...items];
        newItems[index].count += 1;
        setItems(newItems);
        onText(newItems.map((item) => item.count).reduce((a, b) => a + b, 0));
    };

    const handleDecrease = () => {
        if (items[index].count > 0) {
            const newItems = [...items];
            newItems[index].count -= 1;
            setItems(newItems);
            onText(newItems.map((item) => item.count).reduce((a, b) => a + b, 0));
        }
    };

    return (
        <div className={cx('customs-item')}>
            <div className={cx('customs-item-left')}>
                <h4>{data.title}</h4>
                <p>{data.age}</p>
            </div>
            <div className={cx('customs-item-right')}>
                <button onClick={handleDecrease}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <p>{data.count}</p>
                <button onClick={handleIncrease}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    );
}

export default CustomsItem;
