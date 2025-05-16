import classNames from 'classnames/bind';
import Styles from './Hosting.module.scss';
import { Home, Post, Date } from './components';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(Styles);
function Hosting() {
    const location = useLocation();
    return (
        <div className={cx('wrapper')}>
            {location.pathname === '/hosting' ? (
                <Home />
            ) : location.pathname === '/hosting/date' ? (
                <Date />
            ) : location.pathname === '/hosting/listing' ? (
                <Post />
            ) : null}
        </div>
    );
}

export default Hosting;
