import classNames from 'classnames/bind';
import Styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

import { Map, Customs, CustomDate } from '~/components/Globalstyle/Popper';
import Button from '~/components/Button';
const cx = classNames.bind(Styles);
const SEARCH_PLACE = [
    {
        src: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320',
        title: 'Tim kiem linh hoat',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320',
        title: 'Chau Au',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320',
        title: 'Nhat Ban',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/42a1fb0f-214c-41ec-b9d7-135fbbdb8316.jpg?im_w=320',
        title: 'Uc',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/924d2b73-6c65-4d04-a2ad-bbc028299658.jpg?im_w=320',
        title: 'Thai Lan',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320',
        title: 'Hoa Ki',
    },
];

function Search({ transform, activeTab }) {
    const placeRef = useRef(null);
    const checkinRef = useRef(null);
    const checkoutRef = useRef(null);
    const customRef = useRef(null);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const [monthText, setMonthText] = useState('');
    const [mode, setMode] = useState('day'); // Mode ngày/tháng/linh hoạt
    const [activeButton, setActiveButton] = useState(null); // Để biết nút nào đang được nhấn
    const [dateRange, setDateRange] = useState({ checkin: '', checkout: '' });
    const [valueDate, setValueDate] = useState('Tuần');
    const [valueMonth, setValueMonth] = useState([]);

    const [items, setItems] = useState([
        { title: 'Người lớn', age: 'Từ 18 tuổi', count: 0 },
        { title: 'Trẻ em', age: 'Từ 2 - 17 tuổi', count: 0 },
        { title: 'Em bé', age: 'Dưới 2 tuổi', count: 0 },
        { title: 'Thú cưng', age: 'Bạn có mang theo thú cưng ?', count: 0 },
    ]);

    const handleMouseDown = (button) => {
        setActiveButton(button); // Ghi nhận nút đang được nhấn
    };

    const handleMouseUp = () => {
        setActiveButton(null); // Reset nút đang nhấn
    };
    const handleFocus = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };

    return (
        <div className={cx('search', { co: transform })}>
            {/* input */}
            <Map items={SEARCH_PLACE} onSelect={setValue}>
                <div
                    className={cx('place', { 'mouse-down': activeButton === 'place' })}
                    onClick={() => handleFocus(placeRef)}
                    onMouseDown={() => handleMouseDown('place')}
                    onMouseEnter={handleMouseUp} // con trỏ chuột rời khỏi phần tử mà nó đang đứng.
                >
                    <p className={cx('text')}>Địa Điểm</p>
                    <input
                        value={value}
                        ref={placeRef}
                        type="text"
                        placeholder="Tim kiem"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </Map>

            {/* Date */}

            {activeTab === 'accommodation' ? (
                mode === 'month' ? (
                    // Chỉ hiển thị 1 input khi chọn tháng
                    <CustomDate mode={mode} setMode={setMode} monthText={monthText} setMonthText={setMonthText}>
                        <div className={cx('date')}>
                            <div
                                className={cx('date_2', { 'mouse-down': activeButton === 'date_checkin' })}
                                onClick={() => handleFocus(checkinRef)}
                                onMouseDown={() => handleMouseDown('date_checkin')}
                                onMouseEnter={handleMouseUp}
                            >
                                <p className={cx('text')}>Thời gian</p>
                                <input ref={checkinRef} type="text" readOnly value={monthText} placeholder="..." />
                            </div>
                        </div>
                    </CustomDate>
                ) : mode === 'flexible' ? (
                    // Chỉ hiển thị 1 input khi chọn tháng
                    <CustomDate
                        mode={mode}
                        setMode={setMode}
                        valueDate={valueDate}
                        setValueDate={setValueDate}
                        valueMonth={valueMonth}
                        setValueMonth={setValueMonth}
                    >
                        <div className={cx('date')}>
                            <div
                                className={cx('date_2', { 'mouse-down': activeButton === 'date_checkin' })}
                                onClick={() => handleFocus(checkinRef)}
                                onMouseDown={() => handleMouseDown('date_checkin')}
                                onMouseEnter={handleMouseUp}
                            >
                                <p className={cx('text')}>Thời gian</p>
                                <input
                                    ref={checkinRef}
                                    type="text"
                                    readOnly
                                    value={`${valueDate} Vào ${[valueMonth] || 'Chọn tháng'}`}
                                    placeholder="Chọn tháng"
                                />
                            </div>
                        </div>
                    </CustomDate>
                ) : (
                    // Hiển thị check-in và check-out khi chọn ngày
                    <CustomDate
                        activeTab="accommodation"
                        mode={mode}
                        setMode={setMode}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                    >
                        <div className={cx('date')}>
                            <div
                                className={cx('date_checkin', { 'mouse-down': activeButton === 'date_checkin' })}
                                onClick={() => handleFocus(checkinRef)}
                                onMouseDown={() => handleMouseDown('date_checkin')}
                                onMouseEnter={handleMouseUp}
                            >
                                <p className={cx('text')}>Nhận Phòng</p>
                                <input
                                    ref={checkinRef}
                                    type="text"
                                    readOnly
                                    value={dateRange.checkin}
                                    placeholder="Chọn ngày"
                                />
                            </div>
                            <div
                                className={cx('date_checkout', { 'mouse-down': activeButton === 'date_checkout' })}
                                onClick={() => handleFocus(checkoutRef)}
                                onMouseDown={() => handleMouseDown('date_checkout')}
                                onMouseEnter={handleMouseUp}
                            >
                                <p className={cx('text')}>Trả Phòng</p>
                                <input
                                    ref={checkoutRef}
                                    type="text"
                                    readOnly
                                    value={dateRange.checkout}
                                    placeholder="Chọn ngày"
                                />
                            </div>
                        </div>
                    </CustomDate>
                )
            ) : activeTab === 'experience' ? (
                <CustomDate mode="day" activeTab="experience" dateRange={dateRange} setDateRange={setDateRange}>
                    {' '}
                    <div className={cx('date')}>
                        <div
                            className={cx('date_2', { 'mouse-down': activeButton === 'date_checkout' })}
                            onClick={() => handleFocus(checkoutRef)}
                            onMouseDown={() => handleMouseDown('date_checkout')}
                            onMouseEnter={handleMouseUp}
                        >
                            <p className={cx('text')}>Chọn ngày</p>
                            <input
                                ref={checkoutRef}
                                type="text"
                                readOnly
                                value={
                                    dateRange.checkin && dateRange.checkout
                                        ? `${dateRange.checkin} - ${dateRange.checkout}`
                                        : ''
                                }
                                placeholder="Chọn ngày"
                            />
                        </div>
                    </div>
                </CustomDate>
            ) : null}

            {/* custom */}
            <Customs mode={mode} setMode={setMode} items={items} setItems={setItems} onText={setText}>
                <div
                    className={cx('custom', { 'mouse-down': activeButton === 'custom' })}
                    onClick={() => handleFocus(customRef)}
                    onMouseDown={() => {
                        handleMouseDown('custom');
                        setShow((prev) => !prev);
                    }}
                    onMouseEnter={handleMouseUp}
                >
                    <div>
                        <p className={cx('text')}>Khách</p>
                        <p className={cx('text_1')}>{text ? text + ' Người' : 'Thêm Người'}</p>
                    </div>

                    <Button className={cx({ width: show })} rounded_red onClick={(e) => e.stopPropagation()}>
                        {/* stopPropagation() :  Ngăn chặn sự kiện lan truyền */}
                        <FontAwesomeIcon icon={faSearch} />
                        {show && <span>Tim kiem</span>}
                    </Button>
                </div>
            </Customs>
            {/* submit */}
        </div>
    );
}

export default Search;
