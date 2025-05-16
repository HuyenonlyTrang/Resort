import Styles from './AmenitiesPopup.module.scss';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

function AmenitiesPopup({ isOpen, onClose, children }) {
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
        <div className={cx('popup-overlay')} onClick={onClose}>
            <div className={cx('popup-content')} onClick={(e) => e.stopPropagation()}>
                <button className={cx('close-btn')} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}

export default AmenitiesPopup;
