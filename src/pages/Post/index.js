import classNames from 'classnames/bind';
import Styles from './Post.module.scss';
import Map from '~/components/Map';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faChevronCircleLeft,
    faHome,
    faLocationPin,
    faMinus,
    faPlay,
    faPlus,
    faSearch,
    faPause,
} from '@fortawesome/free-solid-svg-icons';
import AmenitiesPopup from '~/components/AmenitiesPopup';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(Styles);

const todo = {
    title: 'Hà Nội',
    height: '600px',
};

const Place = [
    {
        number: 1,
        title: 'Toàn bộ nhà',
    },
    {
        number: 2,
        title: 'Phòng riêng',
    },
];
const Plan = [
    {
        icon: faHome,
        title: 'Tạo mục cho thuê cho địa điểm của bạn chỉ trong vài bước',
    },
    {
        icon: faChevronCircleLeft,
        title: 'Tiếp tục với tốc độ riêng của bạn và thực hiện thay đổi bất cứ khi nào',
    },
    {
        icon: faMessage,
        title: 'Nhận hỗ trợ 1:1 từ các chủ nhà giàu kinh nghiệm bất kỳ lúc nào',
    },
];
const Conditions = [
    {
        title: 'Bảo vệ thiệt hại trị giá tối đa 3 triệu USD',
        icon: faCheck,
    },
    {
        title: 'Bảo hiểm trách nhiệm trị giá tối đa 1 triệu USD',
        icon: faCheck,
    },
    {
        title: 'Đường dây an toàn 24/24',
        icon: faCheck,
    },
];
const VIDEO = [
    {
        src: 'https://stream.media.muscache.com/zloG6NYW02XHNHOQyQL1a2Nn00HCkEHHfp01vq6O00lPLUA.mp4?v_q=high',
        title: 'Trình chỉnh sửa mục cho thuê',
        name: 'Giới thiệu từng chi tiết về nhà bạn',
    },
    {
        src: 'https://stream.media.muscache.com/aWJrkS4U1OZPMEAYeaXgDMJG00GSW0046fXLrHi9eShF4.mp4?v_q=high',
        title: 'Lịch',
        name: 'Quản lý tình trạng còn phòng và việc định giá',
    },
    {
        src: 'https://stream.media.muscache.com/NS1z701ZgXNLeqkVNZ02U3cI4h1O4QbsRaNdBDgrsYcTc.mp4?v_q=high',
        title: 'Tin nhắn',
        name: 'Nhắn tin nhanh cho khách và hỗ trợ',
    },
];

function Post() {
    const [zoomLevel, setZoomLevel] = useState(7);
    const [isFinished, setIsFinished] = useState(true);
    const [avt, setAvt] = useState(null);
    const [number, setNumber] = useState(2);
    const [text, setText] = useState('Toàn bộ nhà');
    const [type, setType] = useState(1);
    const [setup, setSetup] = useState(false);
    const [setnumber, setSetNumber] = useState(number);
    const money = 1207867;
    const [displayMoney, setDisplayMoney] = useState(money * 7); // Ban đầu hiển thị số tiền của zoomLevel = 7
    const videoRefs = useRef([]); // Tạo mảng ref
    console.log('videoRefs', videoRefs);
    const [playingIndex, setPlayingIndex] = useState(null);

    const handleRangeChange = (e) => {
        setZoomLevel(e.target.value);
        setIsFinished(false); // Khi thay đổi, giữ nguyên giá trị cũ
    };

    const handleRangeMouseUp = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 500); // Khi dừng lại, mới cập nhật số tiền
    };
    const togger = (btn) => {
        if (btn) {
            setAvt(btn);
        }
    };
    useEffect(() => {
        if (isFinished) {
            setDisplayMoney(1207867 * zoomLevel); // Khi hoàn tất, cập nhật số tiền mới
        }
    }, [isFinished, zoomLevel]); // Chạy khi isFinished = true

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(amount);
    };
    const handlePlus = () => {
        setNumber((prev) => {
            return prev + 1;
        });
    };
    const handleMinus = () => {
        setNumber((prev) => {
            return prev === 0 ? 0 : prev - 1;
        });
    };
    const btn_type = (btn) => {
        if (btn === 1) {
            setType(btn);
            setNumber(2);
        } else if (btn === 2) {
            setType(btn);
            setNumber(1);
        }
    };
    useEffect(() => {
        if (setup) {
            setText(Place.find((item) => item.number === type)?.title || '');
            setSetNumber(number);
        }
    }, [number, setup, type]);
    const handleTogglePlay = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        // Dừng tất cả video khác
        videoRefs.current.forEach((v, i) => {
            if (i !== index && v && !v.paused) {
                v.pause();
            }
        });

        if (video.paused) {
            video.play();
            setPlayingIndex(index);
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };
    const zoomTextPosition = `calc(90% * ${zoomLevel} / 30)`;

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('top_post')}>
                    <div className={cx('top_header')}>
                        <h1>Nhà của bạn có thể giúp bạn kiếm được {formatCurrency(displayMoney)} trên Airbnb</h1>
                        <div className={cx('center_text')}>
                            <div className={cx('text_box')}>
                                {zoomLevel && isFinished ? (
                                    <>
                                        <p className={cx('p_one')}>
                                            <span>{zoomLevel} đêm</span> {formatCurrency(money)}/đêm
                                        </p>
                                        <p className={cx('p_two')}>
                                            Tìm hiểu cách Airbnb <span>ước tính thu nhập</span>
                                        </p>
                                    </>
                                ) : (
                                    <p className={cx('zoomText')} style={{ left: zoomTextPosition }}>
                                        {zoomLevel} đêm
                                    </p>
                                )}
                            </div>

                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={zoomLevel}
                                step="1"
                                onChange={handleRangeChange}
                                onMouseUp={handleRangeMouseUp}
                            />
                        </div>
                        <div
                            className={cx('box_bottom')}
                            onClick={() => {
                                togger(1);
                                setSetup(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />

                            <span>Hà Nội</span>
                            <span>{text}</span>
                            <span>{setnumber} Phòng ngủ</span>
                        </div>
                    </div>
                    <div className={cx('top_map')}>
                        <Map todo={todo} />
                    </div>
                </div>
                <div className={cx('center_post')}>
                    <h1>Đăng cho thuê nhà trên Airbnb thật dễ dàng</h1>
                    <div className={cx('center_img')}>
                        <img
                            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727296418469/original/e4e661a8-3c39-41ab-891f-0c51b4856159.jpeg?im_w=2560"
                            alt="img"
                        />
                    </div>
                    <div className={cx('center_plan')}>
                        {Plan.map((item, index) => (
                            <div key={index} className={cx('plan_box')}>
                                <div className={cx('plan_icon')}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src="https://a0.muscache.com/im/pictures/canvas/Canvas-1727221735641/original/7268e2c4-ece4-475d-b6c8-f18df1fe5af5.png?im_w=720"
                    alt=""
                    className={cx('box_img')}
                />
                <div className={cx('center_post', 'two')}>
                    <h1>Dù đón tiếp khách theo cách nào, bạn đều được bảo vệ</h1>
                    <h2>Chương trình bảo vệ toàn diện, luôn được áp dụng mỗi lần bạn cho thuê nhà trên Airbnb.</h2>
                    <div style={{ width: 700 }}>
                        {Conditions.map((item, index) => (
                            <div key={index} className={cx('conditions_box')}>
                                <span>{item.title}</span>
                                <FontAwesomeIcon icon={item.icon} className={cx('conditions_icon')} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('condition_btn')}>Tìm hiểu về airbnb</div>
                    <p>
                        Chương trình Bảo vệ thiệt hại cho Chủ nhà sẽ bồi hoàn cho một số thiệt hại nhất định mà khách
                        gây ra trong thời gian ở đặt qua Airbnb. Đây không phải là bảo hiểm và có thể áp dụng nếu khách
                        không thanh toán. Bảo hiểm trách nhiệm do bên thứ ba cung cấp. Xem chi tiết và điều khoản loại
                        trừ.
                    </p>
                </div>
                <div className={cx('center_post')}>
                    <h1>Tất cả các công cụ mà bạn cần để đón tiếp khách, tất cả trong một ứng dụng</h1>
                    <div className={cx('video_box_list')}>
                        {VIDEO.map((item, index) => (
                            <div key={index} className={cx('video_box_item')}>
                                <video
                                    className={cx('video')}
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    onEnded={() => setPlayingIndex(null)}
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                                <p className={cx('video_box_title')}>{item.title}</p>
                                <p>{item.name}</p>
                                <div className={cx('round')} onClick={() => handleTogglePlay(index)}>
                                    <FontAwesomeIcon icon={playingIndex === index ? faPause : faPlay} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AmenitiesPopup isOpen={avt === 1} onClose={() => setAvt(null)}>
                <div className={cx('prop_wrapper')}>
                    <p className={cx('prop_h3')}>Chia sẻ với chúng tôi về nhà của bạn</p>
                    <div className={cx('prop_box')}>
                        <p>Địa chỉ hoặc khu vực</p>
                        <div className={cx('box_place')}>
                            <FontAwesomeIcon icon={faLocationPin} />
                            <span>Hà nội</span>
                        </div>
                    </div>
                    <div className={cx('prop_box')}>
                        <p>Loại chỗ ở</p>
                        <div className={cx('box_room')}>
                            {Place.map((item) => (
                                <div
                                    key={item.number}
                                    className={cx({
                                        box_black: type === item.number,
                                    })}
                                    onClick={() => {
                                        btn_type(item.number);
                                    }}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('prop_box_three')}>
                        <p>Phòng ngủ</p>
                        <div className={cx('btn_box')}>
                            <button onClick={handleMinus}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            {number}
                            <button onClick={handlePlus}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                    <div
                        className={cx('prop_box_four')}
                        onClick={() => {
                            setSetup(true);
                            setAvt(null);
                        }}
                    >
                        Cập nhật ước tính
                    </div>
                </div>
            </AmenitiesPopup>
        </>
    );
}

export default Post;
