import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBellSlash, faHeart, faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faBedPulse,
    faBookOpen,
    faBugSlash,
    faCamera,
    faCar,
    faDesktop,
    faDoorOpen,
    faFan,
    faFire,
    faKey,
    faMountainSun,
    faRightFromBracket,
    faSpa,
    faVideoCamera,
    faWaterLadder,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';

export const dataHome = [
    // id: 0
    {
        id: 1,
        heading: 'Bungallow Poolside nhiệt đới',
        style: 'Toàn bộ bungalow',
        title_detail: 'Chủ nhà siêu cấp',
        image_1: 'https://a0.muscache.com/im/pictures/1bffe8be-5fd3-4af8-b88c-a1039f17c508.jpg?im_w=960&im_format=avif',
        image_2: 'https://a0.muscache.com/im/pictures/49c86be1-7069-411b-92c4-a86fc524b6e9.jpg?im_w=480&im_format=avif',
        image_3:
            'https://a0.muscache.com/im/pictures/miso/Hosting-6112630/original/f48f8e4b-51fb-4c2d-93e2-40aaa30459f6.jpeg?im_w=480&im_format=avif',
        image_4: 'https://a0.muscache.com/im/pictures/58409dd3-9582-480a-92f1-0554fc2e37fe.jpg?im_w=480&im_format=avif',
        image_5: 'https://a0.muscache.com/im/pictures/58409dd3-9582-480a-92f1-0554fc2e37fe.jpg?im_w=480&im_format=avif',
        heading_container: 'Toàn bộ bungalow tại Gia Sinh, Việt Nam',
        all_container: {
            Guest: '2 Khách',
            bedroom: '1 Phòng ngủ',
            bed: '2 Giường',
            bathroom: '1 Phòng Tắm',
        },
        start: '4,89',
        review: '226',
        img: 'https://mega.com.vn/media/news/1406_hinh-nen-doraemon-4k22.jpg',
        host: 'Nguyễn Thành',
        year: '10',
        amenities: [
            {
                id: 1,
                icon: faFan,
                title: 'Được thiết kế để luôn mát mẻ',
                description: 'Thổi bay cái nóng với điều hòa không khí và quạt trần.',
            },
            {
                id: 2,
                icon: faFire,
                title: 'Giải trí ngoài trời',
                description: 'Bếp ngoài trời, lò sưởi bể bơi và ăn uống ngoài trời thích hợp cho các chuyến đi mùa hè.',
            },
            {
                id: 3,
                icon: faDoorOpen,
                title: 'Tự nhận phòng',
                description: 'Bạn có thể gặp nhân viên trực cửa để nhận phòng.',
            },
        ],
        description: {
            introduction:
                'Trải nghiệm homestay tinh tế của chúng tôi trong một khu vườn tươi tốt với một bungalow bên hồ bơi tuyệt đẹp có sức chứa 2 người. Gia đình thân thiện của chúng tôi mời bạn đắm chìm trong khung cảnh mê hoặc này, lấy cảm hứng từ kiến trúc Việt Nam đích thực. Tận hưởng khung cảnh ngoạn mục từ sân thượng riêng nhìn ra vườn và núi. Vị trí thuận tiện, khám phá các điểm tham quan gần đó như Bái Đính, Tràng An, Hàng Mua, Tam Cốc, Thủ đô cổ Hoa Lư, Văn Long, và Vườn quốc gia Cúc Phương.',
            accommodation: {
                title: 'Thoát khỏi sự hối hả và nhộn nhịp của thành phố và đắm mình trong vẻ đẹp yên tĩnh của ngôi làng nông thôn nhỏ độc đáo của chúng tôi, chỉ cách thành phố Ninh Bình 20 phút lái xe. Được bao quanh bởi những khu vườn xanh tươi, trải nghiệm sự yên bình và thanh thản trong khi tận hưởng âm thanh của thiên nhiên và tiếng cười của trẻ em. Khám phá lối sống địa phương bằng cách đạp xe qua cánh đồng lúa và vùng nông thôn. Bắt đầu một ngày của bạn với một chuyến viếng thăm các chợ địa phương để có một trải nghiệm đích thực. Cho dù bạn thích thư giãn hay phiêu lưu, sự lựa chọn là của bạn.',
                amenities: [
                    {
                        title: '- truy cập internet không dây tốc độ cao MIỄN PHÍ',
                    },
                    {
                        title: '- Đồ uống chào mừng và khăn tắm giải khát',
                    },
                    {
                        title: '- Bản đồ định hướng và hướng dẫn',
                    },
                    {
                        title: '- Nước đóng chai miễn phí hàng ngày',
                    },
                    {
                        title: '- Dịch vụ dọn phòng hàng ngày',
                    },
                    {
                        title: '- Cửa sổ yên tĩnh và tráng men cho một bầu không khí yên bình',
                    },
                    {
                        title: '- Phòng rộng rãi với giường cỡ king và',
                    },
                ],
                bottom_title:
                    'Tận hưởng sự yên tĩnh và thoải mái của homestay của chúng tôi, nơi bạn có thể thực sự thư giãn và trẻ hóa.',
            },
            rights: {
                title: 'Tiện nghi có sẵn cho khách tại khu nghỉ dưỡng bao gồm:',
                rights_map: [
                    { title: '- Hồ bơi ngoài trời' },
                    { title: '- Trà, cà phê và nước đóng chai trong phòng' },
                    { title: '- Cho thuê xe máy và xe đạp' },
                    { title: '- Tiện ích BBQ trong vườn' },
                    { title: '- Đồ uống tự phục vụ từ tủ lạnh có thanh toán khi trả phòng' },
                    { title: '- Wi-Fi miễn phí' },
                    { title: '- Nhà hàng tại chỗ phục vụ các bữa ăn tùy chỉnh theo yêu cầu' },
                    { title: '- Các tour có tổ chức khám phá Ninh Bình' },
                    { title: '- Bán vé tàu hỏa, xe buýt và chuyến bay.' },
                ],
            },
            note: {
                title: 'Để trải nghiệm đầy đủ vẻ đẹp của môi trường xung quanh và tận hưởng sự thanh bình của các bungalow quyến rũ của chúng tôi, chúng tôi khuyên bạn nên lên kế hoạch cho thời gian ở tối thiểu là 2 đêm. Điều này sẽ cho bạn nhiều thời gian để khám phá các điểm tham quan du lịch gần đó trong khi cũng cho phép thư giãn và đánh giá cao cảnh quan ngoạn mục của chúng tôi.',
                information_note: [
                    {
                        title: '- Homestay gia đình Ninh Bình tọa lạc tại Xóm 4, Gia Sinh, Chùa Bái Đính, Ninh Bình.',
                    },
                    {
                        title: '- Gia đình chúng tôi cư trú tại khu nghỉ dưỡng và sẵn sàng hỗ trợ bạn 24/7.',
                    },
                    {
                        title: '- Chúng tôi tổ chức các tour du lịch độc đáo hàng ngày để tránh những nơi đông đúc và ồn ào. Những tour này nhằm mục đích kết nối du khách với người dân địa phương và khám phá văn hóa hấp dẫn và cuộc sống hàng ngày của người dân địa phương.',
                    },
                    {
                        title: '- Nhà hàng Việt Nam đích thực của chúng tôi do vợ tôi điều hành, người luôn sẵn sàng phục vụ các món ăn tùy chỉnh theo yêu cầu.',
                    },
                    {
                        title: '- Chúng tôi rất mong được chào đón tất cả khách và hy vọng bạn coi nơi này là ngôi nhà thứ hai của mình.',
                    },
                ],
            },
        },
        bedroom: [
            {
                image: 'https://a0.muscache.com/im/pictures/31aa1e17-d40a-45dd-bc71-6bac5733bc22.jpg?im_w=480&im_format=avif',
                title: 'Phòng ngủ',
                description: '1 giường king',
            },
            {
                image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-6112630/original/2281888f-bbbe-4d5b-9cef-a92101b725b2.jpeg?im_w=480&im_format=avif',
                title: 'Phòng khách',
                description: '1 giường king',
            },
        ],
        place: [
            {
                icon: faSun,
                title: 'Hướng nhìn ra vườn',
            },
            {
                icon: faRightFromBracket,
                title: 'Lối ra hồ',
            },
            {
                icon: faDesktop,
                title: 'Không gian riêng để làm việc',
            },
            {
                icon: faWaterLadder,
                title: 'Hồ bơi chung ',
            },
            {
                icon: faBugSlash,
                title: 'Máy phát hiện khí CO ',
            },
            {
                icon: faMountainSun,
                title: 'Hướng nhìn ra núi',
            },
            {
                icon: faWifi,
                title: 'Wi-fi',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
        ],
        resot: 'Gia lai',
        money: '₫1.023.865',
        bill: '/bill',
        link: [
            {
                icon: faFacebook,
                title: 'Sao chép liên kết',
            },
            {
                icon: faFacebook,
                title: 'Facebook',
            },
            {
                icon: faFacebook,
                title: 'Tin nhắn',
            },
            {
                icon: faFacebook,
                title: 'Twitter',
            },
            {
                icon: faFacebook,
                title: 'Email',
            },
            {
                icon: faFacebook,
                title: 'WhatsApp',
            },
            {
                icon: faFacebook,
                title: 'Nhúng',
            },
            {
                icon: faFacebook,
                title: 'Twitter',
            },
            {
                icon: faFacebook,
                title: 'Tùy chọn khác',
            },
        ],
        images: [
            {
                img_1: 'https://a0.muscache.com/im/pictures/1bffe8be-5fd3-4af8-b88c-a1039f17c508.jpg?im_w=1200&im_format=avif',
                img_2: 'https://a0.muscache.com/im/pictures/49c86be1-7069-411b-92c4-a86fc524b6e9.jpg?im_w=720&im_format=avif',
                img_3: 'https://a0.muscache.com/im/pictures/0aaaa3c1-9473-4648-8e10-6c56b64a0d4c.jpg?im_w=720&im_format=avif',
            },
            {
                img_1: 'https://a0.muscache.com/im/pictures/miso/Hosting-6112630/original/f48f8e4b-51fb-4c2d-93e2-40aaa30459f6.jpeg?im_w=1200&im_format=avif',
                img_2: 'https://a0.muscache.com/im/pictures/58409dd3-9582-480a-92f1-0554fc2e37fe.jpg?im_w=720&im_format=avif',
                img_3: 'https://a0.muscache.com/im/pictures/b1867094-9a4e-428e-a421-f2d1556ae766.jpg?im_w=720&im_format=avif',
            },
        ],

        ratings: [
            { icon: faKey, label: 'Mức độ sạch sẽ', score: 4.9 },
            { icon: faKey, label: 'Độ chính xác', score: 4.9 },
            { icon: faKey, label: 'Nhận phòng', score: 4.9 },
            { icon: faKey, label: 'Giao tiếp', score: 5.0 },
            { icon: faKey, label: 'Vị trí', score: 4.8 },
            { icon: faKey, label: 'Giá trị', score: 4.8 },
        ],
        comment: [
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
        ],
        located_in: {
            place: 'Gia Sinh, Ninh Bình, Việt Nam',
            information: 'We are separated by moutain and valley, paddy field ao we do not have nearby neibor',
            transport: 'We have free bike. Motor and car for rent',
        },
        detail: {
            job: 'Homestay Manager',
            language_1: 'Tiếng Anh',
            language_2: 'Tiếng Trung',
            like: 'Thân thiện,chuyên nghiệp, Vị trí đẹp',
            live: 'Ninh bình, Quảng Ninh',
            information:
                'I am Thành, born and raised in the beautiful and tradition-rich land of Ninh Binh. With over 15 years of experience as a local guide, I am passionate about providing guests with unique and memorable experiences of our culture, people, and stunning nature. Ninh Binh Family Homestay was created with the vision of connecting people with nature and offering guests the feeling of being at home.',
            cmt_host: [
                {
                    cmt: '…Felt like home. Hang(the wife) makes a great chicken hotpot. Thanhs is very helpful with tips. Gives options on what to see and the best way to see everything, depending on the days you stay.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Mareike',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Had a wonderful time at Thànhs place. Beautiful grounds, comfortable clean rooms and a place thats a 10 minute cycle from the Bai Dinh Pagoda grounds. Thành is an excellent host, very responsive,.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Iredia',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Felt like home. Hang(the wife) makes a great chicken hotpot. Thanhs is very helpful with tips. Gives options on what to see and the best way to see everything, depending on the days you stay.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Mareike',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Had a wonderful time at Thànhs place. Beautiful grounds, comfortable clean rooms and a place thats a 10 minute cycle from the Bai Dinh Pagoda grounds. Thành is an excellent host, very responsive,.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Iredia',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Felt like home. Hang(the wife) makes a great chicken hotpot. Thanhs is very helpful with tips. Gives options on what to see and the best way to see everything, depending on the days you stay.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Mareike',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Had a wonderful time at Thànhs place. Beautiful grounds, comfortable clean rooms and a place thats a 10 minute cycle from the Bai Dinh Pagoda grounds. Thành is an excellent host, very responsive,.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Iredia',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Felt like home. Hang(the wife) makes a great chicken hotpot. Thanhs is very helpful with tips. Gives options on what to see and the best way to see everything, depending on the days you stay.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Mareike',
                    date_cmt: 'tháng 3 năm 2025',
                },
                {
                    cmt: '…Had a wonderful time at Thànhs place. Beautiful grounds, comfortable clean rooms and a place thats a 10 minute cycle from the Bai Dinh Pagoda grounds. Thành is an excellent host, very responsive,.…',
                    img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                    name: 'Iredia',
                    date_cmt: 'tháng 3 năm 2025',
                },
            ],
            destination: [
                {
                    img: 'https://a0.muscache.com/im/pictures/passport/Passport-Gia%20Vien%20District%2C%20VN-18/original/061ddb01-2aae-46b0-8ff2-754eb32934ff.png',
                    title: 'Huyện Gia Viễn, Việt Nam',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/passport/Passport-Hoi%20An%2C%20VN-27/original/22c6be54-de64-4120-a90e-23d1ed38dcfb.png',
                    title: 'Phố cổ Hội An, Việt Nam',
                },
            ],
            ask: [
                {
                    icon: faHeart,
                    title: 'Hoạt động ngoài trời',
                },
                {
                    icon: faHeart,
                    title: 'Kiến trúc',
                },
                {
                    icon: faCamera,
                    title: 'Nhiếp ảnh',
                },
                {
                    icon: faBookOpen,
                    title: 'Đọc',
                },
            ],
            rent: [
                {
                    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-8450875/original/7921aaa9-5099-4c45-8e4c-2505f3eba58b.jpeg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.94,
                    title: 'Double Bungalow Poolside',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-8496481/original/3df02606-9838-4cd2-b087-78bdcae22ca2.jpeg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.79,
                    title: 'Tropical Hideaway Poolside',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/7591b91c-d309-4b98-9b50-6d05fc561493.jpg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.91,
                    title: 'Twin Oasis Bungalow',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/7591b91c-d309-4b98-9b50-6d05fc561493.jpg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.91,
                    title: 'Twin Oasis Bungalow',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-8450875/original/7921aaa9-5099-4c45-8e4c-2505f3eba58b.jpeg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.94,
                    title: 'Double Bungalow Poolside',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-8496481/original/3df02606-9838-4cd2-b087-78bdcae22ca2.jpeg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.79,
                    title: 'Tropical Hideaway Poolside',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/7591b91c-d309-4b98-9b50-6d05fc561493.jpg?im_w=1200',
                    name: 'Bungalow',
                    rating: 4.91,
                    title: 'Twin Oasis Bungalow',
                },
            ],
            book: [
                {
                    img: 'https://a0.muscache.com/im/pictures/GUIDEBOOK/TravelGuideMedium-PHOTO-1857600/original/b9e34764-f860-4954-80f6-7e800c79574f.png?aki_policy=large',
                    title: 'Places to visit',
                },
                {
                    img: 'https://a0.muscache.com/im/pictures/GUIDEBOOK/TravelGuideMedium-PHOTO-1857604/original/294e83b9-7e65-4329-938f-92e0b05f2335.jpg?aki_policy=large',
                    title: 'Places to eat',
                },
            ],
        },
        phanhoi: true,
        information: true,
        note_house: {
            house_rules: {
                check_in_out: [
                    {
                        icon: faHeart,
                        title: 'Nhận phòng sau 12:00',
                    },
                    {
                        icon: faHeart,
                        title: 'Trả phòng trước 12:00',
                    },
                    {
                        icon: faHeart,
                        title: 'Tự nhận phòng bằng nhân viên trực cửa',
                    },
                ],
                time: [
                    {
                        icon: faHeart,
                        title: 'Tối đa 2 khách',
                    },
                    {
                        icon: faHeart,
                        title: 'Không được phép mang theo thú cưng',
                    },
                    {
                        icon: faHeart,
                        title: 'Khung giờ cần giữ yên lặng',
                        time: '22:00 - 08:00',
                    },
                    {
                        icon: faHeart,
                        title: 'Không được tổ chức tiệc hoặc sự kiện',
                    },
                    {
                        icon: faHeart,
                        title: 'Cho phép chụp ảnh vì mục đích thương mai',
                    },
                    {
                        icon: faHeart,
                        title: 'Không hút thuốc',
                    },
                    {
                        icon: faHeart,
                        title: 'Các nội quy khác',
                    },
                ],
            },
            safety_house: {
                device: [
                    {
                        icon: faHeart,
                        title: 'Chỗ ở có camera an ninh ngoài nhà',
                        time: '“Camera an ninh của chúng tôi được lắp đặt ở cổng ra vào , hướng ra bãi đỗ xe . ”',
                    },
                    {
                        icon: faKey,
                        title: 'Không có máy báo khói',
                    },
                    {
                        icon: faKey,
                        title: 'Không cần dùng đến máy phát hiện khí CO',
                        time: 'Chủ nhà cho biết nhà/phòng cho thuê này không cần dùng đến máy phát hiện khí CO – ví dụ: vì tất cả thiết bị trong nhà đều là đồ điện và không dùng đến khí đốt, dầu mỏ, dầu hỏa hoặc củi.',
                    },
                ],
                information: [
                    {
                        icon: faKey,
                        title: 'Một số không gian được sử dụng chung',
                        time: '“- Bể bơi chung ngoài trời - Khu vực BBQ - Nhà hàng ăn ”',
                    },
                    {
                        icon: faKey,
                        title: 'Nhà có thú cưng',
                        time: '““Chúng tôi có một chú chó nhỏ giống Poodle màu trắng tên là Bin”',
                    },
                ],
            },
            policy: true,
        },
        rare: false,
        time: '15:00',
        todo: {
            x: 20.2689, // Vĩ độ của Gia Sinh
            y: 105.8633, // Kinh độ của Gia Sinh
            title: 'Gia Sinh, Ninh Bình',
            height: '500px',
        },
        // van con
    },
    // id: 1
    {
        id: 2,
        heading: 'Homestay tuyệt vời-Tam Coc Palm House-Twins Room',
        image_1:
            'https://a0.muscache.com/im/pictures/6ca3ce8d-692d-4cbc-b004-7d09d6477a47.jpg?im_w=1200&im_format=avif',
        image_2: 'https://a0.muscache.com/im/pictures/8246cb1d-cb4c-4258-a7f1-fd9dc37bc621.jpg?im_w=720&im_format=avif',
        image_3: 'https://a0.muscache.com/im/pictures/d1166589-9fc4-475d-9fcc-79db06efc016.jpg?im_w=720&im_format=avif',
        image_4: 'https://a0.muscache.com/im/pictures/ab3480e4-613c-4e8f-8d05-dd8820a8df1f.jpg?im_w=720&im_format=avif',
        image_5: 'https://a0.muscache.com/im/pictures/d5092300-a37e-442a-8ab8-e43313face52.jpg?im_w=480&im_format=avif',
        heading_container: 'Phòng tại Việt Nam',
        all_container: {
            Guest: '',
            bedroom: '',
            bed: '2 Giường đơn',
            bathroom: 'Phòng vệ sinh chung',
        },
        start: '4,95',
        review: '200',
        img: 'https://mega.com.vn/media/news/1406_hinh-nen-doraemon-4k22.jpg',
        host: 'Ngo',
        year: '7',
        amenities: [
            {
                id: 1,
                icon: faKey,
                title: 'Trải nghiệm nhận phòng xuất sắc',
                description: 'Những khách ở gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.',
            },
            {
                id: 2,
                icon: faSpa,
                title: 'Phòng trong bungalow',
                description: 'Bạn sẽ có phòng riêng trong một ngôi nhà và được sử dụng những khu vực chung.',
            },
            {
                id: 3,
                icon: faUser,
                title: 'Ngo là Chủ nhà siêu cấp',
                description: 'Chủ nhà siêu cấp là những Chủ nhà dày dạn kinh nghiệm, được đánh giá cao.',
            },
        ],
        description: {
            introduction:
                'Vị trí tuyệt vời của chúng tôi mang đến cho bạn một lý tưởng hoàn hảo để khám phá Ninh Bình theo cách du lịch nữ tu. Chúng tôi cung cấp XE ĐẠP miễn phí, trong vòng 10 đến 15 phút đi xe đạp đến tất cả các điểm nổi tiếng ở Ninh Bình: Tam Cốc, Tràng An, Hoa Lư, Hang Mua, v.v. Gia đình bản xứ của chúng tôi sẽ là một cơ sở hoàn hảo cho trải nghiệm của bạn ở Ninh Bình với điều hòa, vòi sen nóng và giường ngủ thoải mái và tầm nhìn đẹp đến cánh đồng lúa và vòm miệng bao quanh bạn. Ở lại với chúng tôi và bạn sẽ có được trải nghiệm thực tế nhất về cuộc sống của người dân địa phương',
            accommodation: {
                title: 'Nằm trong một khu vực yên tĩnh của làng về phía cánh đồng lúa và núi non và người dân địa phương thân thiện. Bạn có thể tận mắt nhìn thấy những dãy núi grotto tuyệt đẹp bao quanh bạn và cánh đồng lúa bất tận chỉ còn vài bước nữa là đến cửa. Bạn có thể nghe những bài hát tuyệt đẹp từ những chú chim thiên nhiên cả ngày và sẵn sàng cho vở opera từ những chú ếch trên cánh đồng lúa gần đó vào ban đêm. Hãy theo người dân địa phương đến chợ của họ vào buổi sáng sớm trong khoảng cách đi bộ để khám phá văn hóa địa phương và bạn hoàn toàn có thể tham gia vào công việc nông trại của họ trên sân lúa và làm vườn. Giá cho thuê xe đạp và xe máy có sẵn tại homestay của chúng tôi với mức giá rất hợp lý.',
            },
            rights: {
                title: 'Mất 10 phút từ ga xe buýt, ga xe lửa và bạn có thể đi cùng taxi, xe buýt, xe máy hoặc Xe đạp. Liên hệ với chúng tôi nếu bạn cần chúng tôi đón',
            },
        },
        bedroom: {
            icon: faBedPulse,
            title: 'Phòng ngủ',
            description: '2 giường đơn',
        },
        place: [
            {
                icon: faSun,
                title: 'Hướng nhìn ra vườn',
            },
            {
                icon: faRightFromBracket,
                title: 'Lối ra hồ',
            },
            {
                icon: faDesktop,
                title: 'Không gian riêng để làm việc',
            },
            {
                icon: faWaterLadder,
                title: 'Hồ bơi chung ',
            },
            {
                icon: faBugSlash,
                title: 'Máy phát hiện khí CO ',
            },
            {
                icon: faMountainSun,
                title: 'Hướng nhìn ra núi',
            },
            {
                icon: faWifi,
                title: 'Wi-fi',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
            {
                icon: faCar,
                title: 'Chỗ đỗ xe miễn phí tại nơi ở',
            },
            {
                icon: faVideoCamera,
                title: 'Chỗ ở có camera an ninh ngoài nhà',
            },
            {
                icon: faBellSlash,
                title: 'Máy báo khói',
            },
        ],
        resot: 'Ninh bình',
        money: '₫450.000',
        bill: '/bill',
        link: [
            {
                icon: faFacebook,
                title: 'Sao chép liên kết',
            },
            {
                icon: faFacebook,
                title: 'Facebook',
            },
            {
                icon: faFacebook,
                title: 'Tin nhắn',
            },
            {
                icon: faFacebook,
                title: 'Twitter',
            },
            {
                icon: faFacebook,
                title: 'Email',
            },
            {
                icon: faFacebook,
                title: 'WhatsApp',
            },
            {
                icon: faFacebook,
                title: 'Nhúng',
            },
            {
                icon: faFacebook,
                title: 'Twitter',
            },
            {
                icon: faFacebook,
                title: 'Tùy chọn khác',
            },
        ],
        images: [
            {
                img_1: 'https://a0.muscache.com/im/pictures/1bffe8be-5fd3-4af8-b88c-a1039f17c508.jpg?im_w=1200&im_format=avif',
                img_2: 'https://a0.muscache.com/im/pictures/49c86be1-7069-411b-92c4-a86fc524b6e9.jpg?im_w=720&im_format=avif',
                img_3: 'https://a0.muscache.com/im/pictures/0aaaa3c1-9473-4648-8e10-6c56b64a0d4c.jpg?im_w=720&im_format=avif',
            },
            {
                img_1: 'https://a0.muscache.com/im/pictures/miso/Hosting-6112630/original/f48f8e4b-51fb-4c2d-93e2-40aaa30459f6.jpeg?im_w=1200&im_format=avif',
                img_2: 'https://a0.muscache.com/im/pictures/58409dd3-9582-480a-92f1-0554fc2e37fe.jpg?im_w=720&im_format=avif',
                img_3: 'https://a0.muscache.com/im/pictures/b1867094-9a4e-428e-a421-f2d1556ae766.jpg?im_w=720&im_format=avif',
            },
        ],
        ratings: [
            { icon: faKey, label: 'Mức độ sạch sẽ', score: 4.9 },
            { icon: faKey, label: 'Độ chính xác', score: 4.9 },
            { icon: faKey, label: 'Nhận phòng', score: 4.9 },
            { icon: faKey, label: 'Giao tiếp', score: 5.0 },
            { icon: faKey, label: 'Vị trí', score: 4.8 },
            { icon: faKey, label: 'Giá trị', score: 4.8 },
        ],
        comment: [
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/6ed45003-b4bf-4251-a7eb-c2c4f9802fe4.jpg?im_w=240',
                name: 'Mareike',
                date_Airbnb: '7 năm hoạt động trên Airbnb',
                date_cmt: '1 ngày trước',
                cmt: 'Chúng tôi yêu thích thời gian lưu trú của mình ngay cả khi thời tiết không quá tốt. Những túp lều nhỏ là riêng tư và xung quanh yên tĩnh. Hoàn hảo cho tôi và gia đình tôi. Chúng tôi đã nhận được sự trợ giúp hoàn hảo để lên kế hoạch cho thời gian lưu trú và đi lại! Thức ăn được cung cấp thực sự rất ngon. Chúng tôi chắc chắn khuyên bạn nên ở tại chỗ ở đáng yêu này!',
            },
        ],
        located_in: {
            place: 'Gia Sinh, Ninh Bình, Việt Nam',
            information: 'We are separated by moutain and valley, paddy field ao we do not have nearby neibor',
            transport: 'We have free bike. Motor and car for rent',
        },
        detail: {
            job: 'Homestay Manager',
            language_1: 'Tiếng Anh',
            language_2: 'Tiếng Trung',
            information:
                'I am Thành, born and raised in the beautiful and tradition-rich land of Ninh Binh. With over 15 years of experience as a local guide, I am passionate about providing guests with unique and memorable experiences of our culture, people, and stunning nature. Ninh Binh Family Homestay was created with the vision of connecting people with nature and offering guests the feeling of being at home.',
        },
        phanhoi: false,
        we_host: [
            {
                img: 'https://a0.muscache.com/im/pictures/user/eeb95bf7-e0ec-48f8-8dfa-10786148c3a7.jpg?im_w=240',
                name: 'Gede Suardika',
            },
            {
                img: 'https://a0.muscache.com/im/pictures/user/User/original/efaf8f2e-c2f2-4af2-80cd-29c43d314c29.jpeg?im_w=240',
                name: 'Pak Esa',
            },
        ],
        information: true,
    },
];
