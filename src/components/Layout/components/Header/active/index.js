import classNames from 'classnames/bind';
import Styles from './active.module.scss';
import { RouteConfig } from '~/config/routes';
import { Menu } from '~/components/Globalstyle/Popper';

import AmenitiesPopup from '~/components/AmenitiesPopup';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck, faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(Styles);
const Menu_Item = [
    {
        title: 'Resgister',
        to: '/resgister',
    },
    {
        title: 'Log In',
        to: '/',
        separate: true,
    },
    {
        title: 'Cho thuê chỗ ở qua Airbnb',
        to: RouteConfig.Post,
    },
    {
        title: 'Tổ chức trải nghiệm',
        to: '/organize',
    },
    {
        title: 'Help help',
        to: '/organize',
    },
];

const menu_item = [
    {
        title: 'Tin nhắn',
        to: RouteConfig.Messages,
    },
    {
        title: 'Thông báo',
        to: RouteConfig.Notifications,
    },
    {
        title: 'Chuyến đi',
        to: RouteConfig.Trip,
    },
    {
        title: 'Danh sách yêu thích',
        to: '/login',
        separate: true,
    },
    {
        title: 'Quản lý nhà/phòng cho thuê',
        to: RouteConfig.Hosting,
    },
    {
        title: 'Tổ chức trải nghiệm',
        to: '/organize',
    },
    {
        title: 'Tải khoản',
        to: '/organize',
        separate: true,
    },
    {
        title: 'Trung tâm trợ giúp',
        to: RouteConfig.Help,
    },
    {
        title: 'Đăng xuất',
        to: '/',
    },
];
const MENU_HELP = [
    {
        title: 'tất cả các chủ đề trợ giúp',
        to: '/organize',
    },
    {
        title: 'Tài nguyên về đón tiếp khách',
        to: '/organize',
    },
    {
        title: 'Tài khoản',
        to: '/organize',
    },
    {
        title: 'Đăng xuất',
        to: '/',
    },
];

const LANGUAGE = {
    de_xuat: [
        {
            language: 'Francais',
            country: 'Frace',
        },
        {
            language: 'English',
            country: 'United States',
        },
        {
            language: 'English',
            country: 'United Kingdom',
        },
    ],
    chon_lua: [
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
        {
            language: 'Tiếng việt',
            country: 'Việt Nam',
        },
        {
            language: 'Bahasa Indonnesia',
            country: 'Indonnesia',
        },
        {
            language: 'Crnogorski',
            country: 'Crna Gona',
        },
    ],
};
function Active() {
    const [login, setLogin] = useState(() => {
        return JSON.parse(localStorage.getItem('login')) || false;
    });
    console.log(login);
    const [isChecked, setIsChecked] = useState(false);
    const [activePopup, setActivePopup] = useState(null);
    const [show, setShow] = useState(false);
    const [up, setUp] = useState(false);
    const location = useLocation();
    const togglePopup = (id) => {
        setActivePopup(activePopup === id ? null : id);
    };
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    useEffect(() => {
        localStorage.setItem('login', login);
    }, [login]);
    return (
        <>
            <div
                className={cx('action', {
                    action_hosting: location.pathname === '/hosting',
                })}
            >
                {location.pathname !== '/hosting' && (
                    <Button rounded to={RouteConfig.Post}>
                        <div className={cx('title')}>Cho thuê chỗ ở qua Airbnb</div>
                    </Button>
                )}
                {location.pathname !== '/hosting' && (
                    <Button rounded onClick={() => togglePopup(1)}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </Button>
                )}

                {login && location.pathname === '/hosting' ? (
                    <Tippy
                        visible={up}
                        onClickOutside={() => {
                            setUp(false);
                        }}
                        interactive={true}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('map-container')} tabIndex="-1" {...attrs}>
                                helo
                            </div>
                        )}
                    >
                        <div className={cx('nenu_hosting')} onClick={() => setUp(!up)}>
                            <FontAwesomeIcon icon={faBell} className={cx('bell_icon')} />
                        </div>
                    </Tippy>
                ) : null}
                <Menu
                    items={login ? menu_item : Menu_Item}
                    show={show}
                    setShow={setShow}
                    data={MENU_HELP}
                    setLogin={setLogin}
                >
                    <button
                        className={cx({
                            menu: location.pathname !== '/hosting',
                            nenu_hosting: location.pathname === '/hosting',
                        })}
                        onClick={() => setShow(true)}
                    >
                        {location.pathname !== '/hosting' && (
                            <FontAwesomeIcon icon={faBars} className={cx('menu_bars')} />
                        )}
                        {login ? (
                            <img
                                className={cx('avater')}
                                src="https://sohanews.sohacdn.com/160588918557773824/2023/2/20/photo-2-1676891782961936842531.jpg"
                                alt="avatar"
                            />
                        ) : (
                            <FontAwesomeIcon icon={faUser} className={cx('menu_icon')} />
                        )}
                    </button>
                </Menu>
            </div>
            <AmenitiesPopup isOpen={activePopup === 1} onClose={() => setActivePopup(null)}>
                <div className={cx('language')}>
                    <div className={cx('language_header')}>
                        <span className={cx('language_header_title')}>Ngôn ngữ và khu vực</span>
                        <span>Loại tiền tệ</span>
                    </div>
                    <div className={cx('language_box')}>
                        <div>
                            <span>
                                Bản dịch
                                <FontAwesomeIcon icon={faLanguage} />
                            </span>
                            <span>Dịch nội dung mô tả và đánh giá sang Tiếng Việt.</span>
                        </div>
                        <label className={cx('switch')}>
                            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                            <span className={cx('slider')}>{isChecked ? <FontAwesomeIcon icon={faCheck} /> : ''}</span>
                        </label>
                    </div>
                    <div className={cx('language_dexuat')}>
                        <h2>Ngôn ngữ và khu vực được đề xuất</h2>
                        <ul>
                            {LANGUAGE.de_xuat.map((item, index) => (
                                <li key={index}>
                                    <span className={cx('language_dexuat_one')}>{item.language}</span>
                                    <span className={cx('language_dexuat_two')}>{item.country}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('language_luachon')}>
                        <h2>Chọn ngôn ngữ và khu vực</h2>
                        <ul>
                            {LANGUAGE.chon_lua.map((item, index) => (
                                <li key={index}>
                                    <span className={cx('language_dexuat_one')}>{item.language}</span>
                                    <span className={cx('language_dexuat_two')}>{item.country}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AmenitiesPopup>
        </>
    );
}

export default Active;
