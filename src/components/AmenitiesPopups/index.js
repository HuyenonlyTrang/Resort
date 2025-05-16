import { faAngleLeft, faShare } from '@fortawesome/free-solid-svg-icons';
import Styles from './AmenitiesPopups.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(Styles);

function AmenitiesPopups({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <div className={cx('popup-overlay')}>
            <div className={cx('header')}>
                <button className={cx('close-btn')} onClick={onClose}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={cx('share_save')}>
                    <button className={cx('share')}>
                        <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                        Chia sẻ
                    </button>
                    <button className={cx('save')}>
                        <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                        Đã lưu
                    </button>
                </div>
            </div>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default AmenitiesPopups;
