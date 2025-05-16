import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);
function Buttons({
    to,
    href,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    rounded_present = false,
    rounded_red = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    text = false,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        small,
        large,
        rounded_present,
        rounded_red,
        text,
        rounded,
        disabled,
    });
    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listeners when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Buttons;
