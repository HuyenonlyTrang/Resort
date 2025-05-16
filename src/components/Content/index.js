import Styles from '~/components/Content/Content.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Content({ content }) {
    const [show, setShow] = useState(false);
    const [imageIndexes, setImageIndexes] = useState({}); // Lưu index của ảnh theo từng id

    useEffect(() => {
        const handleShow = () => {
            setShow(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleShow);
        return () => window.removeEventListener('scroll', handleShow);
    }, []);

    const handleNextImage = (id, images) => {
        setImageIndexes((prev) => ({
            ...prev,
            [id]: prev[id] !== undefined ? (prev[id] + 1) % images.length : 1,
        }));
    };

    const handlePrevImage = (id, images) => {
        setImageIndexes((prev) => ({
            ...prev,
            [id]: prev[id] !== undefined ? (prev[id] - 1 + images.length) % images.length : images.length - 1,
        }));
    };

    return (
        <div className={cx('content_wrapper')}>
            {content.map((item, index) => {
                const id = item.id !== undefined ? item.id : index; // Gán id nếu không có
                const images = Array.isArray(item.img) ? item.img : [item.img]; // Chuyển thành mảng nếu chỉ có 1 ảnh
                const currentIndex = imageIndexes[id] ?? 0; // Nếu chưa có index, mặc định là 0

                return (
                    <Link to={item.to || '#'} key={id} className={cx('content_item')}>
                        <img src={images[currentIndex]} alt={item.title} id="slide_img" />
                        <div className={cx('box')}>
                            <span
                                className={cx('left')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handlePrevImage(id, images);
                                }}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </span>
                            <span
                                className={cx('right')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleNextImage(id, images);
                                }}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                        </div>
                        <div className={cx('content_item_info')}>
                            <div className={cx('title_wrapper')}>
                                <span className={cx('title')}>{item.title}</span>
                                <div className={cx('icon_wrapper')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                                    <span>4.82</span>
                                </div>
                            </div>
                            <span className={cx('kilomet')}>{item.kilomet}</span>
                            <span className={cx('month')}>{item.month}</span>
                            <span className={cx('price')}>{item.price}</span>
                        </div>
                    </Link>
                );
            })}
            <div className={cx('scoll', { shows: show })}>
                <span>Hiển thị bản đồ</span>
                <FontAwesomeIcon icon={faMap} className={cx('icon')} />
            </div>
        </div>
    );
}

export default Content;
