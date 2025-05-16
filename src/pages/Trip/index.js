import classNames from 'classnames/bind';
import Styles from './Trip.module.scss';
import { Link } from 'react-router-dom';
import { RouteConfig } from '~/config/routes';

const cx = classNames.bind(Styles);

function Trip() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>Chuyến đi</h1>
                <div>
                    <h2>Chưa có chuyến đi nào được đặt... vẫn chưa!</h2>
                    <span>
                        Đã đến lúc phủi bụi vali và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi.
                    </span>
                    <Link to={RouteConfig.Home} className={cx('link_one')}>
                        Bắt đầu tìm kiếm
                    </Link>
                </div>
                <div>
                    <span>
                        Bạn không tìm thấy đặt phòng/đặt chỗ của mình ở đây?
                        <Link className={cx('link')}>Truy cập Trung tâm trợ giúp</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Trip;
