import classNames from 'classnames/bind';
import Styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { RouteConfig } from '~/config/routes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '~/Image/airbnb-seeklogo.png';
import Search from '~/components/Layout/components/Search';
import Button from '~/components/Button';
import Active from './active';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function Header({ setIsSearchHidden, isHeaderLayout = false }) {
    const [isHeaderLayoutState, setIsHeaderLayoutState] = useState(isHeaderLayout);

    const [activeTab, setActiveTab] = useState('accommodation');
    const [hideSearch, setHideSearch] = useState(false);

    const [transform, setTransform] = useState(false);
    const lastScrollY = useRef(0);

    const location = useLocation();

    useEffect(() => {
        if (!isHeaderLayout) {
            const handleScroll = () => {
                if (window.scrollY > 200) {
                    setHideSearch(true);
                    setIsSearchHidden(true);
                } else {
                    setHideSearch(false);
                    setIsSearchHidden(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isHeaderLayout, setIsSearchHidden]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY.current) {
                setTransform(true); // Cuộn lên → Hiện hiệu ứng
            } else {
                setTransform(false); // Cuộn xuống → Tắt hiệu ứng
            }
            lastScrollY.current = window.scrollY; // Cập nhật vị trí cuộn
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); //cuon len

    return (
        <header className={cx('wrapper')}>
            {/* Inner */}
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <Link to={RouteConfig.Home}>
                        <img className={cx('logo')} src={logo} alt="Logo" />
                    </Link>
                </div>
                {/* button */}
                {location.pathname !== '/user' && !hideSearch && !isHeaderLayoutState ? (
                    <div className={cx('button')}>
                        <Button
                            rounded_present={activeTab === 'accommodation'}
                            className={cx({ text_333: activeTab !== 'accommodation' })}
                            onClick={() => setActiveTab('accommodation')}
                        >
                            Chỗ Ở
                        </Button>
                        <Button
                            rounded_present={activeTab === 'experience'}
                            className={cx({ text_333: activeTab !== 'experience' })}
                            onClick={() => {
                                setActiveTab('experience');
                            }}
                        >
                            Trải Nghiệm
                        </Button>
                    </div>
                ) : location.pathname !== '/user' ? (
                    <div
                        onClick={() => {
                            setHideSearch(false);
                            setIsHeaderLayoutState(false); // Cập nhật state thay vì thay đổi props
                        }}
                        className={cx('button_hide')}
                    >
                        <div className={cx('hide_item')}>Địa điểm bất kì</div>
                        <div className={cx('hide_item')}>Tuần bất kì</div>
                        <div className={cx('hide_item')}>
                            <span>Thêm khách</span>
                            <FontAwesomeIcon icon={faSearch} className={cx('hide_icon')} />
                        </div>
                    </div>
                ) : null}
                {/* active */}
                <div>
                    <Active />
                </div>
            </div>

            {/* search-input */}
            {!hideSearch && !isHeaderLayoutState && activeTab && (
                <Search transform={transform} activeTab={activeTab} setActiveTab={setActiveTab} />
            )}

            {/*  */}
        </header>
    );
}

export default Header;
