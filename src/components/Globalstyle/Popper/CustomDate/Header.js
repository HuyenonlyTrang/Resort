import classNames from 'classnames/bind';
import styles from './Date.module.scss';

const cx = classNames.bind(styles);
function Header({ setMode }) {
    return (
        <header className={cx('header')}>
            <button onClick={() => setMode('day')}>Ngày </button>
            <button
                onClick={() => {
                    setMode('month');
                }}
            >
                Tháng
            </button>
            <button onClick={() => setMode('flexible')}>Linh hoạt</button>
        </header>
    );
}

export default Header;
