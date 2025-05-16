/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import Styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDongSign, faEarth } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWeibo } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(Styles);

function footer() {
    return (
        <footer>
            <div className={cx('footer_one')}>
                <ul>
                    <li>Hỗ trợ</li>
                    <li>
                        <a href="#">Trung tâm trợ giúp</a>
                    </li>
                    <li>
                        <a href="#">Yêu cầu trợ giúp về vấn đề an toàn</a>
                    </li>
                    <li>
                        <a href="#">AirCover</a>
                    </li>
                    <li>
                        <a href="#">Chống phân biệt đối xử</a>
                    </li>
                    <li>
                        <a href="#">Hỗ trợ người khuyết tật</a>
                    </li>
                    <li>
                        <a href="#">Các tùy chọn hủy</a>
                    </li>
                    <li>
                        <a href="#">Báo cáo lo ngại của khu dân cư</a>
                    </li>
                </ul>
                <ul>
                    <li>Đón tiếp khách</li>
                    <li>
                        <a href="#">Cho thuê nhà trên Airbnb</a>
                    </li>
                    <li>
                        <a href="#">AirCover cho Chủ nhà</a>
                    </li>
                    <li>
                        <a href="#">Tài nguyên về đón tiếp khách</a>
                    </li>
                    <li>
                        <a href="#">Diễn đàn cộng đồng</a>
                    </li>
                    <li>
                        <a href="#">Đón tiếp khách có trách nhiệm</a>
                    </li>
                    <li>
                        <a href="#">Tham gia khóa học miễn phí về công việc đón tiếp khách</a>
                    </li>
                    <li>
                        <a href="#">Tìm đồng chủ nhà</a>
                    </li>
                </ul>
                <ul>
                    <li>Airbnb</li>
                    <li>
                        <a href="#">Trang tin tức</a>
                    </li>
                    <li>
                        <a href="#">Tính năng mới</a>
                    </li>
                    <li>
                        <a href="#">Cơ hội nghề nghiệp</a>
                    </li>
                    <li>
                        <a href="#">Nhà đầu tư</a>
                    </li>
                    <li>
                        <a href="#">Chỗ ở khẩn cấp Airbnb.org</a>
                    </li>
                </ul>
            </div>
            <div className={cx('footer_two')}>
                <ul>
                    <li>© 2025 Airbnb, Inc.</li>
                    <li>
                        · <a href="#">Quyền riêng tư</a>
                    </li>
                    <li>
                        · <a href="#">Điều khoản</a>
                    </li>
                    <li>
                        · <a href="#">Sơ đồ trang web</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEarth} />
                        <a href="#">Tiếng Việt</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDongSign} />
                        <a href="#">VND</a>
                    </li>
                    <li>
                        <div className={cx('footer_icon')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                    </li>
                    <li>
                        <div className={cx('footer_icon')}>
                            <FontAwesomeIcon icon={faWeibo} />
                        </div>
                    </li>
                    <li>
                        <div className={cx('footer_icon')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default footer;
