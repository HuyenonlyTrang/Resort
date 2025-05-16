import Home from '~/pages/Home';
import Post from '~/pages/Post';
import Search from '~/pages/Messages';
import Symbol from '~/pages/Symbol';
import User from '~/pages/User';
import Bill from '~/pages/Bill';
import Messages from '~/pages/Messages';
import Notifications from '~/pages/Notifications';
import Trip from '~/pages/Trip';
import Help from '~/pages/Help';
import Hosting from '~/pages/Hosting';
import HelpSearch from '~/pages/HelpSreach';
import ProfileHome from '~/pages/pageChildren/ProfileHome';
import ProfileSymbol from '~/pages/pageChildren/ProfileSymbol';
import { HeaderLayout, HeaderLayout_one, HeaderLayout_two, HeaderLayout_three } from '~/components/Layout';
import { RouteConfig } from '~/config/routes.js';

export const publicRoutes = [
    {
        path: RouteConfig.Home,
        component: Home,
    },
    {
        path: RouteConfig.Post,
        component: Post,
        layout: HeaderLayout_two,
    },
    {
        path: RouteConfig.Search,
        component: Search,
    },
    {
        path: RouteConfig.Symbol,
        component: Symbol,
    },
    {
        path: RouteConfig.User,
        component: User,
        layout: HeaderLayout,
    },
    {
        path: RouteConfig.ProfileHome.replace(':id', ':id'), // ✅ Đảm bảo `:id` không bị thay thế
        component: ProfileHome,
        layout: HeaderLayout,
    },
    {
        path: RouteConfig.ProfileSymbol.replace(':id', ':id'), // ✅ Đảm bảo `:id` không bị thay thế
        component: ProfileSymbol,
        layout: HeaderLayout,
    },
    {
        path: RouteConfig.Bill,
        component: Bill,
        layout: null,
    },
    {
        path: RouteConfig.Messages,
        component: Messages,
        layout: HeaderLayout_one,
    },
    {
        path: RouteConfig.Notifications,
        component: Notifications,
        layout: HeaderLayout_one,
    },
    {
        path: RouteConfig.Trip,
        component: Trip,
        layout: HeaderLayout_one,
    },
    {
        path: RouteConfig.Help,
        component: Help,
        layout: HeaderLayout_one,
    },
    {
        path: RouteConfig.HelpSearch,
        component: HelpSearch,
        layout: HeaderLayout_one,
    },
    {
        path: `${RouteConfig.Hosting}/*`,
        component: Hosting,
        layout: HeaderLayout_three,
    },
    {
        path: RouteConfig.HostingMessage,
        component: Messages,
        layout: HeaderLayout_one,
    },
];
export const privateRoutes = [];
