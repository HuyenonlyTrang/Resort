import classNames from 'classnames/bind';
import styles from './Date.module.scss';

const cx = classNames.bind(styles);
function Month({ setMonthText, monthText }) {
    return (
        <div className={cx('month_wrapper')}>
            <h4>Chuyến đi của bạn diễn ra khi nào ? </h4>
            <input type="text" value={monthText} onChange={(e) => setMonthText(e.target.value)} />
        </div>
    );
}

export default Month;
