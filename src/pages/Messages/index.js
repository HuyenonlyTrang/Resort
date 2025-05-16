import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Messages.module.scss';
import classNames from 'classnames/bind';
import { faAngleDown, faAngleUp, faBriefcase, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import AmenitiesPopup from '~/components/AmenitiesPopup';
import Tippy from '@tippyjs/react/headless';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(Styles);

function Messages() {
    const [show, setShow] = useState(false);
    const [focus, setFocus] = useState(false);
    const [atv, setAtv] = useState(null);
    const [up, setUp] = useState(false);
    const [text, setText] = useState('Tất cả');
    const inputRef = useRef(null);
    const togger = (btn) => {
        if (btn) {
            setAtv(btn);
        }
    };
    useEffect(() => {
        if (show && inputRef.current) {
            inputRef.current.focus();
        }
    }, [show]);
    const JOB = [
        {
            icon: faMessage,
            title: 'Tất cả',
        },
        {
            icon: faBriefcase,
            title: 'Việc đi lại',
        },
        {
            icon: faAirbnb,
            title: 'Hỗ trợ',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box_left')}>
                {show ? (
                    <div className={cx('input_search')}>
                        <label
                            htmlFor="click"
                            className={cx('box_input', {
                                box_focus: focus,
                            })}
                        >
                            <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                            <input
                                id="click"
                                ref={inputRef}
                                type="text"
                                placeholder="Tìm kiếm tất cả tin nhắn"
                                onFocus={() => {
                                    setFocus(true);
                                }}
                                onBlur={() => {
                                    setFocus(false);
                                }}
                            />
                        </label>
                        <button className={cx('button')} onClick={() => setShow(false)}>
                            Hủy
                        </button>
                    </div>
                ) : (
                    <div className={cx('top_messages')}>
                        <h2>Tin Nhắn</h2>
                        <div className={cx('right_top_icon')}>
                            <div
                                className={cx('box_icon', {
                                    box_active: show,
                                })}
                                onClick={() => {
                                    setShow(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div className={cx('box_icon')} onClick={() => togger(1)}>
                                <FontAwesomeIcon icon={faSliders} />
                            </div>
                        </div>
                    </div>
                )}
                <div className={cx('center_box')}>
                    <Tippy
                        visible={up}
                        onClickOutside={() => setUp(false)}
                        interactive={true}
                        placement="bottom"
                        appendTo="parent"
                        render={(attrs) => (
                            <div className={cx('box_all')} tabIndex="-1" {...attrs}>
                                {JOB.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setText(item.title);
                                            setUp(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    >
                        <div className={cx('all')} onClick={() => setUp((prev) => !prev)}>
                            <span>{text}</span>
                            {up ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                        </div>
                    </Tippy>
                    <div className={cx('all')}>Chưa đọc</div>
                </div>
                <div>
                    {text === 'Tất cả' ? (
                        <div>tất cả</div>
                    ) : text === 'Việc đi lại' ? (
                        <div>Việc đi lại</div>
                    ) : text === 'Hỗ trợ' ? (
                        <div>Hỗ trợ</div>
                    ) : null}
                </div>
                <AmenitiesPopup isOpen={atv === 1} onClose={() => setAtv(null)} />
            </div>
        </div>
    );
}

export default Messages;
