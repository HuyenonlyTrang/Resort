import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Bill.module.scss';
import Image from '~/Image/airbnb-seeklogo.png';
import Tippy from '@tippyjs/react/headless';
import Litepicker from 'litepicker';
import 'litepicker/dist/css/litepicker.css';
import AmenitiesPopup from '~/components/AmenitiesPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleLeft,
    faAngleUp,
    faCheck,
    faDownload,
    faInbox,
    faMedal,
    faMinus,
    faMoneyBills,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { format, parse, subDays } from 'date-fns';
import { vi } from 'date-fns/locale';
import { useEffect, useState, useRef } from 'react';
import { faCircle, faCreditCard, faStar } from '@fortawesome/free-regular-svg-icons';
import { faAmazon, faFacebook } from '@fortawesome/free-brands-svg-icons';
import AmenitiesPopups from '~/components/AmenitiesPopups';

const cx = classNames.bind(Styles);

// Hàm chuyển đổi ngày từ "DD/MM/YYYY" sang Date object
const parseValidDate = (dateString) => {
    if (!dateString) return null;

    // Chuyển từ "20/03/2025" → Date object
    const date = parse(dateString, 'dd/MM/yyyy', new Date());

    return isNaN(date) ? null : date; // Kiểm tra nếu là ngày hợp lệ
};

// Hàm format ngày tháng
const formatDateRange = (checkin, checkout) => {
    if (!checkin || !checkout) return 'Ngày không hợp lệ';

    return `${format(checkin, 'd', { locale: vi })} – ${format(checkout, "d 'thg' M", { locale: vi })}`;
};
const thanhtoan = (checkin) => {
    if (!checkin) return 'Ngày không hợp lệ';
    // Trừ đi 5 ngày
    const checkinTru5Ngay = subDays(new Date(checkin), 5);

    return format(checkinTru5Ngay, "d 'thg' M ',' Y", { locale: vi });
};
const cancel = (checkin) => {
    if (!checkin) return 'Ngày không hợp lệ';
    // Trừ đi 1 ngày
    const checkinTru1Ngay = subDays(new Date(checkin), 1);
    return format(checkinTru1Ngay, "d 'thg' M ", { locale: vi });
};
const checkin_one = (checkin) => {
    if (!checkin) return 'Ngày không hợp lệ';
    return format(checkin, "d 'thg' M ", { locale: vi });
};

const COUTRY = [
    {
        id: 1,
        title: 'Ả Rập Xê-út',
    },
    {
        id: 2,
        title: 'Ai cập',
    },
    {
        id: 3,
        title: 'Algeria',
    },
    {
        id: 4,
        title: 'Angola',
    },
    {
        id: 5,
        title: 'Áo',
    },
    {
        id: 6,
        title: 'Việt Nam',
    },
];
const PHONE = [
    {
        title: 'Việt Nam(+84)',
        value: '+84',
    },
    {
        title: 'Pháp(+123)',
        value: '+123',
    },
];

function Bill() {
    //
    const location = useLocation();
    const roomData = location.state?.roomData || 'Can truyen';
    const custom = location.state?.custom || 'Không xác định';
    const tax = location.state?.tax;
    const day = location.state?.day;
    const sum = location.state?.sum;
    const serviceFee = location.state?.serviceFee;
    const [dateRange, setDateRange] = useState(location.state?.dateRange || { checkin: '', checkout: '' });
    //
    const [expiry, setExpiry] = useState('');
    const [card, setCard] = useState('');
    const [cvv, setCvv] = useState('');
    const [phone, setPhone] = useState('');
    const [mabuuchinh, setMabuuchinh] = useState('');
    const [quocgia, setQuocgia] = useState('Việt Nam');
    const [reverse, setReverse] = useState(false);
    const [inputone, setInputone] = useState(false);
    const [inputtwo, setInputtwo] = useState(false);
    const [inputthree, setInputthree] = useState(false);
    const [inputFor, setInputFor] = useState(false);
    const [inputFire, setInputFire] = useState(false);
    const [inputblur_one, setInputblur_one] = useState(false);
    const [inputblur_two, setInputblur_two] = useState(false);
    const [inputblur_three, setInputblur_three] = useState(false);
    const [inputblur_fire, setInputblur_fire] = useState(false);
    const [inputblur, setInputblur] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const [error, setError] = useState(false);
    const [atv, setAtv] = useState('');
    const [image, setImage] = useState(null);
    const [dong, setDong] = useState(false);
    const [click, setClick] = useState(1);
    const [isPhone, setIsPhone] = useState(false);
    const [country, setCountry] = useState('+84');
    const [payOne, setPayOne] = useState(true);
    const [payTwo, setPayTwo] = useState(false);
    const calendarRef = useRef(null);
    const pickerRef = useRef(null);
    const [text, setText] = useState('');
    const [textOne, setTextOne] = useState('');
    const [items, setItems] = useState([
        { title: 'Người lớn', age: 'Từ 18 tuổi', count: 0 },
        { title: 'Trẻ em', age: 'Từ 2 - 17 tuổi', count: 0 },
        { title: 'Em bé', age: 'Dưới 2 tuổi', count: 0 },
        { title: 'Thú cưng', age: 'Bạn có mang theo thú cưng ?', count: 0 },
    ]);
    const [night, setNight] = useState('');
    const [change, setChange] = useState('');
    const [tempDateRange, setTempDateRange] = useState({ checkin: '', checkout: '' });
    const [finalDateRange, setFinalDateRange] = useState({ checkin: '', checkout: '' });

    //
    const checkin = parseValidDate(dateRange.checkin);
    const checkout = parseValidDate(dateRange.checkout);
    const checkinOne = parseValidDate(finalDateRange.checkin);
    const checkoutOne = parseValidDate(finalDateRange.checkout);
    const fire = tax / 5;
    const remain = tax - tax / 5;
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const Card = (value) => {
        // Ép kiểu thành chuỗi và loại bỏ tất cả ký tự không phải số
        value = String(value).replace(/\D/g, '').slice(0, 16);
        // Chia chuỗi thành các nhóm 4 số
        return value.replace(/(\d{4})(?=\d)/g, '$1 ');
    };
    const Cvv = (value) => {
        value = value.replace(/\D/g, '');
        if (value.length > 3) {
            value = value.slice(0, 4);
        }
        return value;
    };
    const Phone = (value) => {
        // Ép kiểu thành chuỗi và loại bỏ tất cả ký tự không phải số
        value = String(value).replace(/\D/g, '').slice(0, 12);
        // Chia chuỗi thành các nhóm 4 số
        return value.replace(/(\d{3})(?=\d)/g, '$1 ');
    };
    //nhap so input chi cho phep nhanh 2 so
    const formatExpiry = (value) => {
        value = value.replace(/\D/g, ''); // Chỉ cho phép số
        if (value.length > 2) {
            value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
        }
        return value;
    };
    const handleReverse = () => {
        setReverse((prev) => !prev);
    };
    const togger = (button) => {
        setAtv(button);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // lay file dau tien
        if (file) {
            const reader = new FileReader(); // Tạo FileReader
            reader.onload = (e) => {
                setImage(e.target.result); // Lưu đường dẫn ảnh để hiển thị
            };
            reader.readAsDataURL(file); // Bắt đầu đọc file
        }
    };
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0, // Không hiển thị số thập phân nếu không cần
        }).format(amount);
    };

    useEffect(() => {
        if (!calendarRef.current) return;

        if (pickerRef.current) {
            pickerRef.current.destroy();
        }

        pickerRef.current = new Litepicker({
            element: calendarRef.current,
            inlineMode: true,
            singleMode: false,
            format: 'DD/MM/YYYY',
            numberOfMonths: 2,
            numberOfColumns: 2,
            autoApply: true,
            minDate: new Date(),
            startDate: tempDateRange.checkin || dateRange.checkin || new Date(),
            endDate: tempDateRange.checkout || dateRange.checkout || null,
            setup: (picker) => {
                picker.on('selected', (startDate, endDate) => {
                    setTempDateRange({
                        checkin: startDate?.format('DD/MM/YYYY') || '',
                        checkout: endDate?.format('DD/MM/YYYY') || '',
                    });
                });
            },
        });

        return () => pickerRef.current?.destroy();
    }, [tempDateRange, atv, dateRange.checkin, dateRange.checkout]); // Cập nhật theo tempDateRange

    useEffect(() => {
        if (tempDateRange.checkin && tempDateRange.checkout) {
            const start = new Date(tempDateRange.checkin.split('/').reverse().join('/'));

            const end = new Date(tempDateRange.checkout.split('/').reverse().join('/'));

            const nights = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Chuyển từ ms sang ngày
            setNight(nights);
        }
    }, [tempDateRange]);

    const handleIncrease = (index) => {
        const newItems = [...items];
        newItems[index].count += 1;
        setItems(newItems);
        setText(newItems.map((item) => item.count).reduce((a, b) => a + b, 0));
    };

    const handleDecrease = (index) => {
        if (items[index].count > 0) {
            const newItems = [...items];
            newItems[index].count -= 1;
            setItems(newItems);
            setText(newItems.map((item) => item.count).reduce((a, b) => a + b, 0));
        }
    };
    const handleSave = () => {
        if (tempDateRange.checkin || tempDateRange.checkout || (dateRange.checkin && dateRange.checkout)) {
            setFinalDateRange(tempDateRange); // Cập nhật giá trị chính thức
            setAtv(null);
        }
    };

    const handleDelete = () => {
        setTempDateRange({ checkin: '', checkout: '' }); // Xóa ngày tạm thời
        setDateRange({ checkin: '', checkout: '' }); // Cập nhật dateRange
        // Nếu picker vẫn còn tồn tại, cập nhật lại Litepicker
        if (pickerRef.current) {
            pickerRef.current.clearSelection();
        }
    };

    return (
        <div className={cx('wrapper_Bill')}>
            <header className={cx('header_Bill')}>
                <div className={cx('fix')}>
                    <img src={Image} alt="Logo" />
                </div>
            </header>
            <div className={cx('container_Bill')}>
                <div className={cx('left')}>
                    <div className={cx('top_left')}>
                        <div>
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                className={cx('left_icon')}
                                onClick={() => {
                                    window.history.back();
                                }}
                            />
                            <h1>Xác nhận và thanh toán</h1>
                        </div>
                        <p className={cx('title_left')}>Chuyến đi của bạn</p>
                        <div className={cx('div_left_one')}>
                            <div className={cx('div_left_two')}>
                                <span className={cx('text')}>Ngày</span>
                                <span className={cx('tex_one')} onClick={() => togger(12)}>
                                    {finalDateRange.checkin && finalDateRange.checkout
                                        ? formatDateRange(checkinOne, checkoutOne)
                                        : dateRange.checkin && dateRange.checkout
                                        ? formatDateRange(checkin, checkout)
                                        : 'Cần thêm ngày'}
                                </span>
                            </div>
                            <span
                                className={cx('edit')}
                                onClick={() => {
                                    togger(12);
                                }}
                            >
                                Chỉnh sửa
                            </span>
                        </div>
                        <div className={cx('div_left_one')}>
                            <div className={cx('div_left_two')}>
                                <span className={cx('text')}>Khách</span>
                                <span className={cx('tex_one')}>{textOne ? textOne : custom} khách</span>
                            </div>
                            <span className={cx('edit')} onClick={() => togger(13)}>
                                Chỉnh sửa
                            </span>
                        </div>
                    </div>
                    <div className={cx('top_pay')}>
                        <h2>Chọn cách thanh toán </h2>
                        <div>
                            <div
                                className={cx('div_pay', {
                                    div_pay_one: payOne,
                                    check: payOne,
                                })}
                                onClick={() => {
                                    setPayOne(true);
                                    setPayTwo(false);
                                }}
                            >
                                <span>Thanh toán ngày {formatCurrency(tax)}</span>
                                <span className={cx('round')}>
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className={cx('round_two', { icon_round: payOne })}
                                    />
                                </span>
                            </div>
                            <div
                                className={cx('div_pay', {
                                    div_pay_one: payTwo,
                                    check: payTwo,
                                })}
                                onClick={() => {
                                    setPayTwo(true);
                                    setPayOne(false);
                                }}
                            >
                                <p>Trả ngay một phần, phần còn lại trả sau</p>
                                <span>
                                    Cần thanh toán {formatCurrency(fire)} vào hôm nay và {formatCurrency(remain)} vào{' '}
                                    {thanhtoan(checkin)}. Không có phụ phí.
                                    <span className={cx('text_two')} onClick={() => togger(5)}>
                                        Thông tin thêm
                                    </span>
                                </span>
                                <AmenitiesPopup isOpen={atv === 5} onClose={() => setAtv(null)}>
                                    <div className={cx('box_pay')}>
                                        <div>
                                            <h2>Trả ngay một phần, phần còn lại trả sau</h2>
                                            <p>
                                                Bạn có thể trả ngay một phần cho đặt phòng này và thanh toán phần còn
                                                lại sau. Không mất phí bổ sung.
                                            </p>
                                        </div>
                                        <div>
                                            <p className={cx('text')}>Trả ngay một phần tổng chi phí</p>
                                            <p>Xác nhận đặt phòng bằng cách trả một phần trong tổng chi phí.</p>
                                        </div>
                                        <div>
                                            <p className={cx('text')}>Thanh toán phần còn lại trước khi nhận phòng</p>
                                            <p>
                                                Chúng tôi sẽ trừ tiền từ phương thức thanh toán ban đầu của bạn vào ngày
                                                thanh toán lần hai.
                                            </p>
                                        </div>
                                        <div>
                                            <p className={cx('text')}>Thanh toán được thực hiện tự động</p>
                                            <p>
                                                Đừng lo lắng, chúng tôi sẽ nhắc bạn 3 ngày trước khi đến lần thanh toán
                                                tiếp theo.
                                            </p>
                                        </div>
                                        <p className={cx('text_two')}>Có áp dụng các điều khoản</p>
                                    </div>
                                </AmenitiesPopup>
                                <span className={cx('round')}>
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className={cx('round_two', { icon_round: payTwo })}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('top_payment')}>
                        <div className={cx('payment_top')}>
                            <h2>Thanh toán bằng </h2>
                            <div>
                                <img
                                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                                    alt=""
                                />
                                <img
                                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <Tippy
                            visible={reverse}
                            onClickOutside={() => setReverse(false)}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className={cx('tippy_payment')} tabIndex="-1" {...attrs}>
                                    <div className={cx('payment_top_two')}>
                                        <div>
                                            <FontAwesomeIcon icon={faCreditCard} />
                                            <span>Thẻ tín dụng hoặc thẻ ghi nợ</span>
                                        </div>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                </div>
                            )}
                        >
                            <div
                                className={cx('payment_top_two', {
                                    hover: !reverse,
                                })}
                                onClick={handleReverse}
                            >
                                <div>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                    <span>Thẻ tín dụng hoặc thẻ ghi nợ</span>
                                </div>
                                {reverse ? (
                                    <FontAwesomeIcon icon={faAngleUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleDown} />
                                )}
                            </div>
                        </Tippy>
                        <div>
                            <div className={cx('payment_input')}>
                                <label
                                    htmlFor="input_one"
                                    className={cx('label_one', {
                                        blur_one: inputblur_one && card.length < 16,
                                        focur: inputFocus && inputblur_one && card.length < 16,
                                    })}
                                    onClick={() => {
                                        setInputone(true);
                                    }}
                                >
                                    <p className={cx(inputone ? 'text_p' : 'nottext_p')}>Số thẻ</p>
                                    {inputone && (
                                        <input
                                            type="text"
                                            id="input_one"
                                            placeholder="0000 0000 0000 0000"
                                            value={card}
                                            onChange={(e) => setCard(Card(e.target.value))}
                                            onBlur={() => {
                                                setInputblur_one(true);
                                                setInputFocus(false);
                                            }}
                                            onFocus={() => {
                                                setInputFocus(true);
                                            }}
                                        />
                                    )}
                                </label>
                                <div className={cx('payment_div_label')}>
                                    <label
                                        className={cx({
                                            blur_two: inputblur_two && expiry < 2,
                                            focur: inputFocus && inputblur_two && expiry < 2,
                                        })}
                                        htmlFor="input_two"
                                        onClick={() => {
                                            setInputtwo(true);
                                        }}
                                    >
                                        <p className={cx(inputtwo ? 'text_p' : 'nottext_p')}>Ngày hết hạn</p>
                                        {inputtwo && (
                                            <input
                                                id="input_two"
                                                type="text"
                                                placeholder="MM / YY"
                                                value={expiry}
                                                maxLength="7"
                                                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                                onBlur={() => {
                                                    setInputblur_two(true);
                                                    setInputFocus(false);
                                                }}
                                                onFocus={() => {
                                                    setInputFocus(true);
                                                }}
                                            />
                                        )}
                                    </label>
                                    <label
                                        className={cx({
                                            blur_three: inputblur_three && cvv < 4,
                                            focur: inputFocus && inputblur_three && cvv < 4,
                                        })}
                                        htmlFor="input_three"
                                        onClick={() => setInputthree(true)}
                                    >
                                        <p className={cx(inputthree ? 'text_p' : 'nottext_p')}>CVV</p>
                                        {inputthree && (
                                            <input
                                                type="text"
                                                id="input_three"
                                                placeholder="123"
                                                value={cvv}
                                                onChange={(e) => setCvv(Cvv(e.target.value))}
                                                onBlur={() => {
                                                    setInputblur_three(true);
                                                    setInputFocus(false);
                                                }}
                                                onFocus={() => {
                                                    setInputFocus(true);
                                                }}
                                            />
                                        )}
                                    </label>
                                </div>
                            </div>
                            {inputblur_one && inputone && card.length < 16 ? (
                                <span className={cx('error')}>Kiểm tra số thẻ của bạn.</span>
                            ) : inputblur_two && inputtwo && expiry.length < 2 ? (
                                <span className={cx('error')}>Kiểm tra ngày hết hạn của bạn.</span>
                            ) : inputblur_three && inputthree && cvv.length < 4 ? (
                                <span className={cx('error')}>Kiểm tra CVV của bạn.</span>
                            ) : null}
                        </div>

                        <div>
                            <div className={cx('payment_input')}>
                                <label
                                    htmlFor="input_for"
                                    className={cx({
                                        blur_for: inputblur && !inputFocus && mabuuchinh.length === 0,
                                    })}
                                    onClick={() => setInputFor(true)}
                                >
                                    <p className={cx(inputFor ? 'text_p' : '')}>Mã bưu chính</p>
                                    <input
                                        id="input_for"
                                        type="text"
                                        value={mabuuchinh}
                                        onChange={(e) => setMabuuchinh(e.target.value)}
                                        onBlur={() => {
                                            setInputblur(true);
                                            setInputFocus(false);
                                            if (mabuuchinh.trim() === '') {
                                                setError(true);
                                            } else {
                                                setError(false);
                                            }
                                        }}
                                        onFocus={() => {
                                            setInputFocus(true);
                                        }}
                                    />
                                </label>
                            </div>
                            {error && <span className={cx('error')}>Thông tin này là bắc buộc</span>}
                        </div>
                        <div className={cx('payment_input')} onClick={() => togger(1)}>
                            <label>
                                <p>Quốc gia/khu vực</p>
                                <input value={quocgia} readOnly />
                            </label>
                        </div>
                        <AmenitiesPopup isOpen={atv === 1} onClose={() => setAtv(null)}>
                            <span className={cx('box_one_span')}>Quốc gia/Khu vực</span>
                            <div className={cx('box_one')}>
                                {COUTRY.map((item) => (
                                    <div
                                        className={cx('box_one_div')}
                                        key={item.id}
                                        onClick={() => {
                                            setQuocgia(item.title);
                                            setClick(item.id);
                                            setAtv(null);
                                        }}
                                    >
                                        <span>{item.title}</span>
                                        {click === item.id && <FontAwesomeIcon icon={faCheck} />}
                                    </div>
                                ))}
                            </div>
                        </AmenitiesPopup>
                    </div>
                    <div className={cx('top_mandatory')}>
                        <h2>Bắt buộc cho chuyến đi của bạn</h2>
                        <div className={cx('top_mandatory_div')}>
                            <div className={cx('top_avt')}>
                                <span className={cx('text')}>Ảnh đại diện</span>
                                <span className={cx('tex_one')}>Chủ nhà muốn biết người sẽ ở nhà họ là ai.</span>
                            </div>
                            <span className={cx('top_button')} onClick={() => togger(3)}>
                                Thêm
                            </span>
                            <AmenitiesPopup isOpen={atv === 3} onClose={() => setAtv(null)}>
                                <span className={cx('box_one_span')}>Thêm ảnh đại diện</span>
                                <div className={cx('box_two_div')}>
                                    {image ? (
                                        <img src={image} alt="" />
                                    ) : (
                                        <img
                                            src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/account-activation-shared/images/dls19_user_pic.73f51bce14da5e9d49c22a8bc31a7d13.png"
                                            alt=""
                                        />
                                    )}
                                    <p>
                                        Hãy chọn một ảnh chụp rõ khuôn mặt của bạn. Chủ nhà sẽ không xem được ảnh đại
                                        diện của bạn cho đến khi xác nhận yêu cầu đặt phòng.
                                    </p>

                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        className={cx('button_two')}
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                                        <span>Sử dụng ảnh trên Facebook</span>
                                    </a>
                                    <label htmlFor="file-upload" className={cx('button_three')}>
                                        <FontAwesomeIcon icon={faDownload} className={cx('icon')} />
                                        Tải ảnh lên
                                        <input
                                            type="file"
                                            id="file-upload"
                                            accept="image/*"
                                            onChange={(e) => handleImageChange(e)}
                                        />
                                    </label>
                                </div>
                            </AmenitiesPopup>
                        </div>
                        <div className={cx('top_mandatory_div')}>
                            <div className={cx('top_avt')}>
                                <span className={cx('text')}>Số điện thoại</span>
                                <span className={cx('tex_one')}>
                                    Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật về chuyến đi.
                                </span>
                            </div>
                            <span className={cx('top_button')} onClick={() => togger(4)}>
                                Thêm
                            </span>
                            <AmenitiesPopup isOpen={atv === 4} onClose={() => setAtv(null)}>
                                <span className={cx('box_one_span')}>Thêm số điện thoại</span>
                                <div className={cx('box_three')}>
                                    <span>
                                        <p className={cx('box_three_p')}>
                                            Chúng tôi sẽ gửi cho bạn thông tin cập nhật về chuyến đi cùng một tin nhắn
                                            để xác minh số điện thoại này.
                                        </p>
                                        <div className={cx('payment_input')}>
                                            <div
                                                className={cx('box_three_div', 'label_one')}
                                                onClick={() => setDong(true)}
                                            >
                                                <div>
                                                    <p>Quốc gia/Khu vực</p>
                                                    <p>Việt Nam(+84)</p>
                                                </div>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </div>
                                            <AmenitiesPopups isOpen={dong} onClose={() => setDong(false)}>
                                                {PHONE.map((item, index) => (
                                                    <div key={index} onClick={() => setCountry(item.value)}>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </AmenitiesPopups>

                                            {/*  */}
                                            <label
                                                htmlFor="input_fire"
                                                onClick={() => setInputFire(true)}
                                                className={cx({
                                                    blur_for:
                                                        inputblur_fire && isPhone && !inputFocus && phone.length < 11,
                                                    focur: isPhone && inputFocus && phone.length < 3,
                                                })}
                                            >
                                                <p className={cx(inputFire ? 'text_p' : 'nottext_p')}>Số điện thoại</p>
                                                {inputFire && (
                                                    <div className={cx('div_phone_input')}>
                                                        <span
                                                            className={cx({
                                                                black: phone.length > 0,
                                                            })}
                                                        >
                                                            {country}
                                                        </span>
                                                        <input
                                                            type="text"
                                                            id="input_fire"
                                                            value={phone}
                                                            onChange={(e) => setPhone(Phone(e.target.value))}
                                                            onBlur={() => {
                                                                setInputblur_fire(true);
                                                                setInputFocus(false);
                                                            }}
                                                            onFocus={() => {
                                                                setInputFocus(true);
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (phone.length < 11) {
                                                setIsPhone(true);
                                            } else {
                                                setIsPhone(false);
                                            }
                                        }}
                                    >
                                        Tiếp tục
                                    </button>
                                </div>
                            </AmenitiesPopup>
                        </div>
                    </div>
                    <div className={cx('top_cancel')}>
                        <h2>Chính sách hủy</h2>
                        <span>
                            Hủy miễn phí trước {cancel(checkin)}.Bạn được hoàn tiền một phần nếu hủy trước khi nhận
                            phòng vào ngày {checkin_one(checkin)}.
                            <span className={cx('text_two')} onClick={() => togger(8)}>
                                Tìm hiểu thêm
                            </span>
                        </span>
                        <AmenitiesPopup isOpen={atv === 8} onClose={() => setAtv(null)}>
                            <div className={cx('box_cancel')}>
                                <h2>Chính sách hủy</h2>
                                <div className={cx('before')}>
                                    <div className={cx('box_left')}>
                                        <span className={cx('text')}>Trước</span>
                                        <span> {cancel(checkin)}</span>
                                        <span>{roomData.time}</span>
                                    </div>
                                    <div className={cx('right_box')}>
                                        <p className={cx('text')}>Hoàn tiền đầy đủ </p>
                                        <p>Nhận lại 100% số tiền bạn đã thanh toán</p>
                                    </div>
                                </div>
                                <div className={cx('after')}>
                                    <div className={cx('box_left')}>
                                        <span className={cx('text')}>Sau</span>
                                        <span>{checkin_one(checkin)}</span>
                                        <span>{roomData.time}</span>
                                    </div>
                                    <div className={cx('right_box')}>
                                        <p className={cx('text')}>Hoàn tiền một phần </p>
                                        <p>
                                            Nhận lại 50% chi phí tất cả các đêm, ngoại trừ đêm đầu tiên. Không được hoàn
                                            lại phí dịch vụ hoặc chi phí cho đêm đầu tiên.
                                        </p>
                                    </div>
                                </div>
                                <p>Bạn sẽ được hoàn phí vệ sinh nếu như hủy trước khi nhận phòng</p>
                                <p className={cx('text_two')}>Tìm hiểu thêm về các chính sách hủy</p>
                            </div>
                        </AmenitiesPopup>
                    </div>
                    <div className={cx('top_standard')}>
                        <h2>Quy chuẩn chung</h2>
                        <p>
                            Chúng tôi yêu cầu tất cả khách phải ghi nhớ một số quy chuẩn đơn giản để làm một vị khách
                            tuyệt vời.
                        </p>
                        <ul>
                            <li>Tuân thủ nội quy nhà</li>
                            <li>Giữ gìn ngôi nhà như thể đó là nhà bạn</li>
                        </ul>
                    </div>
                    <div className={cx('bottom_left')}>
                        <p>
                            Bằng việc chọn nút bên dưới, tôi đồng ý với
                            <span onClick={() => togger(9)} className={cx('span_note')}>
                                Nội quy nhà của Chủ nhà
                            </span>
                            ,
                            <Link to="./noiquychung" className={cx('span_note')}>
                                Quy chuẩn chung đối với khách
                            </Link>
                            ,
                            <span onClick={() => togger(10)} className={cx('span_note')}>
                                Chính sách đặt lại và hoàn tiền của Airbnb
                            </span>
                            , và đồng ý rằng Airbnb có thể
                            <span onClick={() => togger(11)} className={cx('span_note')}>
                                tính phí vào phương thức thanh toán của tôi
                            </span>
                            nếu tôi phải chịu trách nhiệm về thiệt hại.
                        </p>
                        <button className={cx('bottom_button')}>Xác nhận và thanh toán</button>
                    </div>
                    <AmenitiesPopup
                        isOpen={atv === 9 || atv === 10 || atv === 11 || atv === 12 || atv === 13}
                        onClose={() => setAtv(null)}
                    >
                        {atv === 9 ? (
                            <div className={cx('noiquy')}>
                                <div className={cx('note_div_one')}>
                                    <h2>Nội quy nhà</h2>
                                    <span>
                                        Vì nơi bạn ở là nhà riêng của người khác nên hãy cẩn thận và tôn trọng khi sử
                                        dụng nhé.
                                    </span>
                                </div>
                                <div className={cx('note_div_two')}>
                                    <p>Nhận và trả phòng</p>
                                    {roomData.note_house.house_rules.check_in_out.map((item, index) => (
                                        <div key={index}>
                                            <FontAwesomeIcon icon={item.icon} className={cx('item_icon')} />
                                            <>{item.title}</>
                                            {item.time && <span className={cx('span_two')}>{item.time}</span>}
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('note_div_three')}>
                                    <p>Trong thời gian ở</p>
                                    {roomData.note_house.house_rules.time.map((item, index) => (
                                        <div key={index}>
                                            <FontAwesomeIcon icon={item.icon} className={cx('item_icon')} />
                                            <span>{item.title}</span>
                                            <>{item.time && <span className={cx('span_two')}>{item.time}</span>}</>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : atv === 10 ? (
                            <>
                                <span className={cx('box_ten_chinhsach')}>Chính sách đặt lại và bồi hoàn</span>
                                <div className={cx('box_ten')}>
                                    <p>
                                        Nếu Chủ nhà hủy đặt phòng trước thời điểm nhận phòng, bạn sẽ tự động được hoàn
                                        tiền đầy đủ. Nếu Chủ nhà hủy trước thời điểm nhận phòng 30 ngày hoặc muộn hơn,
                                        chúng tôi cũng sẽ hỗ trợ bạn tìm chỗ ở tương đương hoặc tốt hơn.
                                    </p>
                                    <p>
                                        Các Vấn đề khác về đi lại phải được báo cáo cho chúng tôi không muộn hơn 72 giờ
                                        kể từ khi phát hiện. Nếu chúng tôi xác định rằng Vấn đề về đi lại đã làm gián
                                        đoạn thời gian ở, chúng tôi sẽ hoàn tiền đầy đủ hoặc một phần, và tùy từng
                                        trường hợp, có thể hỗ trợ khách tìm chỗ ở tương đương hoặc tốt hơn. Số tiền hoàn
                                        lại sẽ phụ thuộc vào mức độ nghiêm trọng của Vấn đề về đi lại, mức độ ảnh hưởng
                                        đến bạn, phần thời gian bị ảnh hưởng trong toàn bộ kỳ ở và việc bạn có tiếp tục
                                        ở lại chỗ đó hay không.
                                    </p>
                                    <Link to="/dieukhoan" className={cx('span_note')}>
                                        Đọc toàn bộ điều khoản
                                    </Link>
                                </div>
                            </>
                        ) : atv === 11 ? (
                            <>
                                <span className={cx('box_ten_chinhsach')}>Bị tính phí do thiệt hại</span>
                                <div className={cx('box_tinhphi')}>
                                    <p>
                                        Dù chỉ là hãn hữu nhưng sự cố hoàn toàn có thể xảy ra. Nếu bạn, người bạn mời
                                        đến hoặc thú cưng phải chịu trách nhiệm về thiệt hại trong thời gian ở, bạn có
                                        thể bị tính phí vào phương thức thanh toán của mình.
                                    </p>
                                    <div>
                                        <p className={cx('text_three')}>Tôi có thể bị tính phí vì lý do gì?</p>
                                        <p>
                                            Bạn có thể bị tính phí khi xảy ra thiệt hại, khi bất kỳ đồ đạc nào của Chủ
                                            nhà bị mất hoặc phải trả chi phí vệ sinh ngoài dự kiến phát sinh do thời
                                            gian bạn ở.
                                        </p>
                                    </div>
                                    <div>
                                        <p className={cx('text_three')}>Quy trình là như thế nào?</p>
                                        <p>
                                            Nếu bạn và Chủ nhà không thể thống nhất được cách xử lý trước, chúng tôi sẽ
                                            can thiệp để xác định người phải trách nhiệm. Chúng tôi sẽ chỉ tính phí vào
                                            phương thức thanh toán của bạn nếu có lý do để tin rằng bạn phải chịu trách
                                            nhiệm.
                                        </p>
                                    </div>
                                    <div>
                                        <p className={cx('text_three')}>Nếu tôi không đồng ý thì sao?</p>
                                        <p>Bạn sẽ có cơ hội khiếu nại nếu cho rằng chúng tôi đã nhầm lẫn.</p>
                                    </div>
                                </div>
                            </>
                        ) : atv === 12 ? (
                            <div className={cx('box_twelve')}>
                                <div className={cx('box_twelve_top')}>
                                    <div>
                                        <h2>{night ? `${night} đêm` : 'Chọn ngày'}</h2>
                                        <span>{!!night ? '' : 'Chọn tối thiểu 2 đêm'}</span>
                                    </div>
                                    <div>
                                        <input
                                            value={tempDateRange.checkin || dateRange.checkin || change}
                                            onChange={(e) => setChange(e.target.value)}
                                        />
                                        <input value={tempDateRange.checkout || dateRange.checkout || change} />
                                    </div>
                                </div>
                                <div className={cx('date_one_twelve')} ref={calendarRef}></div>
                                <div className={cx('box_twelve_bottom')}>
                                    <span onClick={() => handleDelete()}>Xóa Ngày</span>
                                    <span onClick={() => handleSave()}>Lưu</span>
                                </div>
                            </div>
                        ) : atv === 13 ? (
                            <div className={cx('box_cutoms')}>
                                <h2>Khách</h2>
                                <p className={cx('box_cutoms_p')}>
                                    Chỗ ở này cho phép tối đa 12 khách, không tính em bé. Nếu bạn mang theo nhiều hơn 2
                                    thú cưng, vui lòng báo cho Chủ nhà biết.
                                </p>
                                <div>
                                    {items.map((data, index) => (
                                        <div key={index} className={cx('customs-item')}>
                                            <div className={cx('customs-item-left')}>
                                                <h4>{data.title}</h4>
                                                <p>{data.age}</p>
                                            </div>
                                            <div className={cx('customs-item-right')}>
                                                <button onClick={() => handleDecrease(index)}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <p>{data.count}</p>
                                                <button onClick={() => handleIncrease(index)}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('box_bottom')}>
                                    <span onClick={() => setAtv(null)}>Hủy</span>
                                    <span
                                        onClick={() => {
                                            setTextOne(text);
                                            setAtv(null);
                                        }}
                                    >
                                        Lưu
                                    </span>
                                </div>
                            </div>
                        ) : null}
                    </AmenitiesPopup>
                </div>
                <div className={cx('right')}>
                    <div className={cx('box_right')}>
                        <div className={cx('top_right')}>
                            <img src={roomData.image_1} alt="" />
                            <div>
                                <p className={cx('heading')}>{roomData.heading}</p>
                                <p className={cx('style')}>{roomData.style}</p>
                                <div className={cx('div_right')}>
                                    <p>
                                        <FontAwesomeIcon icon={faStar} /> {roomData.start}({roomData.review} đánh giá)
                                    </p>
                                    {roomData.title_detail ? (
                                        <p>
                                            <FontAwesomeIcon icon={faMedal} /> {roomData.title_detail}
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={cx('center_right')}>
                            <h2>Chi tiết giá</h2>
                            <div className={cx('center_div')}>
                                <span className={cx('center_title')}>
                                    {roomData.money} x {day} đêm
                                </span>
                                <span>{formatCurrency(sum)}</span>
                            </div>
                            <div className={cx('center_div')}>
                                <span className={cx('bottom_title')}>Phí dịch vụ tại Airbnb</span>
                                <span>{formatCurrency(serviceFee)}</span>
                            </div>
                            {payTwo && (
                                <div className={cx('center_div')}>
                                    <span className={cx('text')}>Tổng(VND)</span>
                                    <span>{formatCurrency(tax)}</span>
                                </div>
                            )}
                        </div>
                        <div className={cx('bottom_right')}>
                            {payOne ? (
                                <div className={cx('center_div')}>
                                    <span className={cx('text')}>Tổng(VND)</span>
                                    <span>{formatCurrency(tax)}</span>
                                </div>
                            ) : payTwo ? (
                                <>
                                    <div className={cx('center_div')}>
                                        <span className={cx('text')}>Phải trả bây giờ</span>
                                        <span>{formatCurrency(fire)}</span>
                                    </div>
                                    <div className={cx('center_div')}>
                                        <span className={cx('text')}>Tính phí vào ngày {thanhtoan(checkin)}</span>
                                        <span>{formatCurrency(remain)}</span>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer_bottom')}>
                <div>
                    <ul>
                        <li>© 2025 Airbnb, Inc.</li>
                        <li>· Quyền riêng tư</li>
                        <li>· Điều khoản</li>
                        <li>· Sơ đồ trang web</li>
                    </ul>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faStar} />
                            Tiếng việt(VN)
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMoneyBills} />
                            VND
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAmazon} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInbox} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Bill;
