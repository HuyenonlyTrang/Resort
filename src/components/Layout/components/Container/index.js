import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Styles from './Container.module.scss';

import { RouteConfig } from '~/config/routes.js';
import Button from '~/components/Button';
const cx = classNames.bind(Styles);
function Container({ hideSearch }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const listRef = useRef(null);

    const scrollList = (direction) => {
        if (listRef.current) {
            const scrollAmount = 200; // Điều chỉnh khoảng cuộn Mỗi lần bấm nút sẽ cuộn 200px (có thể chỉnh lớn hơn/nhỏ hơn).
            listRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' }); //Cuộn danh sách theo chiều ngang (left).
        }
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const CONTAINER_BUTTON = [
        {
            img: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
            title: 'Nông thôn',
            to: RouteConfig.Home,
        },
        {
            img: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
            title: 'Công viên quốc gia',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png',
            title: 'Biểu tượng',
            to: RouteConfig.Symbol,
        },
        {
            img: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
            title: 'Phòng',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
            title: 'Hang động',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
            title: 'Lướt sóng',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            title: 'Khung cảnh tuyệt với',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg',
            title: 'Hanok',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg',
            title: 'Không gian sáng tạo',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg',
            title: 'Nhà nhỏ',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
            title: 'Biệt thự',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg',
            title: 'Đường trượt tuyết thẳng tới chỗ ở',
            to: '/filter',
        },
        {
            img: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
            title: 'Hướng biển',
            to: '/filter',
        },
    ];

    return (
        <div className={cx('container_wrapper', { shrink: hideSearch })}>
            {/* Nút bấm cuộn trái */}
            <button className={cx('scroll_button')} onClick={() => scrollList('left')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className={cx('container_lists')} ref={listRef}>
                {CONTAINER_BUTTON.map((item, index) => (
                    <Button key={index} to={item.to}>
                        <div
                            className={cx('container_item', { show: selectedIndex === index })}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={item.img} alt="Cong vien quoc gia" className={cx('icon')} />
                            <span className={cx('title')}>{item.title}</span>
                        </div>
                    </Button>
                ))}
            </div>
            {/* Nút bấm cuộn phải */}
            <button className={cx('scroll_button')} onClick={() => scrollList('right')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className={cx('container_right')}>
                <Button>
                    <div className={cx('one')}>
                        <FontAwesomeIcon icon={faSliders} />
                        <span>Bộ lọc</span>
                    </div>
                </Button>
                <Button>
                    <div className={cx('one')}>
                        <span>Hiển thị tổng trước thuê </span>
                        <label className={cx('switch')}>
                            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                            <span className={cx('slider')}></span>
                        </label>
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default Container;
