import classNames from 'classnames/bind';
import Styles from '../Hosting.module.scss';
import { useState, useEffect } from 'react';
import { faCheckToSlot, faContactCard, faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(Styles);
const LIST = [
    {
        title: 'Sắp trả phòng',
        id: 0,
    },
    {
        title: 'Hiện đang đón tiếp',
        id: 1,
    },
    {
        title: 'Sắp đến',
        id: 2,
    },
    {
        title: 'Sắp tới',
        id: 3,
    },
    {
        title: 'Đánh giá đang chờ xử lý',
        id: 4,
    },
];
const LISTTWO = [
    {
        id: 0,
        title: 'Bạn không có khách nào trả phòng vào hôm nay hoặc ngày mai.',
    },
    {
        id: 1,
        title: 'Bạn không có khách nào hiện đang ở chỗ của bạn.',
    },
    {
        id: 2,
        title: 'Bạn không có khách nào đến vào hôm nay hay ngày mai.',
    },
    {
        id: 3,
        title: 'Hiện bạn không có vị khách nào sắp tới.',
    },
    {
        id: 4,
        title: 'Bạn hiện không có đánh giá nào cần viết cho khách.',
    },
];
function Home() {
    const [clickList, setClickList] = useState(() => {
        return JSON.parse(localStorage.getItem('clickList')) || 0;
    });
    useEffect(() => {
        localStorage.setItem('clickList', JSON.stringify(clickList));
    }, [clickList]);
    return (
        <>
            <div className={cx('container_header')}>
                <h2 style={{ fontSize: '3.5rem' }}>Hân hạnh chào đón Trang!</h2>
                <button className={cx('btn_home')}>Hoàn tất mục cho thuê của bạn</button>
            </div>
            <div className={cx('container_header')}>
                <h2>Đặt phòng/đặt chỗ của bạn</h2>
                <button className={cx('btn_line')}>Tất cả đặt phòng(0)</button>
            </div>
            <ul className={cx('container_list_ul')}>
                {LIST.map((item, index) => (
                    <li
                        key={index}
                        className={cx('li_item', {
                            black: clickList === index,
                        })}
                        onClick={() => setClickList(item.id)}
                    >
                        {item.title}(0)
                    </li>
                ))}
            </ul>
            <div className={cx('container_box')}>
                <div className={cx('box_icon')}>
                    <FontAwesomeIcon icon={faCheckToSlot} />
                </div>
                {LISTTWO.map((item) => (
                    <div key={item.id} className={cx('box_item')}>
                        {item.id === clickList && <p className={cx('text_li')}>{item.title}</p>}
                    </div>
                ))}
            </div>
            <div className={cx('container_bottom')}>
                <h2>Chúng tôi luôn sẵn sàng trợ giúp</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className={cx('box_bottom_home')}>
                        <FontAwesomeIcon icon={faPersonCirclePlus} className={cx('bottom_icon')} />
                        <div>
                            <p style={{ fontWeight: 600 }}>Tham gia Câu lạc bộ Chủ nhà tại địa phương</p>
                            <p>
                                Kết nối, cộng tác và chia sẻ với các Chủ nhà khác cũng như thành viên khác trong cộng
                                đồng
                            </p>
                        </div>
                    </div>
                    <div className={cx('box_bottom_home')}>
                        <FontAwesomeIcon icon={faContactCard} className={cx('bottom_icon')} />
                        <div>
                            <p style={{ fontWeight: 600 }}>Liên hệ hỗ trợ đặc biệt</p>
                            <p>
                                Là chủ nhà mới,bạn có thể liên hệ với nhà hỗ trợ đã được đào tạo đặc biệt với tháo tác
                                nhấn
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container_bottom')}>
                <h2>Tài nguyên và mẹo</h2>
            </div>
        </>
    );
}

export default Home;
