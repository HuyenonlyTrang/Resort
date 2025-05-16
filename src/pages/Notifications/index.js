import classNames from 'classnames/bind';
import Styles from './Notifications.module.scss';
const cx = classNames.bind(Styles);

function Notifications() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2>Thông báo mới</h2>
                <span>Bạn không có thư mới</span>
            </div>
        </div>
    );
}

export default Notifications;
