import classNames from 'classnames/bind';
import Styles from './Help.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCircleExclamation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RouteConfig } from '~/config/routes';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(Styles);
const LIST = [
    {
        id: 1,
        item: 'Khách',
    },
    {
        id: 2,
        item: 'Chủ nhà/Người tổ chức',
    },
    {
        id: 3,
        item: 'Người tổ chức trải nghiệm',
    },
    {
        id: 4,
        item: 'Quản trị viên chuyến công tác',
    },
];
const BOX_IMAGE = {
    custom: [
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/getting-started-on-airbnb-optimized.jpg',
            title: 'Bắt đầu trên Airbnb',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltd4609c55daf00800/finding-a-stay-thats-right-for-you-optimized.jpg',
            title: 'Tìm chỗ ở phù hợp với bạn',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt369f58658ecc05d4/paying-for-your-trip-optimized.jpg',
            title: 'Retired article 3119: Paying for your trip',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt5912675266dfa56f/AC_Guests_HG_EN_S@3x.png',
            title: 'AirCover cho khách',
        },
    ],
    host: [
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc5b5fba2bdc0a264/getting-paid-optimized.jpg',
            title: 'Nhận chi trả',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blta78895c23e1f5ec3/optimizing-your-online-listing-optimized.jpg',
            title: 'Tối ưu hóa mục cho thuê',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt991e9dd0be644c17/getting-reimbursed-through-aircover-optimized.jpg',
            title: 'Được bảo vệ thông qua AirCover cho Chủ nhà',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt55fbbff760dc003d/changes-cancellations-refunds-optimized.jpg',
            title: 'Retired article 3132: Changes, cancellations, and refunds for Hosts',
        },
    ],
    admin: [
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt1a805240919340d9/getting-started-with-airbnb-for-work-optimized.jpg',
            title: 'Các liên kết để giúp bạn bắt đầu với Airbnb for Work',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt2df554f2a14d9276/using-your-dashboard-optimized.jpg',
            title: 'Các liên kết để giúp bạn bắt đầu sử dụng bảng điều khiển Airbnb for Work',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltf091f0eaa3ac1b5e/how-booking-and-reservations-work-optimized.jpg',
            title: 'Các liên kết để giúp bạn tìm hiểu về việc đặt và các lượt đặt với Airbnb for Work',
        },
        {
            href: 'https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt2583b2eaa4ae1c4d/help-with-billing-optimized.jpg',
            title: 'Trợ giúp về thanh toán',
        },
    ],
};
const BOX_Article = {
    custom: [
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
        {
            href: '/href',
            name: 'Airbnb hợp tác với Tổ chức Y tế liên châu Mỹ (Pan American Health Organization) như thế nào?',
            title: 'Airbnb is collaborating with the Pan American Health Organization (PAHO) to provide our...',
        },
    ],
    host: [
        {
            href: '/href',
            name: 'Nếu khách hủy',
            title: 'It happens—plans change! If a guest needs to cancel their reservation, we’re',
        },
        {
            href: '/href',
            name: 'Chính sách hủy cho nhà/phòng cho thuê',
            title: 'Sometimes, things come up and guests have to cancel. To keep things running',
        },
        {
            href: '/href',
            name: 'Nếu khách hủy',
            title: 'It happens—plans change! If a guest needs to cancel their reservation, we’re',
        },
        {
            href: '/href',
            name: 'Chính sách hủy cho nhà/phòng cho thuê',
            title: 'Sometimes, things come up and guests have to cancel. To keep things running',
        },
        {
            href: '/href',
            name: 'Nếu khách hủy',
            title: 'It happens—plans change! If a guest needs to cancel their reservation, we’re',
        },
        {
            href: '/href',
            name: 'Chính sách hủy cho nhà/phòng cho thuê',
            title: 'Sometimes, things come up and guests have to cancel. To keep things running',
        },
    ],
    admin: [
        {
            href: '/href',
            name: 'Giới thiệu về Airbnb for Work',
            title: 'Arranging accommodation for business trips is a cinch with Airbnb for Work, which puts a worldwide selection of homes and boutique',
        },
        {
            href: '/href',
            name: 'Đăng ký cho công ty của bạn tham gia Airbnb for Work',
            title: 'Joining Airbnb for Work makes it easy to book and manage company travel, with access to',
        },
        {
            href: '/href',
            name: 'Truy cập và tìm hiểu về bảng điều khiển Airbnb for Work',
            title: 'Airbnb for Work admins and trip planners have access to a convenient dashboard to help',
        },
        {
            href: '/href',
            name: 'Giới thiệu về Airbnb for Work',
            title: 'Arranging accommodation for business trips is a cinch with Airbnb for Work, which puts a worldwide selection of homes and boutique',
        },
        {
            href: '/href',
            name: 'Đăng ký cho công ty của bạn tham gia Airbnb for Work',
            title: 'Joining Airbnb for Work makes it easy to book and manage company travel, with access to',
        },
        {
            href: '/href',
            name: 'Truy cập và tìm hiểu về bảng điều khiển Airbnb for Work',
            title: 'Airbnb for Work admins and trip planners have access to a convenient dashboard to help',
        },
    ],
};
function Help() {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null); // Tạo ref để lấy input
    const navigate = useNavigate(); // Điều hướng trang
    const [avt, setAvt] = useState(1);
    const togger = (btn) => {
        if (btn) {
            setAvt(btn);
        }
    };

    const handleSearchClick = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focus vào input
        }
        setTimeout(() => {
            navigate(RouteConfig.HelpSearch); // Chuyển trang sau khi focus
        }, 500); // Đợi 500ms trước khi chuyển trang
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top_help')}>
                    <h1 className={cx('h1')}>Chào Trang! Chúng tôi có thể giúp gì cho bạn?</h1>
                    <Tippy
                        visible={show}
                        onClickOutside={() => setShow(false)}
                        interactive={true}
                        placement="bottom"
                        appendTo="parent"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                helo
                            </div>
                        )}
                    >
                        <label
                            htmlFor="help"
                            className={cx('box_input', {
                                show: show,
                            })}
                        >
                            <input
                                id="help"
                                ref={inputRef}
                                placeholder="Tìm kiếm thông tin hướng dẫn và ..."
                                onFocus={() => {
                                    setShow(true);
                                }}
                                onBlur={() => {
                                    setShow(false);
                                }}
                            />
                            <motion.button
                                whileTap={{ scale: 0.9 }} // Thu nhỏ khi nhấn
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }} // Quay lại mượt mà
                                className={cx('search')}
                                onClick={() => {
                                    handleSearchClick();
                                }}
                            >
                                <FontAwesomeIcon icon={faSearch} className={cx('icon_search')} />
                                <span>Tìm kiếm</span>
                            </motion.button>
                        </label>
                    </Tippy>
                </div>
                <ul className={cx('help_list')}>
                    {LIST.map((item, index) => (
                        <li
                            className={cx({
                                active: avt === item.id,
                            })}
                            key={index}
                            onClick={() => {
                                togger(item.id);
                            }}
                        >
                            {item.item}
                        </li>
                    ))}
                </ul>
                {avt === 1 || avt === 2 ? (
                    <div className={cx('forward')}>
                        <h2>Đề xuất cho bạn</h2>
                        <div className={cx('box_help_one')}>
                            <div className={cx('verify')}>
                                <div className={cx('verify_top')}>
                                    <div>
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                        <span>Yêu cầu hành động</span>
                                    </div>
                                    <h3>Danh tính của bạn chưa được xác minh đầy đủ</h3>
                                    <p>
                                        Quy trình xác minh danh tính giúp chúng tôi xác nhận rằng đó đúng là bạn. Đây là
                                        một trong những cách giúp chúng tôi đảm bảo an toàn trên Airbnb.
                                    </p>
                                </div>
                                <div className={cx('verify_center')}>
                                    <span>Kiểm tra trạng thái xác minh danh tính</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div className={cx('verify_bottom')}>
                                    <span>Tìm hiểu thêm</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                            <div className={cx('unite')}>
                                <div className={cx('unite_top')}>
                                    <p className={cx('unite_p')}>Liên kết nhanh</p>
                                    <div>
                                        <h3>Tìm thông tin đặt phòng/đặt chỗ</h3>
                                        <p>
                                            Tìm tất cả các đặt phòng/đặt chỗ, tin tức và việc cần làm trong tab Hôm nay.
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('unite_bottom')}>
                                    <span>Vào tab Hôm nay</span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div className={cx('lead')}>
                    <div className={cx('top_lead')}>
                        <h2>
                            {avt === 1
                                ? 'Hướng dẫn khi mới bắt đầu'
                                : avt === 2
                                ? 'Hướng dẫn dành cho Chủ nhà/Người tổ chức'
                                : avt === 3
                                ? 'Hướng dẫn dành cho Người tổ chức trải nghiệm'
                                : avt === 4
                                ? 'Hướng dẫn dành cho quản trị viên chuyến công tác'
                                : ''}
                        </h2>
                        <div>
                            <span>Duyệt tất cả các chủ đề</span>
                            <FontAwesomeIcon icon={faAngleRight} className={cx('lead_icon')} />
                        </div>
                    </div>
                    <div className={cx('lead_img')}>
                        {(avt === 1
                            ? BOX_IMAGE.custom
                            : avt === 2 || avt === 3
                            ? BOX_IMAGE.host
                            : avt === 4
                            ? BOX_IMAGE.admin
                            : []
                        ).map((item, index) => (
                            <div key={index} className={cx('lead_container')}>
                                <img src={item.href} alt="" />
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('article')}>
                    <h2>Bài viết hàng đầu</h2>
                    <div className={cx('article_container')}>
                        {(avt === 1
                            ? BOX_Article.custom
                            : avt === 2 || avt === 3
                            ? BOX_Article.host
                            : avt === 4
                            ? BOX_Article.admin
                            : []
                        ).map((item, index) => (
                            <div className={cx('article_box')} key={index}>
                                <a href={item.href}>{item.name}</a>
                                <p>{item.title}...</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('discover')}>
                <div className={cx('container')}>
                    <h1>Khám phá thêm</h1>
                    <div className={cx('container_box')}>
                        <div className={cx('discover_left')}>
                            <img
                                src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt6a2935c750dda8a0/6179c6499778eb18575b3c0b/Airbnb-Policy-Web.png"
                                alt=""
                            />
                            <div className={cx('title_discover')}>
                                <p className={cx('title_p_one')}>Chính sách cộng đồng của chúng tôi</p>
                                <p>Cách chúng tôi xây dựng một nến tảng của sự tin</p>
                            </div>
                        </div>
                        <div className={cx('discover_left')}>
                            <img
                                src="https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt93efaa7b7d28041c/Airbnb-Safety-Web.png"
                                alt=""
                            />
                            <div className={cx('title_discover')}>
                                <p className={cx('title_p_one')}>Mẹo và hướng dẫn về an toàn</p>
                                <p>Tài nguyên giúp đảm bảo an toàn cho du khách</p>
                            </div>
                        </div>
                        <div className={cx('discover_right')}>
                            <h1>Bạn cần liên hệ?</h1>
                            <p>
                                Để bắt đầu, vui lòng trả lời một số câu hỏi để chúng tôi có thể kết nối bạn với bộ phận
                                phù hợp.
                            </p>
                            <button>Liên hệ với chúng tôi</button>
                            <p>
                                Bạn cũng có thể <Link className={cx('text_link')}>gửi phản hồi cho chúng tôi</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
