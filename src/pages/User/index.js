import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './User.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faBusinessTime,
    faEarth,
    faLeaf,
    faMedal,
    faStar,
    faStarOfDavid,
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faFlag } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(Styles);

const check = [
    {
        icon: faCheckCircle,
        title: 'Danh tính',
    },
    {
        icon: faCheckCircle,
        title: 'Địa chỉ email',
    },
    {
        icon: faCheckCircle,
        title: 'Số điện thoại',
    },
];

function User() {
    const location = useLocation();
    const { roomData } = location.state || {}; // Lấy dữ liệu từ state
    const scrollRef = useRef(null);
    const [activeButton, setActiveButton] = useState(2); // Lưu ID của button được chọn
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);
    const handleAddScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };
    const handleMinusScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const handleClick = (buttonId) => {
        setActiveButton(buttonId); // Khi click, lưu ID vào state
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('user_left')}>
                    <div className={cx('user_left_box_one')}>
                        <div className={cx('one_left')}>
                            <img src={roomData.img} alt="" />
                            <h2>{roomData.host}</h2>
                            <span>
                                <FontAwesomeIcon icon={faMedal} />
                                Chủ nhà siêu cấp
                            </span>
                        </div>
                        <div>
                            <div className={cx('one_right_div')}>
                                <span className={cx('so')}>{roomData.review}</span>
                                <span className={cx('chu')}>Đánh giá</span>
                            </div>
                            <div className={cx('one_right_div')}>
                                <span className={cx('so')}>
                                    {roomData.start} <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className={cx('chu')}>Xếp hạng</span>
                            </div>
                            <div className={cx('one_right_div')}>
                                <span className={cx('so')}>{roomData.year}</span>
                                <span className={cx('chu')}>năm kinh nghiệm đón tiếp khách</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('user_left_box_two')}>
                        <h3>Thông tin đã được xác định của {roomData.host}</h3>
                        {check.map((item, index) => (
                            <div key={index} className={cx('div')}>
                                <FontAwesomeIcon icon={item.icon} className={cx('icon')} />
                                <span className={cx('span')}>{item.title}</span>
                            </div>
                        ))}
                        <span className={cx('span_2')}>Tìm hiểu về quy định xác minh danh tính</span>
                    </div>
                    <div className={cx('user_left_box_three')}>
                        <FontAwesomeIcon icon={faFlag} />
                        <span className={cx('three_span')}>Báo cáo hồ sơ này</span>
                    </div>
                </div>
                <div className={cx('user_right')}>
                    <div className={cx('header_right')}>
                        <h1>Thông tin về {roomData.host}</h1>
                        <div className={cx('information')}>
                            <span>
                                <FontAwesomeIcon icon={faBusinessTime} className={cx('icon_information')} />
                                <p> Công việc của tôi là: {roomData.detail.job}</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faStarOfDavid} className={cx('icon_information')} />
                                <p>
                                    Nói {roomData.detail.language_1} và {roomData.detail.language_2}
                                </p>
                            </span>

                            <span>
                                <FontAwesomeIcon icon={faLeaf} className={cx('icon_information')} />
                                <p>Điều làm nên sự độc đáo cho nhà của tôi: {roomData.detail.like}</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faEarth} className={cx('icon_information')} />
                                <p>Sống tại {roomData.detail.live}</p>
                            </span>
                        </div>
                        <p>{roomData.detail.information}</p>
                    </div>
                    <div className={cx('center_right')}>
                        <div className={cx('center_header_right')}>
                            <h2>Đánh giá của {roomData.host}</h2>
                            <div>
                                <button
                                    onClick={() => {
                                        handleMinusScroll();
                                        handleClick(1);
                                    }}
                                    className={cx(activeButton === 1 ? '' : 'light')}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <button
                                    onClick={() => {
                                        handleAddScroll();
                                        handleClick(2);
                                    }}
                                    className={cx(activeButton === 2 ? '' : 'light')}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </div>
                        </div>
                        <ul className={cx('center_list')} ref={scrollRef}>
                            {roomData.detail.cmt_host.map((item, index) => (
                                <li key={index} className={cx('center_item')}>
                                    <p>"...{item.cmt}..."</p>
                                    <div className={cx('cmt_center')}>
                                        <img src={item.img} alt="" />
                                        <div>
                                            <span className={cx('span_one')}>{item.name}</span>
                                            <span className={cx('span')}>{item.date_cmt}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className={cx('center_button')}>
                            <span>Hiện thị thêm đánh giá</span>
                        </button>
                        <p className={cx('center_p')}>Một số thông tin được hiển thị bằng ngôn ngữ gốc. Dịch</p>
                    </div>
                    {roomData.detail.destination && (
                        <div className={cx('center_one_right')}>
                            <h2>Nơi {roomData.host} đã đến</h2>
                            <div>
                                {roomData.detail.destination.map((item, index) => (
                                    <span key={index}>
                                        <img src={item.img} alt="" className={cx('img_1')} />
                                        <p>{item.title}</p>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {roomData.detail.ask && (
                        <div className={cx('center_right_two')}>
                            <h2>Hỏi {roomData.host} về</h2>
                            <ul className={cx('center_right_two_ul')}>
                                {roomData.detail.ask.map((item, index) => (
                                    <li key={index} className={cx('center_right_two_li')}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className={cx('center_right_two')}>
                        <div className={cx('center_header_right')}>
                            <h2>Mục đánh giá của {roomData.host}</h2>
                            <div>
                                <button
                                    onClick={() => {
                                        handleMinusScroll();
                                        handleClick(3);
                                    }}
                                    className={cx(activeButton === 3 ? '' : 'light')}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <button
                                    onClick={() => {
                                        handleAddScroll();
                                        handleClick(4);
                                    }}
                                    className={cx(activeButton === 4 ? '' : 'light')}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </div>
                        </div>
                        <ul className={cx('center_right_two_list')} ref={scrollRef}>
                            {roomData.detail.rent.map((item, index) => (
                                <li key={index} className={cx('center_right_two_item')}>
                                    <Link to="/profile">
                                        <img src={item.img} alt="" className={cx('center_right_two_img')} />
                                        <div className={cx('center_right_two_div')}>
                                            <div>
                                                <p className={cx('center_right_two_name')}>{item.name}</p>
                                                <p className={cx('center_right_two_title')}>{item.title}</p>
                                            </div>
                                            <span>
                                                <FontAwesomeIcon icon={faStar} />
                                                {item.rating}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('class')}>
                        <h2>Sách hướng dẫn của {roomData.host}</h2>
                        <div className={cx('center_right_two_div_one')}>
                            {roomData.detail.book.map((item, index) => (
                                <div key={index} className={cx('overlay')}>
                                    <img src={item.img} alt="" />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;
