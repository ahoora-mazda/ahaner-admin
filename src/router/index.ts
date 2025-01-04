import AuthLayout from "../layout/auth";
import MainLayout from "../layout/main";
import AdminCreate from "../pages/admin/create";
import AdminList from "../pages/admin/list";
import AdminUpdate from "../pages/admin/update";
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
import MomentPriceCreate from "../pages/home/momentPrices/create";
import MomentPriceList from "../pages/home/momentPrices/list";
import MomentPriceUpdate from "../pages/home/momentPrices/update";
import ProductCreate from "../pages/product/create";
import ProductInfo from "../pages/product/info";
import ProductList from "../pages/product/list";
import ProductUpdate from "../pages/product/update";
import ProductCoreCreate from "../pages/productCore/create";
import ProductCoreList from "../pages/productCore/list";
import ProductCoreUpdate from "../pages/productCore/update";
import Profile from "../pages/profile";
import PropertyCreate from "../pages/property/create";
import PropertyList from "../pages/property/list";
import PropertyUpdate from "../pages/property/update";
import RequestPrices from "../pages/requestPrices/list";
import RoleCreate from "../pages/roles/create";
import RoleList from "../pages/roles/list";
import RoleUpdate from "../pages/roles/update";
import SettingPage from "../pages/settings";
import TeamCreate from "../pages/team/create";
import TeamList from "../pages/team/list";
import TeamUpdate from "../pages/team/update";
import UsefulLinksCreate from "../pages/usefulLinks/create";
import UsefulLinksList from "../pages/usefulLinks/list";
import UsefulLinkUpdate from "../pages/usefulLinks/update";
import UserCreate from "../pages/user/create";
import UserList from "../pages/user/list";
import UserUpdate from "../pages/user/update";
import VideoCreate from "../pages/video/create";
import VideoList from "../pages/video/list";
import VideoUpdate from "../pages/video/update";
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
    accessKey: ["admin_category_create"],
  },
  {
    component: CategoriesList,
    user: true,
    layout: MainLayout,
    path: "/category-list",
    accessKey: ["admin_categories_read"],
  },
  {
    component: CategoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/category-list/:id",
    accessKey: "admin_category_read",
  },
  // Category End

  // blog Start
  {
    component: BlogCreate,
    user: true,
    layout: MainLayout,
    path: "/blog-create",
    accessKey: ["admin_blog_create"],
  },
  {
    component: BlogList,
    user: true,
    layout: MainLayout,
    path: "/blog-list",
    accessKey: ["admin_blogs_read"],
  },
  {
    component: BlogUpdate,
    user: true,
    layout: MainLayout,
    path: "/blog-list/:id",
    accessKey: ["admin_blog_read"],
  },
  // blog End

  // faq Start
  {
    component: FaqCreate,
    user: true,
    layout: MainLayout,
    path: "/faq-create",
    accessKey: ["admin_faq_create"],
  },
  {
    component: FaqList,
    user: true,
    layout: MainLayout,
    path: "/faq-list",
    accessKey: ["admin_faqs_read"],
  },
  {
    component: FaqUpdate,
    user: true,
    layout: MainLayout,
    path: "/faq-list/:id",
    accessKey: ["admin_faq_read"],
  },
  // faq End

  // Group Start
  {
    component: GroupCreate,
    user: true,
    layout: MainLayout,
    path: "/group-create",
    accessKey: ["admin_group_create"],
  },
  {
    component: GroupList,
    user: true,
    layout: MainLayout,
    path: "/group-list",
    accessKey: ["admin_groups_read"],
  },
  {
    component: GroupUpdate,
    user: true,
    layout: MainLayout,
    path: "/group-list/:id",
    accessKey: ["admin_group_read"],
  },
  // Group End

  // Products Start
  {
    component: ProductCreate,
    user: true,
    layout: MainLayout,
    path: "/product-create",
    accessKey: ["admin_product_create"],
  },
  {
    component: ProductList,
    user: true,
    layout: MainLayout,
    path: "/product-list",
    accessKey: ["admin_products_read"],
  },
  {
    component: ProductUpdate,
    user: true,
    layout: MainLayout,
    path: "/product-list/:id",
    accessKey: ["admin_product_read", "admin_product_price_history_read"],
  },
  // Products End
  // Headers Start
  {
    component: HeaderCreate,
    user: true,
    layout: MainLayout,
    path: "/header-create",
    accessKey: ["admin_header_create"],
  },
  {
    component: HeaderLists,
    user: true,
    layout: MainLayout,
    path: "/header-list",
    accessKey: ["admin_headers_read"],
  },
  {
    component: HeaderUpdate,
    user: true,
    layout: MainLayout,
    path: "/header-list/:id",
    accessKey: ["admin_header_read"],
  },
  // Headers End

  // Comment Start
  {
    component: CommentCreate,
    user: true,
    layout: MainLayout,
    path: "/comments-create",
    accessKey: ["admin_comment_create"],
  },
  {
    component: CommentList,
    user: true,
    layout: MainLayout,
    path: "/comments-list",
    accessKey: ["admin_comments_read"],
  },
  {
    component: CommentUpdate,
    user: true,
    layout: MainLayout,
    path: "/comments-list/:id",

    accessKey: ["admin_comment_read"],
  },

  // Comment End

  // Settings Start
  {
    component: SettingPage,
    user: true,
    layout: MainLayout,
    path: "/settings",
    accessKey: ["admin_settings_read"],
  },
  // Settings End

  // Users Page Start
  {
    component: UserCreate,
    user: true,
    layout: MainLayout,
    path: "/user-create",
    accessKey: ["admin_user_create"],
  },
  {
    component: UserList,
    user: true,
    layout: MainLayout,
    path: "/user-list",
    accessKey: ["admin_users_read"],
  },
  {
    component: UserUpdate,
    user: true,
    layout: MainLayout,
    path: "/user-list/:id",
    accessKey: ["admin_user_read"],
  },
  // Users Page End
  // Teams Page Start
  {
    component: TeamCreate,
    user: true,
    layout: MainLayout,
    path: "/team-create",
    accessKey: ["admin_team_info_create"],
  },
  {
    component: TeamList,
    user: true,
    layout: MainLayout,
    accessKey: ["admin_team_infos_read"],
    path: "/team-list",
  },
  {
    component: TeamUpdate,
    user: true,
    layout: MainLayout,
    path: "/team-list/:id",
    accessKey: ["admin_team_info_read"],
  },
  // Teams Page End
  // property Start
  {
    component: PropertyCreate,
    user: true,
    layout: MainLayout,
    path: "/property-create",
    accessKey: ["admin_property_create"],
  },
  {
    component: PropertyList,
    user: true,
    layout: MainLayout,
    path: "/property-list",
    accessKey: ["admin_properties_read"],
  },
  {
    component: PropertyUpdate,
    user: true,
    layout: MainLayout,
    accessKey: ["admin_property_read"],
    path: "/property-list/:id",
  },
  // property End
  // usefullinks Start
  {
    component: UsefulLinksCreate,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-create",
    accessKey: ["admin_useful_link_create"],
  },
  {
    component: UsefulLinksList,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-list",
    accessKey: ["admin_useful_links_read"],
  },
  {
    component: UsefulLinkUpdate,
    user: true,
    layout: MainLayout,
    path: "/usefullinks-list/:id",
    accessKey: ["admin_useful_link_read"],
  },
  // usefullinks End
  // Moment Prices Start
  {
    component: MomentPriceCreate,
    user: true,
    layout: MainLayout,
    path: "/home_momentPrices-create",
    accessKey: "admin_moment_price_create",
  },
  {
    component: MomentPriceList,
    user: true,
    layout: MainLayout,
    path: "/home_momentPrices-list",
    accessKey: "admin_moment_prices_read",
  },
  {
    component: MomentPriceUpdate,
    user: true,
    layout: MainLayout,
    accessKey: "admin_moment_price_read",
    path: "/home_momentPrices-list/:id",
  },
  // Moment Prices End
  // Recent Prices Start
  {
    component: HistoryCreate,
    user: true,
    layout: MainLayout,
    path: "/history-create",
    accessKey: "admin_product_price_history_create",
  },
  {
    component: HistoryLists,
    user: true,
    layout: MainLayout,
    path: "/history-list",
    accessKey: ["admin_product_price_histories_read"],
  },
  {
    component: HistoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/history-list/:id",
    accessKey: ["admin_product_price_history_read"],
  },
  // Recent Prices End
  // Recent Prices Start
  {
    component: HomeCategoryCreate,
    user: true,
    layout: MainLayout,
    path: "/home-category-create",
    accessKey: "admin_category_view_create",
  },
  {
    component: HomeCategoryLists,
    user: true,
    layout: MainLayout,
    path: "/home-category-list",
    accessKey: "admin_category_views_read",
  },
  {
    component: HomeCategoryUpdate,
    user: true,
    layout: MainLayout,
    path: "/home-category-list/:id",
    accessKey: "admin_category_view_read",
  },
  // Recent Prices End
  // ProductCoreCreate Start
  {
    component: ProductCoreCreate,
    user: true,
    layout: MainLayout,
    path: "/product-core-create",
    accessKey: "admin_product_core_create",
  },
  {
    component: ProductCoreList,
    user: true,
    layout: MainLayout,
    path: "/product-core-list",
    accessKey: "admin_product_cores_read",
  },
  {
    component: ProductCoreUpdate,
    user: true,
    layout: MainLayout,
    path: "/product-core-list/:id",
    accessKey: "admin_product_core_read",
  },
  // ProductCoreCreate End
  // Recent Prices Start
  {
    component: VideoCreate,
    user: true,
    layout: MainLayout,
    path: "/videos-create",
    accessKey: "admin_video_create",
  },
  {
    component: VideoList,
    user: true,
    layout: MainLayout,
    accessKey: "admin_videos_read",
    path: "/videos-list",
  },
  {
    component: VideoUpdate,
    user: true,
    layout: MainLayout,
    path: "/videos-list/:id",
    accessKey: "admin_video_read",
  },
  // Recent Prices End
  {
    component: RequestPrices,
    user: true,
    layout: MainLayout,
    path: "/request-prices-list",
    accessKey: "admin_price_requests_read",
  },

  {
    component: AdminCreate,
    user: true,
    layout: MainLayout,
    path: "/admin-create",
  },
  {
    component: AdminList,
    user: true,
    layout: MainLayout,
    path: "/admin-list",
  },
  {
    component: AdminUpdate,
    user: true,
    layout: MainLayout,
    path: "/admin-list/:id",
  },

  {
    component: RoleCreate,
    user: true,
    layout: MainLayout,
    path: "/role-create",
    accessKey: "admin_admin_create",
  },
  {
    component: RoleList,
    user: true,
    layout: MainLayout,
    path: "/role-list",
    accessKey: "admin_admins_read",
  },
  {
    component: RoleUpdate,
    user: true,
    layout: MainLayout,
    path: "/role-list/:id",
    accessKey: "admin_admin_read",
  },
];
