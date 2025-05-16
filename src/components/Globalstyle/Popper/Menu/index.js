import Tippy from '@tippyjs/react/headless';
import { forwardRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Globalstyle/Popper';
import MenuItems from './MenuItems';
import Styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import { useLocation } from 'react-router-dom';

const cx = classNames.bind(Styles);

const Menu = forwardRef(({ children, items = [], show, setShow, data = [], setLogin }, ref) => {
    const location = useLocation();
    const isHelpPage = location.pathname === '/help';

    const menuItems = (isHelpPage ? data : items).map((item, index) => (
        <MenuItems key={index} data={item} setShow={setShow} setLogin={setLogin} />
    ));

    return (
        <Tippy
            visible={show}
            onClickOutside={() => setShow(false)}
            interactive={true}
            placement="bottom-end"
            appendTo="parent"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{menuItems}</PopperWrapper>
                </div>
            )}
        >
            {/* Gán ref vào children chứ không phải trong render */}
            <div ref={ref}>{children}</div>
        </Tippy>
    );
});

export default Menu;
