import classNames from 'classnames/bind';
import styles from './HeaderLayout_Three.module.scss';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import Active from '../components/Header/active';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RouteConfig } from '~/config/routes';
const cx = classNames.bind(styles);
const LIST = [
    {
        title: 'Hôm nay',
        to: RouteConfig.Hosting,
    },
    {
        title: 'Lịch',
        item: 'date',
        to: `${RouteConfig.Hosting}/date`,
    },
    {
        title: 'Nhà/Phòng cho thuê',
        item: 'date',
        to: `${RouteConfig.Hosting}/listing`,
    },
    {
        title: 'Tin nhắn',
        item: 'message',
        to: RouteConfig.HostingMessage,
    },
    {
        title: 'Menu',
        item: 'message',
        ref: 'menu',
    },
];
function HeaderLayoutThree({ children }) {
    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(() => {
        return JSON.parse(localStorage.getItem('number')) || 0;
    });
    useEffect(() => {
        localStorage.setItem('number', JSON.stringify(number));
    }, [number]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header__logo')}>
                    <FontAwesomeIcon icon={faAirbnb} />
                </div>
                <ul>
                    {LIST.map((item, index) => {
                        const listItem = (
                            <Link
                                key={index}
                                className={cx('header__item', {
                                    white: number === index,
                                })}
                                onClick={() => {
                                    if (item.ref) {
                                        setShow(!show);
                                    }
                                    setNumber(index);
                                }}
                                to={item.to}
                            >
                                {item.title}
                            </Link>
                        );

                        return item.ref ? (
                            <Tippy
                                key={index}
                                visible={show}
                                onClickOutside={() => setShow(false)}
                                interactive={true}
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('map-container')} tabIndex="-1" {...attrs}>
                                        <div className={cx('map-wrapper')}>helo</div>
                                    </div>
                                )}
                            >
                                {listItem}
                            </Tippy>
                        ) : (
                            listItem
                        );
                    })}
                </ul>
                <Active up={show} setUp={setShow} />
            </div>
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default HeaderLayoutThree;
