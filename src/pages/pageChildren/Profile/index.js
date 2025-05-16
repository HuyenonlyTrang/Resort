import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './ProfileHome.module.scss';
import classNames from 'classnames/bind';
import {
    faAngleDown,
    faAngleRight,
    faAngleUp,
    faArrowUpFromBracket,
    faBagShopping,
    faLanguage,
    faMedal,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag, faGem, faHeart, faImages, faKeyboard, faStar } from '@fortawesome/free-regular-svg-icons';

import { Link, useParams, useNavigate } from 'react-router-dom';
import Litepicker from 'litepicker';
import 'litepicker/dist/css/litepicker.css';
import { RouteConfig } from '~/config/routes.js';
import Tippy from '@tippyjs/react/headless';
import AmenitiesPopup from '~/components/AmenitiesPopup';
import AmenitiesPopups from '~/components/AmenitiesPopups';
import Button from '~/components/Button';
import { Customs, CustomDate } from '~/components/Globalstyle/Popper';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { useState, useRef, useEffect } from 'react';
import MapComponent from '~/components/Map';

const cx = classNames.bind(Styles);
function Profile({ data = [] }) {
    const [day, setDay] = useState('');
    const [text, setText] = useState('');

    const calendarRef = useRef(null); // Tham chiếu đến div hiển thị lịch
    const pickerRef = useRef(null); // Lưu instance Litepicker
    const buttonRef = useRef(null);
    const [placeholder, setPlaceholder] = useState(false);
    const [dateRange, setDateRange] = useState({ checkin: '', checkout: '' });
    const [up, setUp] = useState(false);
    const [input, setInput] = useState(false);
    const [textInput, setTextInput] = useState('');
    const [close, setClose] = useState(false);
    const [textValue, setTextValue] = useState('Gần đây nhất');
    const [hover, setHover] = useState(false);
    const inputRef = useRef(null);
    const { id } = useParams();
    const [activePopup, setActivePopup] = useState(null);
    const navigate = useNavigate();

    const togglePopup = (id) => {
        setActivePopup(activePopup === id ? null : id);
    };

    const roomData = data.find((room) => room.id === Number(id)); // Đổi từ parseInt(id) thành Number(id)

    const visibleItems = roomData?.place ? roomData.place.slice(0, 10) : [];
    const comment = roomData.comment.length > 5 ? roomData.comment.slice(0, 4) : roomData.comment;
    const cmt = comment.map((item) => item.cmt).map((item) => item.split(' '));
    const new_cmt = cmt.map((item) => (item.length > 35 ? item.slice(0, 35).join(' ') + '...' : item.join(' ')));
    const detail = roomData.description.introduction.split(' ');
    const new_detail = detail.length > 10 ? detail.slice(0, 20).join(' ') + '...' : detail.join(' ');

    useEffect(() => {
        if (calendarRef.current) {
            pickerRef.current = new Litepicker({
                element: calendarRef.current,
                container: calendarRef.current, // Đặt container vào div cha
                inlineMode: true,
                singleMode: false,
                format: 'DD/MM/YYYY',
                minDate: new Date(),
                numberOfMonths: 2,
                numberOfColumns: 2,
                autoApply: true,
                setup: (picker) => {
                    picker.on('selected', (startDate, endDate) => {
                        setDateRange({
                            checkin: startDate.format('DD/MM/YYYY'),
                            checkout: endDate ? endDate.format('DD/MM/YYYY') : '',
                        });
                    });
                },
            });
        }

        return () => {
            if (pickerRef.current) pickerRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (dateRange.checkin && dateRange.checkout) {
            const start = new Date(dateRange.checkin.split('/').reverse().join('/'));

            const end = new Date(dateRange.checkout.split('/').reverse().join('/'));

            const nights = Math.round((end - start) / (1000 * 60 * 60 * 24)); // Chuyển từ ms sang ngày
            setDay(nights);
        }
    }, [dateRange]);

    const headleClear = () => {
        setDay('');
        setDateRange({ checkin: '', checkout: '' });
        if (pickerRef.current) pickerRef.current.clearSelection();
    };
    const hanldeClick = () => {
        setUp((prev) => !prev);
    };
    // const handleFocus = () => {
    //     buttonRef.current.focus();
    // };

    const handleOpen = () => setClose(true);
    const handleClose = () => setClose(false);

    const [items, setItems] = useState([
        { title: 'Người lớn', age: 'Từ 18 tuổi', count: 0 },
        { title: 'Trẻ em', age: 'Từ 2 - 17 tuổi', count: 0 },
        { title: 'Em bé', age: 'Dưới 2 tuổi', count: 0 },
        { title: 'Thú cưng', age: 'Bạn có mang theo thú cưng ?', count: 0 },
    ]);

    const cleanMoney = roomData.money.replace(/[^\d]/g, ''); // Loại bỏ tất cả ký tự không phải số
    const pricePerNight = Number(cleanMoney) || 0; // Chuyển thành số, nếu lỗi gán 0
    const sum = day * pricePerNight; // Tính tổng tiền
    const sale = sum * 0.1;
    const serviceFee = sum * 0.2;
    const tax = sum + serviceFee;

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0, // Không hiển thị số thập phân nếu không cần
        }).format(amount);
    };
    useEffect(() => {
        navigate(roomData.to, { state: { roomData, dateRange } }); // ✅ Tự động điều hướng khi component mount
    }, [navigate, roomData, dateRange]);

    if (!roomData) return <h2>Không tìm thấy phòng!</h2>; // Kiểm tra nếu không có dữ liệu phù hợp

    return (
        <div className={cx('wrapper')}>
            <header>
                <div className={cx('header_title')}>
                    <div className={cx('header_title_left')}>
                        <FontAwesomeIcon icon={faLanguage} className={cx('icon')} />
                        <h2 className={cx('title')}>{roomData.heading}</h2>{' '}
                        {/* Chỉ hiển thị tiêu đề của phòng hiện tại */}
                    </div>
                    <div className={cx('header_button')}>
                        <button onClick={() => togglePopup(2)} className={cx('rounded')}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className={cx('icon_left')} />
                            <span>Chia sẻ</span>
                        </button>
                        <AmenitiesPopup isOpen={activePopup === 2} onClose={() => setActivePopup(null)}>
                            <h2 className={cx('white')}>Chia sẻ nơi lưu trú này</h2>
                            <ul className={cx('share_list')}>
                                {roomData.link.map((data, index) => (
                                    <li key={index} className={cx('share_item')}>
                                        <FontAwesomeIcon icon={data.icon} className={cx('share_icon')} />
                                        <span className={cx('share_span')}>{data.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </AmenitiesPopup>

                        <button onClick={() => togglePopup(3)} className={cx('rounded')}>
                            <FontAwesomeIcon icon={faHeart} className={cx('icon_right')} />
                            <span>Lưu</span>
                        </button>
                        <AmenitiesPopup isOpen={activePopup === 3} onClose={() => setActivePopup(null)}>
                            <span className={cx('white')}>Lưu vào danh sách yêu thích</span>
                            <ul>
                                <li>Phòng 1</li>
                                <li>Phòng 2</li>
                                <li>Phòng 3</li>
                            </ul>
                            <button className={cx('saved')}>Tạo danh sách mog muốn mới</button>
                        </AmenitiesPopup>
                    </div>
                </div>

                <div className={cx('header_img')}>
                    <div className={cx('header_img_left')}>
                        <img src={roomData.image_1} alt={roomData.heading} className={cx('img_1')} />
                    </div>
                    <div className={cx('header_img_right')}>
                        <img src={roomData.image_2} alt={roomData.heading} className={cx('img_2')} />
                        <img src={roomData.image_3} alt={roomData.heading} className={cx('img_2')} />
                        <img src={roomData.image_4} alt={roomData.heading} className={cx('img_2')} />
                        <img src={roomData.image_5} alt={roomData.heading} className={cx('img_2')} />
                    </div>
                    <div className={cx('header_img_button')}>
                        <FontAwesomeIcon icon={faImages} />
                        <button onClick={() => togglePopup(4)}>Hiện thị tất cả ảnh</button>
                        <AmenitiesPopups isOpen={activePopup === 4} onClose={() => setActivePopup(null)}>
                            {roomData.images.map((image, index) => (
                                <div key={index} className={cx('images')}>
                                    <img src={image.img_1} alt="" className={cx('img_1')} />
                                    <div className={cx('image')}>
                                        <img src={image.img_2} alt="" className={cx('img_2')} />
                                        <img src={image.img_3} alt="" className={cx('img_2')} />
                                    </div>
                                </div>
                            ))}
                        </AmenitiesPopups>
                    </div>
                </div>
            </header>
            <div className={cx('container')}>
                <div className={cx('container_left')}>
                    <div className={cx('tieude')}>
                        <h2>{roomData.heading_container}</h2>
                        <p className={cx('all')}>
                            <span> {roomData.all_container.Guest} </span>
                            <span> {roomData.all_container.bathroom} </span>
                            <span>{roomData.all_container.bed}</span>
                            <span> {roomData.all_container.bedroom}</span>
                        </p>
                        {roomData.review >= 200 ? (
                            <>
                                <div className={cx('review')} onClick={() => togglePopup(5)}>
                                    <div className={cx('review_left')}>
                                        <FontAwesomeIcon icon={faBluesky} className={cx('review_left_icon')} />
                                        <span className={cx('review_left_title')}>
                                            Được khách <br></br> yêu thích
                                        </span>
                                        <FontAwesomeIcon icon={faBluesky} className={cx('review_left_icon')} />
                                    </div>
                                    <span className={cx('review-center')}>
                                        Khách đánh giá đây là một trong những ngôi nhà được yêu thích nhất trên Airbnb
                                    </span>
                                    <div>
                                        <span className={cx('view')}>{roomData.start}</span>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                    <div className={cx('review-right')}>
                                        <span className={cx('view')}>{roomData.review}</span>
                                        <span className={cx('rating')}>Đánh giá</span>
                                    </div>
                                </div>
                                <AmenitiesPopup isOpen={activePopup === 5} onClose={() => setActivePopup(null)}>
                                    <div className={cx('review_wrapper_popup')}>
                                        <div className={cx('review_xephang')}>
                                            <div className={cx('review_xephang_top')}>
                                                <img
                                                    src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
                                                    alt=""
                                                />
                                                <span>{roomData.start}</span>
                                                <img
                                                    src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className={cx('review_xephang_center')}>
                                                <span className={cx('heart')}>Được khách yêu thích</span>
                                                <span>
                                                    Nhà này được khách yêu thích dựa trên điểm xếp hạng, lượt đánh giá
                                                    và độ tin cậy
                                                </span>
                                            </div>
                                            <div>
                                                <span>Xếp hạng tổng thể</span>
                                                <div>5</div>
                                                <div>5</div>
                                                <div>5</div>
                                                <div>5</div>
                                                <div>5</div>
                                            </div>
                                            <ul className={cx('review_xephang_bottom')}>
                                                {roomData.ratings.map((item, index) => (
                                                    <li key={index}>
                                                        <div>
                                                            <FontAwesomeIcon icon={item.icon} />
                                                            <span className={cx('label')}>{item.label}</span>
                                                        </div>
                                                        <span className={cx('score')}>{item.score}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={cx('review_cmt')}>
                                            <div className={cx('review_cmt_header')}>
                                                {/* header */}
                                                <div className={cx('review_cmt_top')}>
                                                    <div>
                                                        <span className={cx('review_cmt_top_span_one')}>
                                                            {roomData.review} Lượt đánh giá
                                                        </span>
                                                        <Tippy
                                                            interactive={true}
                                                            placement="bottom"
                                                            onClickOutside={handleClose}
                                                            visible={close}
                                                            render={(attrs) => (
                                                                <div
                                                                    className={cx('quydinh_wrapper')}
                                                                    tabIndex="-1"
                                                                    {...attrs}
                                                                >
                                                                    {/* Thêm mũi tên vào đây */}

                                                                    <div className={cx('quydinh')}>
                                                                        <p className={cx('doanvan')}>
                                                                            Những đánh giá từ khách giúp cộng đồng của
                                                                            chúng ta hiểu thêm về từng chỗ ở. Các đánh
                                                                            giá được mặc định sắp xếp theo thứ tự từ mới
                                                                            nhất đến cũ nhất.
                                                                        </p>
                                                                        <p className={cx('doanvan')}>
                                                                            Chỉ những khách đã đặt phòng mới có thể để
                                                                            lại đánh giá, và Airbnb chỉ kiểm duyệt các
                                                                            đánh giá bị báo cáo là không tuân thủ chính
                                                                            sách của chúng tôi.
                                                                        </p>
                                                                        <p className={cx('doanvan')}>
                                                                            Để đủ điều kiện được xếp hạng theo phân vị
                                                                            phần trăm hoặc gắn nhãn "Được khách yêu
                                                                            thích", chỗ ở cho thuê cần có từ 5 đánh giá
                                                                            trở lên trong thời gian gần đây. Tiêu chí có
                                                                            thể thay đổi.
                                                                        </p>
                                                                        <Button
                                                                            className={cx('help_button')}
                                                                            to="/help"
                                                                            onClick={handleClose}
                                                                        >
                                                                            Tìm hiểu thêm trong Trung tâm trợ giúp của
                                                                            chúng tôi
                                                                        </Button>
                                                                    </div>
                                                                    <div
                                                                        className={cx('delete_quydinh')}
                                                                        onClick={handleClose}
                                                                    >
                                                                        X
                                                                    </div>
                                                                </div>
                                                            )}
                                                        >
                                                            <span
                                                                className={cx('review_cmt_top_span_two')}
                                                                onClick={handleOpen}
                                                            >
                                                                Tìm hiểu quy trình đánh giá
                                                            </span>
                                                        </Tippy>
                                                    </div>
                                                    <Tippy
                                                        visible={hover}
                                                        interactive={true}
                                                        placement="bottom"
                                                        onClickOutside={() => setHover(false)}
                                                        render={(attrs) => (
                                                            <div tabIndex="-1" {...attrs}>
                                                                <ul className={cx('button_ul')}>
                                                                    <li
                                                                        className={cx('button_li', {
                                                                            hover:
                                                                                hover && textValue === 'Gần đây nhất',
                                                                        })}
                                                                        onClick={() => {
                                                                            setTextValue('Gần đây nhất');
                                                                            setHover(false);
                                                                        }}
                                                                    >
                                                                        Gần đây nhất
                                                                    </li>
                                                                    <li
                                                                        className={cx('button_li', {
                                                                            hover:
                                                                                hover &&
                                                                                textValue === 'Đánh giá mới nhất',
                                                                        })}
                                                                        onClick={() => {
                                                                            setTextValue('Đánh giá mới nhất');
                                                                            setHover(false);
                                                                        }}
                                                                    >
                                                                        Đánh giá mới nhất
                                                                    </li>
                                                                    <li
                                                                        className={cx('button_li', {
                                                                            hover:
                                                                                hover &&
                                                                                textValue === 'Đánh giá cũ nhất',
                                                                        })}
                                                                        onClick={() => {
                                                                            setTextValue('Đánh giá cũ nhất');
                                                                            setHover(false);
                                                                        }}
                                                                    >
                                                                        Đánh giá cũ nhất
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    >
                                                        <button onClick={() => setHover((prev) => !prev)}>
                                                            <span>{textValue}</span>
                                                            <FontAwesomeIcon icon={faAngleDown} />
                                                        </button>
                                                    </Tippy>
                                                </div>
                                                {/* input */}
                                                <div
                                                    className={cx('review_cmt_center', {
                                                        trongsuot: input,
                                                    })}
                                                    onClick={() => {
                                                        setInput(true);
                                                        inputRef.current.focus();
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faSearch}
                                                        className={cx('review_cmt_center_icon')}
                                                    />
                                                    <input
                                                        ref={inputRef}
                                                        type="text"
                                                        placeholder="Tìm kiếm đánh giá"
                                                        value={textInput}
                                                        onChange={(e) => setTextInput(e.target.value)}
                                                        onBlur={() => setInput(false)}
                                                    />
                                                    {textInput !== '' ? (
                                                        <span className={cx('delete')} onClick={() => setTextInput('')}>
                                                            x
                                                        </span>
                                                    ) : null}
                                                </div>
                                            </div>
                                            {/* cmt */}
                                            <ul className={cx('cmt')}>
                                                {roomData.comment.map((item, index) => (
                                                    <li key={index}>
                                                        <div className={cx('cmt_header')}>
                                                            <img src={item.img} alt="" className={cx('cmt_img')} />
                                                            <div>
                                                                <span>{item.name}</span>
                                                                <span className={cx('date_Airbnb')}>
                                                                    {item.date_Airbnb}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className={cx('cmt_content')}>
                                                            <div>
                                                                <span className={cx('star_icon')}>
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                    <FontAwesomeIcon icon={faStar} />
                                                                </span>
                                                                <span>{item.date_cmt}</span>
                                                            </div>
                                                            <p className={cx('cmt_cmt')}>{item.cmt}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AmenitiesPopup>
                            </>
                        ) : (
                            <div className={cx('review_wrapper')}>
                                <div className={cx('review_wrapper_icon')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    {roomData.start}
                                </div>
                                <div className={cx('review_wrapper_title')}>{roomData.review} Đánh giá</div>
                            </div>
                        )}
                    </div>
                    <div className={cx('host')}>
                        <div>
                            <img src={roomData.img} alt="avatar" className={cx('host_avatar')} />
                        </div>
                        <div className={cx('host_information')}>
                            <p className={cx('host_information_one')}>Chủ nhà/Người tổ chức: {roomData.host}</p>
                            <p className={cx('host_information_two')}>
                                Chủ nhà siêu cấp {roomData.year} năm kinh nghiệm đón tiếp khách
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className={cx('amenities')}>
                        {roomData.amenities.map((amenity) => (
                            <div key={amenity.id} className={cx('amenities_item')}>
                                <FontAwesomeIcon icon={amenity.icon} className={cx('amenities_icon')} />
                                <div className={cx('amenities_title')}>
                                    <span className={cx('title_amenities')}>{amenity.title}</span>
                                    <span className={cx('description_amenities')}>{amenity.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('description')}>
                        <h2>Giới thiệu về chỗ ở này</h2>
                        <p>{roomData.description.introduction}</p>
                        <span className={cx('description_block')} onClick={() => togglePopup(6)}>
                            Hiện thị thêm
                            <FontAwesomeIcon icon={faAngleRight} className={cx('description_block_icon')} />
                        </span>
                        <AmenitiesPopup isOpen={activePopup === 6} onClose={() => setActivePopup(null)}>
                            <h2 className={cx('white')}>Giới thiệu về chỗ ở này</h2>
                            <div className={cx('description_paragraph')}>
                                <p className={cx('doanvan')}>{roomData.description.introduction}</p>
                                {roomData.description.accommodation ? (
                                    <div>
                                        <span className={cx('tieude_doanvan')}>Chỗ ở</span>
                                        {roomData.description.accommodation.title ? (
                                            <p className={cx('doanvan')}>{roomData.description.accommodation.title}</p>
                                        ) : null}
                                        <span className={cx('tieude_doanvan')}>
                                            Homestay của chúng tôi cung cấp một loạt các tiện nghi và dịch vụ để nâng
                                            cao thời gian lưu trú của bạn:
                                        </span>
                                        {roomData.description.accommodation.amenities ? (
                                            <ul className={cx('doanvan')}>
                                                {roomData.description.accommodation.amenities.map((item, index) => (
                                                    <li key={index}>{item.title}</li>
                                                ))}
                                            </ul>
                                        ) : null}
                                        {roomData.description.accommodation.bottom_title ? (
                                            <p className={cx('doanvan')}>
                                                {roomData.description.accommodation.bottom_title}
                                            </p>
                                        ) : null}
                                    </div>
                                ) : null}
                                {roomData.description.rights ? (
                                    <div>
                                        <span className={cx('tieude_doanvan')}>Tiện nghi khách có quyền sử dụng</span>
                                        {roomData.description.rights.title ? (
                                            <p className={cx('doanvan')}>{roomData.description.rights.title}</p>
                                        ) : null}
                                        {roomData.description.rights.rights_map ? (
                                            <ul className={cx('doanvan')}>
                                                {roomData.description.rights.rights_map.map((item, index) => (
                                                    <li key={index}>{item.title}</li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                ) : null}
                                {roomData.description.note ? (
                                    <div>
                                        <span className={cx('tieude_doanvan')}>Những điều cần lưu ý khác</span>
                                        {roomData.description.note.title ? (
                                            <p className={cx('doanvan')}>{roomData.description.note.title}</p>
                                        ) : null}
                                        <span className={cx('tieude_doanvan')}>
                                            Một số thông tin quan trọng cần lưu ý:
                                        </span>
                                        {roomData.description.note.information_note ? (
                                            <ul className={cx('doanvan')}>
                                                {roomData.description.note.information_note.map((item, index) => (
                                                    <li key={index}>{item.title}</li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        </AmenitiesPopup>
                    </div>
                    <div className={cx('location')}>
                        <h2>Nơi bạn sẽ ngủ nghỉ</h2>
                        {roomData.bedroom && roomData.bedroom.length > 0 ? (
                            <div className={cx('location_list')}>
                                {roomData.bedroom.map((data, index) => (
                                    <div key={index} className={cx('location_item')}>
                                        <img src={data.image} alt={data.heading} className={cx('location_image')} />
                                        <p className={cx('location_title')}>{data.title}</p>
                                        <p className={cx('location_description')}>{data.description}</p>
                                    </div>
                                ))}
                            </div>
                        ) : roomData.bedroom ? (
                            <div className={cx('location_wrapper')}>
                                <FontAwesomeIcon icon={roomData.bedroom.icon} />
                                <FontAwesomeIcon icon={roomData.bedroom.icon} />
                                <p className={cx('location_title')}>{roomData.bedroom.title}</p>
                                <p className={cx('location_description')}>{roomData.bedroom.description}</p>
                            </div>
                        ) : roomData.bedroom === null ? (
                            <p>Không có dữ liệu</p>
                        ) : null}
                    </div>
                    <div id="tiennghi" className={cx('place')}>
                        <h2 className={cx('white')}>Nơi này có những gì cho bạn</h2>
                        <div className={cx('place_list')}>
                            {visibleItems.map((data, index) => (
                                <div key={index} className={cx('place_item')}>
                                    <FontAwesomeIcon icon={data.icon} className={cx('place_icon')} />
                                    <span className={cx('place_title')}>{data.title}</span>
                                </div>
                            ))}
                        </div>
                        {roomData.place.length > 10 && (
                            <div>
                                <button onClick={() => togglePopup(1)} className={cx('place_button')}>
                                    Hiển thị tất cả 62 tiện nghi
                                </button>
                                <AmenitiesPopup
                                    isOpen={activePopup === 1}
                                    onClose={() => setActivePopup(null)}
                                    roomId={id}
                                >
                                    <div className={cx('popup_div')}>
                                        <h2 className={cx('white')}>Nơi này có những gì cho bạn</h2>
                                        <ul className={cx('popup_list')}>
                                            {roomData.place.map((data, index) => (
                                                <li key={index} className={cx('popup_item')}>
                                                    <FontAwesomeIcon icon={data.icon} className={cx('popup_icon')} />
                                                    <span>{data.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AmenitiesPopup>
                            </div>
                        )}
                    </div>
                    <div className={cx('setup')}>
                        <h2>{day ? `${day} đêm tại ${roomData.resot}` : 'Chọn ngày nhận phòng'}</h2>
                        <input
                            value={
                                dateRange.checkin && dateRange.checkout
                                    ? `${dateRange.checkin} - ${dateRange.checkout}`
                                    : 'Thời gian tối thiểu : 3 đêm'
                            }
                            readOnly
                            className={cx('date_input')}
                        />
                        <div className={cx('date_one')} ref={calendarRef}></div>
                        <div className={cx('delete')}>
                            <button>
                                <FontAwesomeIcon icon={faKeyboard} />
                            </button>
                            <button onClick={headleClear}>Xóa</button>
                        </div>
                    </div>
                </div>

                {/* container_right */}
                <div className={cx('container_right')}>
                    <div className={cx('right_wrapper')} id="datphong">
                        <div className={cx('right_div_one')}>
                            <span className={cx('bottom_div_title')}>
                                {dateRange.checkin && dateRange.checkout
                                    ? `${roomData.money} / 1 đêm`
                                    : 'Thêm ngày để xem giá'}
                            </span>

                            <div className={cx('right_check')}>
                                {/*  */}
                                <CustomDate
                                    buttonRef={buttonRef}
                                    mode="day"
                                    activeTab="experience"
                                    dateRange={dateRange}
                                    setDateRange={setDateRange}
                                >
                                    <div className={cx('date')}>
                                        <div>
                                            <p className={cx('text')}>Nhận Phòng</p>
                                            <input
                                                onClick={() => setPlaceholder(true)}
                                                type="text"
                                                value={dateRange.checkin}
                                                onBlur={() => setPlaceholder(false)}
                                                readOnly
                                                placeholder={placeholder ? 'DD/MM/YYYY' : 'Chọn ngày'}
                                            />
                                        </div>
                                        <div>
                                            <p className={cx('text')}>Trả Phòng</p>
                                            <input
                                                onClick={() => setPlaceholder(true)}
                                                onBlur={() => setPlaceholder(false)}
                                                type="text"
                                                value={dateRange.checkout}
                                                readOnly
                                                placeholder={placeholder ? 'DD/MM/YYYY' : 'Chọn ngày'}
                                            />
                                        </div>
                                    </div>
                                </CustomDate>
                                {/*  */}
                                <Customs items={items} setItems={setItems} onText={setText}>
                                    <div onClick={hanldeClick} className={cx('custom')}>
                                        <div>
                                            <p className={cx('text')}>Khách</p>
                                            <p className={cx('text_1')}>{text ? text + ' Người' : 'Thêm Người'}</p>
                                        </div>
                                        <div>
                                            {up ? (
                                                <FontAwesomeIcon icon={faAngleUp} />
                                            ) : (
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            )}
                                        </div>
                                    </div>
                                </Customs>
                            </div>

                            <Button
                                to={dateRange.checkin && dateRange.checkout && text ? RouteConfig.Bill : undefined}
                                rounded_red
                                className={cx('width')}
                                state={{
                                    dateRange: dateRange,
                                    roomData: roomData || null,
                                    custom: text,
                                    tax: tax || 0,
                                    day: day,
                                    sum: sum,
                                    serviceFee: serviceFee,
                                }}
                            >
                                {dateRange.checkin && dateRange.checkout
                                    ? 'Đặt phòng'
                                    : 'Kiểm tra tình trạng còn phòng'}
                            </Button>

                            {dateRange.checkin && dateRange.checkout ? (
                                <div className={cx('bottom')}>
                                    <span className={cx('minus')}>Bạn vẫn chưa bị trừ tiền</span>
                                    <div className={cx('bottom_center')}>
                                        <div className={cx('bottom_div')}>
                                            <span className={cx('bottom_title')}>
                                                {roomData.money} x {day} đêm
                                            </span>
                                            <span>{formatCurrency(sum)}</span>
                                        </div>
                                        {day > 7 && (
                                            <div className={cx('bottom_div')}>
                                                <span className={cx('bottom_title')}>
                                                    Giảm giá cho khách khi đặt <br></br> theo tuần
                                                </span>
                                                <span>-{formatCurrency(sale)}</span>
                                            </div>
                                        )}
                                        <div className={cx('bottom_div')}>
                                            <span className={cx('bottom_title')}>Phí dịch vụ tại Airbnb</span>
                                            <span>{formatCurrency(serviceFee)}</span>
                                        </div>
                                    </div>
                                    <div className={cx('bottom_div')}>
                                        <span className={cx('bottom_div_title')}>Tổng trước thuế</span>
                                        <span>{formatCurrency(tax)}</span>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        {roomData.rare && (
                            <div className={cx('right_rare')}>
                                <FontAwesomeIcon icon={faGem} className={cx('icon_rare')} />
                                <div>
                                    <p className={cx('rare_title')}>Nơi này hiếm khi còn chỗ</p>
                                    <p className={cx('rare_title_one')}>Chỗ ở của {roomData.host} thường kín phòng.</p>
                                </div>
                            </div>
                        )}

                        <p className={cx('right_p')} onClick={() => togglePopup(11)}>
                            <FontAwesomeIcon icon={faFlag} />
                            <span>Báo cáo nhà/phòng cho thêu này</span>
                        </p>
                    </div>
                    <AmenitiesPopup isOpen={activePopup === 11} onClose={() => setActivePopup(null)}></AmenitiesPopup>
                </div>
            </div>
            <div id="danhgia" className={cx('ratings')}>
                <div className={cx('rating_top')}>
                    <div className={cx('rating_top_img')}>
                        <img
                            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
                            alt=""
                        />
                        <span>{roomData.start}</span>
                        <img
                            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"
                            alt=""
                        />
                    </div>
                    <div className={cx('rating_top_center')}>
                        <span className={cx('rating_top_center_one')}>Được khách yêu thích</span>
                        <span className={cx('rating_top_center_two')}>
                            Nhà này được khách yêu thích dựa trên điểm xếp hạng, lượt đánh giá và độ tin cậy
                        </span>
                    </div>
                    <ul className={cx('rating_top_bottom')}>
                        {roomData.ratings.map((item, index) => (
                            <li key={index}>
                                <span className={cx('rating_top_one')}>{item.label}</span>
                                <span className={cx('rating_top_two')}>{item.score}</span>
                                <FontAwesomeIcon icon={item.icon} className={cx('rating_top_icon')} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('rating_bottom')}>
                    {/* cmt */}
                    <ul className={cx('rating_bottom_cmt')}>
                        {comment.map((item, index) => (
                            <li key={index}>
                                <div className={cx('rating_bottom_cmt_header')}>
                                    <img src={item.img} alt="" className={cx('cmt_img')} />
                                    <div>
                                        <span className={cx('rating_bottom_name')}>{item.name}</span>
                                        <span className={cx('rating_bottom_date_Airbnb')}>{item.date_Airbnb}</span>
                                    </div>
                                </div>
                                <div className={cx('rating_bottom_cmt_content')}>
                                    <div>
                                        <span className={cx('rating_bottom_star_icon')}>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className={cx('rating_bottom_date_cmt')}>{item.date_cmt}</span>
                                    </div>
                                    <p className={cx('rating_bottom_cmt_cmt')}>{new_cmt[index]}</p>
                                </div>
                                <span className={cx('up_cmt')} onClick={() => togglePopup(5)}>
                                    Hiện thị thêm
                                </span>
                            </li>
                        ))}
                    </ul>
                    {/*  */}
                    <div>
                        <button onClick={() => togglePopup(5)} className={cx('cmt_all')}>
                            Hiện thị tất cả {roomData.review} đánh giá
                        </button>
                        <span className={cx('button_span')}>Tìm hiểu quy trình đánh giá</span>
                    </div>
                </div>
            </div>
            <div className={cx('place_bottom')}>
                <h2>Nơi bạn sẽ đến</h2>
                <MapComponent todo={roomData.todo} />
                <div className={cx('Detail')}>
                    <span>{roomData.located_in.place}</span>
                    <p>{roomData.located_in.information}</p>
                    <p>{roomData.located_in.transport}</p>
                </div>
            </div>
            <div className={cx('host_bottom')}>
                <h2>Gặp gỡ Chủ nhà của bạn</h2>
                <div className={cx('detail_bottom')}>
                    <div className={cx('host_left')}>
                        <div className={cx('host_box_left')}>
                            <div>
                                <img src={roomData.img} alt="" className={cx('detail_img')} />
                                <h3>{roomData.host}</h3>
                                <span>
                                    <FontAwesomeIcon icon={faMedal} />
                                    Chủ nhà siêu cấp
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <span className={cx('so')}>{roomData.review}</span>
                                    <span className={cx('chu')}>Đánh giá</span>
                                </li>
                                <li>
                                    <span className={cx('so')}>
                                        {roomData.start} <FontAwesomeIcon icon={faStar} className={cx('icon')} />
                                    </span>
                                    <span className={cx('chu')}>Xếp hạng</span>
                                </li>
                                <li>
                                    <span className={cx('so')}>{roomData.year}</span>
                                    <span className={cx('chu')}>Năm kinh nghiệm đón tiếp khách</span>
                                </li>
                            </ul>
                        </div>
                        <p className={cx('host_JLI')}>
                            <FontAwesomeIcon icon={faBagShopping} className={cx('icon_P')} />
                            Công việc của tôi: {roomData.detail.job}
                        </p>
                        <p className={cx('host_JLI')}>
                            <FontAwesomeIcon icon={faLanguage} className={cx('icon_P')} />
                            Nói {roomData.detail.language_1} và {roomData.detail.language_2}
                        </p>
                        <p className={cx('host_JLI')}>{new_detail}</p>
                        <Link
                            to={RouteConfig.User}
                            className={cx('host_box_Clip')}
                            state={roomData ? { roomData } : null}
                        >
                            Hiện thị thêm
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                    <div className={cx('host_right')}>
                        <div className={cx('host_right_top')}>
                            <div className={cx('host_right_div')}>
                                <h3>
                                    {roomData.phanhoi === true
                                        ? `${roomData.host} là một Chủ nhà siêu cấp`
                                        : roomData.phanhoi === false
                                        ? 'Thông tin Chủ nhà'
                                        : null}
                                </h3>
                                <p>
                                    {roomData.phanhoi === true
                                        ? 'Chủ nhà siêu cấp là những người có kinh nghiệm, được đánh giá cao và cam kết mang lại kỳ nghỉ tuyệt vời cho khách.'
                                        : roomData.phanhoi === false
                                        ? 'Phản hồi trong vòng vài ngày trở lên'
                                        : null}
                                </p>
                            </div>

                            {roomData.we_host && (
                                <div className={cx('host_right_div')}>
                                    <h3>Đồng chủ nhà</h3>
                                    <div>
                                        {roomData.we_host.map((item, index) => (
                                            <div key={index}>
                                                <img src={item.img} alt="" className={cx('we_host_img')} />
                                                <span className={cx('we_host_name')}>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {roomData.information && (
                                <div className={cx('host_right_div')}>
                                    <h3>Thông tin Chủ nhà</h3>
                                    <p>
                                        Tỉ lệ phản hồi: 100% <br></br>
                                        Phản hồi trong vòng 1 giờ
                                    </p>
                                </div>
                            )}
                            <div className={cx('host_right_div')}>
                                <button className={cx('host_right_button')}>Nhắn cho chủ nhà</button>
                                <span className={cx('host_right_span')}>
                                    Bạn có thể nhắn tin cho chủ nhà/người tổ chức bằng tiếng việt; Airbnb có tính năng
                                    dịch thuật
                                </span>
                            </div>
                        </div>
                        <div className={cx('host_right_bottom')}>
                            <FontAwesomeIcon icon={faBluesky} />
                            <span>
                                Để bảo vệ khoản thanh toán của bạn, hãy luôn sử dụng Airbnb để gửi tiền và liên lạc với
                                chủ nhà/người tổ chức.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('note_bottom')}>
                <h2>Những điều cần biết</h2>
                <div className={cx('note_ul')}>
                    <ul>
                        <li>Nội quy nhà</li>
                        {roomData.note_house.house_rules.check_in_out.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                        <li className={cx('description_block')} onClick={() => togglePopup(7)}>
                            Hiện thị thêm
                            <FontAwesomeIcon icon={faAngleRight} className={cx('description_block_icon')} />
                        </li>
                        <AmenitiesPopup isOpen={activePopup === 7} onClose={() => setActivePopup(null)}>
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
                        </AmenitiesPopup>
                    </ul>
                    <ul>
                        <li>An toàn và chỗ ở</li>
                        {roomData.note_house.safety_house.device.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))}
                        <li className={cx('description_block')} onClick={() => togglePopup(8)}>
                            Hiện thị thêm
                            <FontAwesomeIcon icon={faAngleRight} className={cx('description_block_icon')} />
                        </li>
                        <AmenitiesPopup isOpen={activePopup === 8} onClose={() => setActivePopup(null)}>
                            <div className={cx('noiquy')}>
                                <div className={cx('note_div_one')}>
                                    <h2>An toàn và chỗ ở</h2>
                                    <span>
                                        Tránh bị bất ngờ bằng cách kiểm tra những thông tin quan trọng sau đây về khu
                                        nhà của Chủ nhà.
                                    </span>
                                </div>
                                <div className={cx('note_div_two')}>
                                    <p>Thiết bị an toàn</p>
                                    {roomData.note_house.safety_house.information.map((item, index) => (
                                        <div key={index}>
                                            <FontAwesomeIcon icon={item.icon} className={cx('item_icon')} />
                                            <>{item.title}</>
                                            {item.time && <span className={cx('span_two')}>{item.time}</span>}
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('note_div_three')}>
                                    <p>Thông tin chỗ ở</p>
                                    {roomData.note_house.safety_house.device.map((item, index) => (
                                        <div key={index}>
                                            <FontAwesomeIcon icon={item.icon} className={cx('item_icon')} />
                                            <span>{item.title}</span>
                                            <>{item.time && <span className={cx('span_two')}>{item.time}</span>}</>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AmenitiesPopup>
                    </ul>
                    <ul>
                        <li>Chính sách hủy</li>
                        {dateRange.checkin ? (
                            roomData.note_house.policy === true ? (
                                <>
                                    <li>
                                        Bạn được hủy miễn phí trước {dateRange.checkin}. Sau ngày đó, bạn không được
                                        hoàn tiền cho đặt phòng/đặt chỗ.
                                    </li>
                                </>
                            ) : roomData.note_house.policy === false ? (
                                <>
                                    <li>Đặt phòng/đặt chỗ này không được hoàn tiền.</li>
                                </>
                            ) : null
                        ) : (
                            <p>
                                Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính sách hủy cho đặt phòng này.
                            </p>
                        )}
                        <li>Xem toàn bộ chính sách của Chủ nhà này để biết chi tiết.</li>
                        <li className={cx('description_block')} onClick={() => togglePopup(9)}>
                            Hiện thị thêm
                            <FontAwesomeIcon icon={faAngleRight} className={cx('description_block_icon')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
