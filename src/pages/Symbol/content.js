import { RouteConfig } from '~/config/routes';
export const ListHome = [
    {
        id: 1,
        img: 'https://a0.muscache.com/im/pictures/miso/Hosting-1031478286351727813/original/30d376d3-5f2d-473b-b893-05dd29117713.jpeg?im_w=720&im_format=avif&im_origin=fuzzy',
        title: 'Ban Sa Ha Khon, Thái Lan',
        kilomet: 'Cách 735 km',
        month: '1-6 thg 3',
        price: 'đ6.739.363 / đêm',
    },
    {
        id: 2,
        img: 'https://a0.muscache.com/im/pictures/6ca3ce8d-692d-4cbc-b004-7d09d6477a47.jpg?im_w=720&im_format=avif&im_origin=fuzzy',
        title: 'Ninh Bình, Việt Nam',
        kilomet: 'Cách 91 km',
        month: '1-6 thg 3',
        price: 'đ415.959 / đêm',
    },
].map((item) => ({
    ...item,
    to: item.id ? RouteConfig.ProfileSymbol.replace(':id', item.id) : null,
}));
