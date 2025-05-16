import classNames from 'classnames/bind';
import Styles from './DefaultLayout.module.scss';
import { useState } from 'react';
import { Header, Container } from '~/components/Layout/components';

const cx = classNames.bind(Styles);
function DefaultLayout({ children }) {
    const [isSearchHidden, setIsSearchHidden] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <Header setIsSearchHidden={setIsSearchHidden} />
            <div className={cx('container')}>
                <Container hideSearch={isSearchHidden} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
