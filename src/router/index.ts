import AuthLayout from "../layout/auth";
import MainLayout from "../layout/main";
import AdsCreate from "../pages/ads/create";
import AdsLists from "../pages/ads/list";
import AdsUpdate from "../pages/ads/update";
import Login from "../pages/auth/login";
import BlogSlidersCreate from "../pages/blogSliders/create";
import BlogSlidersList from "../pages/blogSliders/list";
import BlogSlidersUpdate from "../pages/blogSliders/update";
import BlogCreate from "../pages/blogs/create";
import BlogList from "../pages/blogs/list";
import BlogUpdate from "../pages/blogs/update";
import BlogsPageCreate from "../pages/blogsPage/create";
import BlogsPageList from "../pages/blogsPage/list";
import BlogsPageUpdate from "../pages/blogsPage/update";
import CategoryCreate from "../pages/categories/create";
import CategoriesList from "../pages/categories/list";
import CategoryUpdate from "../pages/categories/update";
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
import HomeCommentCreate from "../pages/home/commens/create";
import HomeCommentList from "../pages/home/commens/list";
import HomeCommentUpdate from "../pages/home/commens/update";
import FooterCreate from "../pages/home/footer/create";
import FooterList from "../pages/home/footer/list";
import FooterUpdate from "../pages/home/footer/update";
import HomeProductCreate from "../pages/home/products/create";
import HomeProductList from "../pages/home/products/list";
import HomeProductUpdate from "../pages/home/products/update";
import HomeServiceCreate from "../pages/home/services/create";
import HomeServiceList from "../pages/home/services/list";
import HomeServiceUpdate from "../pages/home/services/update";
import HomeVideoCreate from "../pages/home/videos/create";
import HomeVideoList from "../pages/home/videos/list";
import HomeVoiceCreate from "../pages/home/voice/create";
import HomeVoiceList from "../pages/home/voice/list";
import PageCreate from "../pages/page/create";
import PageList from "../pages/page/list";
import PageUpdate from "../pages/page/update";
import PlanCreate from "../pages/plan/create";
import PlanList from "../pages/plan/list";
import PlanUpdate from "../pages/plan/update";
import ProductCreate from "../pages/product/create";
import ProductList from "../pages/product/list";
import ProductUpdate from "../pages/product/update";
import Profile from "../pages/profile";
import SettingPage from "../pages/settings";
import TicketList from "../pages/ticket/list";
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

  // Plans Start
  {
    component: PlanCreate,
    user: true,
    layout: MainLayout,
    path: "/plan-create",
  },
  {
    component: PlanList,
    user: true,
    layout: MainLayout,
    path: "/plan-list",
  },
  {
    component: PlanUpdate,
    user: true,
    layout: MainLayout,
    path: "/plan-list/:id",
  },
  // Plans End

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

  // ‌Blog Slider Start
  {
    component: BlogSlidersCreate,
    user: true,
    layout: MainLayout,
    path: "/blog-slider-create",
  },
  {
    component: BlogSlidersList,
    user: true,
    layout: MainLayout,
    path: "/blog-slider-list",
  },
  {
    component: BlogSlidersUpdate,
    user: true,
    layout: MainLayout,
    path: "/blog-slider-list/:id",
  },
  // ‌Blog Slider End

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
    component: CommentList,
    user: true,
    layout: MainLayout,
    path: "/comment-list",
  },
  {
    component: CommentUpdate,
    user: true,
    layout: MainLayout,
    path: "/comment-list/:id",
  },

  // Comment End

  //Home Start
  // Home Comments Start
  {
    component: HomeCommentCreate,
    user: true,
    layout: MainLayout,
    path: "/home/comments-create",
  },
  {
    component: HomeCommentList,
    user: true,
    layout: MainLayout,
    path: "/home/comments-list",
  },
  {
    component: HomeCommentUpdate,
    user: true,
    layout: MainLayout,
    path: "/home/comments-list/:id",
  },
  // Home Comments End

  // Home Products Start
  {
    component: HomeProductCreate,
    user: true,
    layout: MainLayout,
    path: "/home/products-create",
  },
  {
    component: HomeProductList,
    user: true,
    layout: MainLayout,
    path: "/home/products-list",
  },
  {
    component: HomeProductUpdate,
    user: true,
    layout: MainLayout,
    path: "/home/products-list/:id",
  },
  // Home Products End

  // Home Videos Start
  {
    component: HomeVideoCreate,
    user: true,
    layout: MainLayout,
    path: "/home/videos-create",
  },
  {
    component: HomeVideoList,
    user: true,
    layout: MainLayout,
    path: "/home/videos-list",
  },
  // Home Videos End

  // Home Services Start
  {
    component: HomeServiceCreate,
    user: true,
    layout: MainLayout,
    path: "/home/services-create",
  },
  {
    component: HomeServiceList,
    user: true,
    layout: MainLayout,
    path: "/home/services-list",
  },
  {
    component: HomeServiceUpdate,
    user: true,
    layout: MainLayout,
    path: "/home/services-list/:id",
  },
  // Home Services End
  // Footer Start
  {
    component: FooterCreate,
    user: true,
    layout: MainLayout,
    path: "/footer-create",
  },
  {
    component: FooterList,
    user: true,
    layout: MainLayout,
    path: "/footer-list",
  },
  {
    component: FooterUpdate,
    user: true,
    layout: MainLayout,
    path: "/footer-list/:id",
  },
  // Footer End
  // Voice Start
  {
    component: HomeVoiceCreate,
    user: true,
    layout: MainLayout,
    path: "/voice-create",
  },
  {
    component: HomeVoiceList,
    user: true,
    layout: MainLayout,
    path: "/voice-list",
  },
  // Voice End
  //Home End
  // Settings Start
  {
    component: SettingPage,
    user: true,
    layout: MainLayout,
    path: "/settings",
  },
  // Settings End
  // Page Start
  {
    component: PageCreate,
    user: true,
    layout: MainLayout,
    path: "/page-create",
  },
  {
    component: PageList,
    user: true,
    layout: MainLayout,
    path: "/page-list",
  },
  {
    component: PageUpdate,
    user: true,
    layout: MainLayout,
    path: "/page-list/:id",
  },
  // Page End
  // Blogs Page Start
  {
    component: BlogsPageCreate,
    user: true,
    layout: MainLayout,
    path: "/blogs-page-create",
  },
  {
    component: BlogsPageList,
    user: true,
    layout: MainLayout,
    path: "/blogs-page-list",
  },
  {
    component: BlogsPageUpdate,
    user: true,
    layout: MainLayout,
    path: "/blogs-page-list/:id",
  },
  // Blogs Page End
];
