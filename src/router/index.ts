import AuthLayout from "../layout/auth";
import MainLayout from "../layout/main";
import AdsCreate from "../pages/ads/create";
import AdsLists from "../pages/ads/list";
import AdsUpdate from "../pages/ads/update";
import Login from "../pages/auth/login";
import BlogCreate from "../pages/blogs/create";
import BlogList from "../pages/blogs/list";
import BlogUpdate from "../pages/blogs/update";
import CategoryCreate from "../pages/categories/create";
import CategoriesList from "../pages/categories/list";
import CategoryUpdate from "../pages/categories/update";
import CommentCreate from "../pages/comment/create";
import CommentList from "../pages/comment/list";
import CommentUpdate from "../pages/comment/update";
import Dashboard from "../pages/dashboard";
import FaqCreate from "../pages/faq/create";
import FaqList from "../pages/faq/list";
import FaqUpdate from "../pages/faq/update";
import GroupCreate from "../pages/group/create";
import GroupList from "../pages/group/list";
import GroupUpdate from "../pages/group/update";
import HeaderCreate from "../pages/header/create";
import HeaderLists from "../pages/header/list";
import HeaderUpdate from "../pages/header/update";
import HistoryCreate from "../pages/history/create";
import HistoryLists from "../pages/history/list";
import HistoryUpdate from "../pages/history/update";
import HomeCategoryCreate from "../pages/home/category/create";
import HomeCategoryLists from "../pages/home/category/list";
import HomeCategoryUpdate from "../pages/home/category/update";
import DayPriceCreate from "../pages/home/dayPrices/create";
import DayPriceList from "../pages/home/dayPrices/list";
import DayPriceUpdate from "../pages/home/dayPrices/update";
import MomentPriceCreate from "../pages/home/momentPrices/create";
import MomentPriceList from "../pages/home/momentPrices/list";
import MomentPriceUpdate from "../pages/home/momentPrices/update";
import RecentPriceCreate from "../pages/home/recentPrices/create";
import RecentPriceList from "../pages/home/recentPrices/list";
import RecentPriceUpdate from "../pages/home/recentPrices/update";
import ProductCreate from "../pages/product/create";
import ProductList from "../pages/product/list";
import ProductUpdate from "../pages/product/update";
import Profile from "../pages/profile";
import PropertyCreate from "../pages/property/create";
import PropertyList from "../pages/property/list";
import PropertyUpdate from "../pages/property/update";
import SettingPage from "../pages/settings";
import TeamCreate from "../pages/team/create";
import TeamList from "../pages/team/list";
import TeamUpdate from "../pages/team/update";
import TicketList from "../pages/ticket/list";
import UsefulLinksCreate from "../pages/usefulLinks/create";
import UsefulLinksList from "../pages/usefulLinks/list";
import UsefulLinkUpdate from "../pages/usefulLinks/update";
import UserCreate from "../pages/user/create";
import UserList from "../pages/user/list";
import UserUpdate from "../pages/user/update";
import { route } from "../types/route";

export const routes: route[] = [
  // Auth Start
  {
    component: Login,
    user: false,
    layout: AuthLayout,
    path: "/login",
  },
  // Auth End

  // Dashboard Start
  {
    component: Dashboard,
    user: true,
    layout: MainLayout,
    path: "/",
  },
  // Dashboard End

  //Profile Start
  {
    component: Profile,
    user: true,
    layout: MainLayout,
    path: "/profile",
    accessKey: ["admin_profile", "subscriber"],
  },
  //Profile End

  // Category Start
  {
    component: CategoryCreate,
    user: true,
    layout: MainLayout,
    path: "/category-create",
  },
  {
    component: CategoriesList,
    user: true,
    layout: MainLayout,
    path: "/category-list",
  },
  {
    component: CategoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/category-list/:id",
  },
  // Category End

  // blog Start
  {
    component: BlogCreate,
    user: true,
    layout: MainLayout,
    path: "/blog-create",
  },
  {
    component: BlogList,
    user: true,
    layout: MainLayout,
    path: "/blog-list",
  },
  {
    component: BlogUpdate,
    user: true,
    layout: MainLayout,
    path: "/blog-list/:id",
  },
  // blog End

  // faq Start
  {
    component: FaqCreate,
    user: true,
    layout: MainLayout,
    path: "/faq-create",
  },
  {
    component: FaqList,
    user: true,
    layout: MainLayout,
    path: "/faq-list",
  },
  {
    component: FaqUpdate,
    user: true,
    layout: MainLayout,
    path: "/faq-list/:id",
  },
  // faq End

  // Group Start
  {
    component: GroupCreate,
    user: true,
    layout: MainLayout,
    path: "/group-create",
  },
  {
    component: GroupList,
    user: true,
    layout: MainLayout,
    path: "/group-list",
  },
  {
    component: GroupUpdate,
    user: true,
    layout: MainLayout,
    path: "/group-list/:id",
  },
  // Group End

  // Ads Start
  {
    component: AdsCreate,
    user: true,
    layout: MainLayout,
    path: "/ads-create",
  },
  {
    component: AdsLists,
    user: true,
    layout: MainLayout,
    path: "/ads-list",
  },
  {
    component: AdsUpdate,
    user: true,
    layout: MainLayout,
    path: "/ads-list/:id",
  },
  // Ads End

  // Products Start
  {
    component: ProductCreate,
    user: true,
    layout: MainLayout,
    path: "/product-create",
  },
  {
    component: ProductList,
    user: true,
    layout: MainLayout,
    path: "/product-list",
  },
  {
    component: ProductUpdate,
    user: true,
    layout: MainLayout,
    path: "/product-list/:id",
  },
  // Products End
  // Headers Start
  {
    component: HeaderCreate,
    user: true,
    layout: MainLayout,
    path: "/header-create",
  },
  {
    component: HeaderLists,
    user: true,
    layout: MainLayout,
    path: "/header-list",
  },
  {
    component: HeaderUpdate,
    user: true,
    layout: MainLayout,
    path: "/header-list/:id",
  },
  // Headers End

  // Ticket Start

  {
    component: TicketList,
    user: true,
    layout: MainLayout,
    path: "/ticket-list",
  },

  // Ticket End

  // Comment Start
  {
    component: CommentCreate,
    user: true,
    layout: MainLayout,
    path: "/comments-create",
  },
  {
    component: CommentList,
    user: true,
    layout: MainLayout,
    path: "/comments-list",
  },
  {
    component: CommentUpdate,
    user: true,
    layout: MainLayout,
    path: "/comments-list/:id",
  },

  // Comment End

  // Settings Start
  {
    component: SettingPage,
    user: true,
    layout: MainLayout,
    path: "/settings",
  },
  // Settings End

  // Users Page Start
  {
    component: UserCreate,
    user: true,
    layout: MainLayout,
    path: "/user-create",
  },
  {
    component: UserList,
    user: true,
    layout: MainLayout,
    path: "/user-list",
  },
  {
    component: UserUpdate,
    user: true,
    layout: MainLayout,
    path: "/user-list/:id",
  },
  // Users Page End
  // Teams Page Start
  {
    component: TeamCreate,
    user: true,
    layout: MainLayout,
    path: "/team-create",
  },
  {
    component: TeamList,
    user: true,
    layout: MainLayout,
    path: "/team-list",
  },
  {
    component: TeamUpdate,
    user: true,
    layout: MainLayout,
    path: "/team-list/:id",
  },
  // Teams Page End
  // property Start
  {
    component: PropertyCreate,
    user: true,
    layout: MainLayout,
    path: "/property-create",
  },
  {
    component: PropertyList,
    user: true,
    layout: MainLayout,
    path: "/property-list",
  },
  {
    component: PropertyUpdate,
    user: true,
    layout: MainLayout,
    path: "/property-list/:id",
  },
  // property End
  // usefullinks Start
  {
    component: UsefulLinksCreate,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-create",
  },
  {
    component: UsefulLinksList,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-list",
  },
  {
    component: UsefulLinkUpdate,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-list/:id",
  },
  // usefullinks End
  // Day Prices Start
  {
    component: DayPriceCreate,
    user: true,
    layout: MainLayout,
    path: "/home_dayPrices-create",
  },
  {
    component: DayPriceList,
    user: true,
    layout: MainLayout,
    path: "/home_dayPrices-list",
  },
  {
    component: DayPriceUpdate,
    user: true,
    layout: MainLayout,
    path: "/home_dayPrices-list/:id",
  },
  // Day Prices End
  // Moment Prices Start
  {
    component: MomentPriceCreate,
    user: true,
    layout: MainLayout,
    path: "/home_momentPrices-create",
  },
  {
    component: MomentPriceList,
    user: true,
    layout: MainLayout,
    path: "/home_momentPrices-list",
  },
  {
    component: MomentPriceUpdate,
    user: true,
    layout: MainLayout,
    path: "/home_momentPrices-list/:id",
  },
  // Moment Prices End
  // Recent Prices Start
  {
    component: RecentPriceCreate,
    user: true,
    layout: MainLayout,
    path: "/home_recentPrices-create",
  },
  {
    component: RecentPriceList,
    user: true,
    layout: MainLayout,
    path: "/home_recentPrices-list",
  },
  {
    component: RecentPriceUpdate,
    user: true,
    layout: MainLayout,
    path: "/home_recentPrices-list/:id",
  },
  // Recent Prices End
  // Recent Prices Start
  {
    component: HistoryCreate,
    user: true,
    layout: MainLayout,
    path: "/history-create",
  },
  {
    component: HistoryLists,
    user: true,
    layout: MainLayout,
    path: "/history-list",
  },
  {
    component: HistoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/history-list/:id",
  },
  // Recent Prices End
  // Recent Prices Start
  {
    component: HomeCategoryCreate,
    user: true,
    layout: MainLayout,
    path: "/home-category-create",
  },
  {
    component: HomeCategoryLists,
    user: true,
    layout: MainLayout,
    path: "/home-category-list",
  },
  {
    component: HomeCategoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/home-category-list/:id",
  },
  // Recent Prices End
];
