import classNames from 'classnames/bind';
import Styles from './HeaderLayouttwo.module.scss';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(Styles);

function HeaderLayOut_two({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header_div')}>
                    <div className={cx('help')}>
                        <FontAwesomeIcon icon={faAirbnb} className={cx('help_icon')} />
                    </div>

                    <div className={cx('btn')}>Airbnb setup</div>
                </div>
            </header>
            <div className={cx('container')}>{children}</div>

            <Footer />
        </div>
    );
}

export default HeaderLayOut_two;
