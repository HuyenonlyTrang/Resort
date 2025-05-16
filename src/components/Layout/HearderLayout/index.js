/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from '~/components/Layout/components/Header';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';
import Styles from './HeaderLayout.module.scss';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(Styles);

function HeaderLayout({ children }) {
    const [headerTwo, setHeaderTwo] = useState(false);
    const [headerThree, setHeaderThree] = useState(false);
    const location = useLocation();
    const roomData = location.state?.roomData || {};
    const handleScroll_one = useCallback(() => {
        requestAnimationFrame(() => {
            setHeaderTwo(window.scrollY >= 590);
        });
    }, []);
    const handleScroll_two = useCallback(() => {
        requestAnimationFrame(() => {
            setHeaderThree(window.scrollY >= 2500);
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll_one);
        return () => {
            window.removeEventListener('scroll', handleScroll_one);
        };
    }, [handleScroll_one]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll_two);
        return () => {
            window.removeEventListener('scroll', handleScroll_two);
        };
    }, [handleScroll_two]);

    return (
        <div className={cx('wrapper')}>
            {headerTwo && location.pathname !== '/user' ? (
                <div className={cx('headerTwo')}>
                    <div className={cx('header_div')}>
                        <ul>
                            <li>
                                <a href="#">Ảnh</a>
                            </li>
                            <li>
                                <a href="#tiennghi">Tiện nghi</a>
                            </li>
                            <li>
                                <a href="#danhgia">Đánh giá</a>
                            </li>
                            <li>
                                <a href="#vitri">Vị trí</a>
                            </li>
                        </ul>
                        {headerThree && (
                            <div className={cx('header_div_left')}>
                                <div>
                                    <span className={cx('left_span_one')}>{roomData.money}/đêm</span>
                                    <span className={cx('left_span_two')}>
                                        <FontAwesomeIcon icon={faStar} /> {roomData.start} * {roomData.review} đánh giá
                                    </span>
                                </div>
                                <a href="#datphong">Đặt phòng</a>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Header isHeaderLayout={true} />
            )}
            <div className={cx(location.pathname !== '/user' ? 'container' : 'content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderLayout;
