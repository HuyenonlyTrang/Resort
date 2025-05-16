import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItems({ data, setShow, setLogin }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={cx(classes)}
            to={data.to}
            onClick={() => {
                if (data.title === 'Đăng xuất') {
                    setLogin(false);
                } else if (data.title === 'Log In') {
                    setLogin(true);
                }

                setShow(false);
            }}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;
