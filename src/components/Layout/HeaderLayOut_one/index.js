import classNames from 'classnames/bind';
import Styles from './HeaderLayOut_one.module.scss';
import Image from '~/Image/airbnb-seeklogo.png';
import Active from '../components/Header/active';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(Styles);

function HeaderLayOut_one({ children }) {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <header
                className={cx('header', {
                    header_one:
                        location.pathname === '/notifications' ||
                        location.pathname === '/trip' ||
                        location.pathname === '/help',
                })}
            >
                <div
                    className={cx('header_div', {
                        header_width:
                            location.pathname === '/notifications' ||
                            location.pathname === '/trip' ||
                            location.pathname === '/help',
                    })}
                >
                    <div className={cx('Image')}>
                        {location.pathname === '/help' ? (
                            <div className={cx('help')}>
                                <FontAwesomeIcon icon={faAirbnb} className={cx('help_icon')} />
                                <span className={cx('help_span')}>Trung tâm trợ giúp</span>
                            </div>
                        ) : (
                            <img src={Image} alt="" />
                        )}
                    </div>
                    {location.pathname === '/helpsearch' ? <div>search</div> : null}
                    <div>
                        <Active />
                    </div>
                </div>
            </header>
            <div className={cx('container')}>{children}</div>
            {location.pathname === '/notifications' ||
            location.pathname === '/trip' ||
            location.pathname === '/help' ? (
                <Footer />
            ) : null}
        </div>
    );
}

export default HeaderLayOut_one;
