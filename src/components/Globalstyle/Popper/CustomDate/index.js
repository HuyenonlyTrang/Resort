import React, { useRef, useState, useEffect } from 'react';
import Litepicker from 'litepicker';
import 'litepicker/dist/css/litepicker.css';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Globalstyle/Popper';
import Styles from './Date.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';
import Month from './Month';
import Flexible from './Flexible';

const cx = classNames.bind(Styles);

function CustomDate({
    mode,
    setMode,
    monthText,
    dateRange,
    setDateRange,
    children,
    activeTab,
    setMonthText,
    valueDate,
    setValueDate,
    valueMonth,
    setValueMonth,
}) {
    const calendarRef = useRef(null); // Tham chiếu đến div hiển thị lịch
    const pickerRef = useRef(null); // Lưu instance Litepicker
    const [isVisible, setIsVisible] = useState(false); // Trạng thái bật/tắt popup lịch.

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initLitepicker = () => {
        if (pickerRef.current) {
            pickerRef.current.destroy(); // Cleanup instance cũ
        }

        pickerRef.current = new Litepicker({
            element: calendarRef.current,
            inlineMode: true, // ✅ Hiển thị lịch ngay trong div
            singleMode: false,
            format: 'DD/MM/YYYY',
            minDate: new Date().setHours(0, 0, 0, 0),
            numberOfMonths: 2,
            numberOfColumns: 2,
            autoApply: true,
            startDate: dateRange.checkin || new Date(),
            endDate: dateRange.checkout || null,
            setup: (picker) => {
                picker.on('selected', (startDate, endDate) => {
                    setDateRange({
                        checkin: startDate?.format('DD/MM/YYYY') || '',
                        checkout: endDate?.format('DD/MM/YYYY') || '',
                    });
                });
            },
        });
    };

    useEffect(() => {
        if (isVisible && mode === 'day' && calendarRef.current) {
            initLitepicker(); // 🔥 Luôn khởi tạo lại Litepicker khi quay lại mode 'day'
        }

        return () => {
            if (pickerRef.current) {
                pickerRef.current.destroy();
                pickerRef.current = null;
            }
        };
    }, [initLitepicker, isVisible, mode]);

    return (
        <div>
            <Tippy
                visible={isVisible}
                onClickOutside={() => setIsVisible(false)}
                interactive={true}
                placement="bottom"
                appendTo="parent"
                render={(attrs) => (
                    <div className={cx('calendar-container')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('calendar-wrapper')}>
                            {activeTab === 'accommodation' ? <Header setMode={setMode} /> : ''}
                            {/* Header của lịch */}
                            {mode === 'day' && <div ref={calendarRef} className={cx('calendar-content')}></div>}
                            {mode === 'month' && (
                                <div className={cx('calendar-content')}>
                                    <Month monthText={monthText} setMonthText={setMonthText} />
                                </div>
                            )}
                            {mode === 'flexible' && (
                                <div className={cx('calendar-content')}>
                                    <Flexible
                                        valueDate={valueDate}
                                        setValueDate={setValueDate}
                                        valueMonth={valueMonth}
                                        setValueMonth={setValueMonth}
                                    />
                                </div>
                            )}
                        </PopperWrapper>
                    </div>
                )}
            >
                {/* 🔥 Bấm vào mới hiện lịch */}
                <div onClick={() => setIsVisible((prev) => !prev)}>
                    <span>{children}</span>
                </div>
            </Tippy>
        </div>
    );
}

export default CustomDate;
