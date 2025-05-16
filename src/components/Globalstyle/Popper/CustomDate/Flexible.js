import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Date.module.scss';
import Button from '~/components/Button';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const months = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    month: `Tháng ${i + 1}`,
    year: 2025,
}));

function Flexible({ valueMonth, setValueMonth, valueDate, setValueDate }) {
    return (
        <div className={cx('flexible_wrapper')}>
            <h4>Bạn muốn ở trong nay bao lâu ? </h4>
            <div>
                <Button
                    rounded_present
                    className={cx({ activy: valueDate === 'Cuối tuần' })}
                    onClick={() => setValueDate('Cuối tuần')}
                >
                    Cuối tuần
                </Button>
                <Button
                    rounded_present
                    className={cx({ activy: valueDate === 'Tuần Bất Kì' })}
                    onClick={() => setValueDate('Tuần bất kì')}
                >
                    Tuần
                </Button>
                <Button
                    rounded_present
                    className={cx({ activy: valueDate === '1 Tháng' })}
                    onClick={() => setValueDate('1 Tháng')}
                >
                    1 Tháng
                </Button>
            </div>
            <h4 style={{ marginTop: '37px' }}>Bạn muốn đi khi nào ?</h4>
            <div className={cx('flexible_months')}>
                {months.map((month) => (
                    <button
                        className={cx('flexible_month')}
                        key={month.id}
                        onClick={() => {
                            setValueMonth((prev) => [...prev, month.month]);
                        }}
                    >
                        <FontAwesomeIcon icon={faCalendar} className={cx('flexible_icon')} />
                        <h3>{month.month}</h3>
                        <p>{month.year}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Flexible;
