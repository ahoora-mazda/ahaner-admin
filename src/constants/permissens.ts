export const permissions: any = {
  categories: {
    title: "دسته‌بندی‌ها",
    actions: [
      { key: "admin_categories_read", title: "نمایش دسته‌بندی‌ها" },
      { key: "admin_category_read", title: "نمایش دسته‌بندی" },
      { key: "admin_category_create", title: "ایجاد دسته‌بندی" },
      { key: "admin_category_update", title: "ویرایش دسته‌بندی" },
      { key: "admin_category_delete", title: "حذف دسته‌بندی" },
    ],
  },
  categoryViews: {
    title: "دسته‌بندی‌های صغحه اصلی",
    actions: [
      { key: "admin_category_views_read", title: "نمایش دسته‌بندی‌ها" },
      { key: "admin_category_view_read", title: "نمایش دسته‌بندی" },
      { key: "admin_category_view_create", title: "ایجاد دسته‌بندی" },
      { key: "admin_category_view_update", title: "ویرایش دسته‌بندی" },
      { key: "admin_category_view_delete", title: "حذف دسته‌بندی" },
    ],
  },
  products: {
    title: "محصولات",
    actions: [
      { key: "admin_products_read", title: "نمایش محصولات" },
      { key: "admin_product_read", title: "نمایش محصول" },
      { key: "admin_product_create", title: "ایجاد محصول" },
      { key: "admin_product_update", title: "ویرایش محصول" },
      { key: "admin_product_delete", title: "حذف محصول" },
      { key: "admin_product_cores_read", title: "نمایش محصولات اصلی" },
      { key: "admin_product_core_read", title: "نمایش محصول اصلی" },
      { key: "admin_product_core_create", title: "ایجاد محصول اصلی" },
      { key: "admin_product_core_update", title: "ویرایش محصول اصلی" },
      { key: "admin_product_core_delete", title: "حذف محصول اصلی" },
      {
        key: "admin_product_price_history_export",
        title: "صادر کردن تاریخچه قیمت محصول",
      },
      {
        key: "admin_product_price_histories_read",
        title: "نمایش تاریخچه‌های قیمت محصول",
      },
      {
        key: "admin_product_price_history_read",
        title: "نمایش تاریخچه قیمت محصول",
      },
      {
        key: "admin_product_price_history_create",
        title: "ایجاد تاریخچه قیمت محصول",
      },
      {
        key: "admin_product_price_history_update",
        title: "ویرایش تاریخچه قیمت محصول",
      },
      {
        key: "admin_product_price_history_delete",
        title: "حذف تاریخچه قیمت محصول",
      },
    ],
  },
  properties: {
    title: "ویژگی‌ها",
    actions: [
      { key: "admin_properties_read", title: "نمایش ویژگی‌ها" },
      { key: "admin_property_read", title: "نمایش ویژگی" },
      { key: "admin_property_create", title: "ایجاد ویژگی" },
      { key: "admin_property_update", title: "ویرایش ویژگی" },
      { key: "admin_property_delete", title: "حذف ویژگی" },
    ],
  },
  groups: {
    title: "گروه‌ها",
    actions: [
      { key: "admin_groups_read", title: "نمایش گروه‌ها" },
      { key: "admin_group_read", title: "نمایش گروه" },
      { key: "admin_group_create", title: "ایجاد گروه" },
      { key: "admin_group_update", title: "ویرایش گروه" },
      { key: "admin_group_delete", title: "حذف گروه" },
    ],
  },
  faqs: {
    title: "سؤالات متداول",
    actions: [
      { key: "admin_faqs_read", title: "نمایش سؤالات متداول" },
      { key: "admin_faq_read", title: "نمایش سؤال متداول" },
      { key: "admin_faq_create", title: "ایجاد سؤال متداول" },
      { key: "admin_faq_update", title: "ویرایش سؤال متداول" },
      { key: "admin_faq_delete", title: "حذف سؤال متداول" },
    ],
  },
  teamInfos: {
    title: "اطلاعات تیم",
    actions: [
      { key: "admin_team_infos_read", title: "نمایش اطلاعات تیم" },
      { key: "admin_team_info_read", title: "نمایش اطلاعات تیم" },
      { key: "admin_team_info_create", title: "ایجاد اطلاعات تیم" },
      { key: "admin_team_info_update", title: "ویرایش اطلاعات تیم" },
      { key: "admin_team_info_delete", title: "حذف اطلاعات تیم" },
    ],
  },
  usefulLinks: {
    title: "لینک‌های مفید",
    actions: [
      { key: "admin_useful_links_read", title: "نمایش لینک‌های مفید" },
      { key: "admin_useful_link_read", title: "نمایش لینک مفید" },
      { key: "admin_useful_link_create", title: "ایجاد لینک مفید" },
      { key: "admin_useful_link_update", title: "ویرایش لینک مفید" },
      { key: "admin_useful_link_delete", title: "حذف لینک مفید" },
    ],
  },
  users: {
    title: "کاربران",
    actions: [
      { key: "admin_users_read", title: "نمایش کاربران" },
      { key: "admin_user_read", title: "نمایش کاربر" },
      { key: "admin_user_create", title: "ایجاد کاربر" },
      { key: "admin_user_update", title: "ویرایش کاربر" },
      { key: "admin_user_delete", title: "حذف کاربر" },
    ],
  },
  comments: {
    title: "نظرات",
    actions: [
      { key: "admin_comments_read", title: "نمایش نظرات" },
      { key: "admin_comment_read", title: "نمایش نظر" },
      { key: "admin_comment_create", title: "ایجاد نظر" },
      { key: "admin_comment_update", title: "ویرایش نظر" },
      { key: "admin_comment_delete", title: "حذف نظر" },
    ],
  },
  settings: {
    title: "تنظیمات",
    actions: [
      { key: "admin_settings_read", title: "نمایش تنظیمات" },
      {
        key: "admin_settings_create_or_update",
        title: "ایجاد یا ویرایش تنظیمات",
      },
    ],
  },
  blogs: {
    title: "وبلاگ‌ها",
    actions: [
      { key: "admin_blogs_read", title: "نمایش وبلاگ‌ها" },
      { key: "admin_blog_read", title: "نمایش وبلاگ" },
      { key: "admin_blog_image_upload", title: "آپلود تصویر وبلاگ" },
      { key: "admin_blog_create", title: "ایجاد وبلاگ" },
      { key: "admin_blog_update", title: "ویرایش وبلاگ" },
      { key: "admin_blog_delete", title: "حذف وبلاگ" },
    ],
  },
  momentPrices: {
    title: "قیمت‌های لحظه‌ای",
    actions: [
      { key: "admin_moment_prices_read", title: "نمایش قیمت‌های لحظه‌ای" },
      { key: "admin_moment_price_read", title: "نمایش قیمت لحظه‌ای" },
      { key: "admin_moment_price_create", title: "ایجاد قیمت لحظه‌ای" },
      { key: "admin_moment_price_update", title: "ویرایش قیمت لحظه‌ای" },
      { key: "admin_moment_price_delete", title: "حذف قیمت لحظه‌ای" },
    ],
  },
  videos: {
    title: "ویدیوها",
    actions: [
      { key: "admin_videos_read", title: "نمایش ویدیوها" },
      { key: "admin_video_read", title: "نمایش ویدیو" },
      { key: "admin_video_create", title: "ایجاد ویدیو" },
      { key: "admin_video_update", title: "ویرایش ویدیو" },
      { key: "admin_video_delete", title: "حذف ویدیو" },
    ],
  },
  priceRequests: {
    title: "درخواست‌های قیمت",
    actions: [
      { key: "admin_price_requests_read", title: "نمایش درخواست‌های قیمت" },
      { key: "admin_price_request_read", title: "نمایش درخواست قیمت" },
      {
        key: "admin_price_request_status_update",
        title: "ویرایش وضعیت درخواست قیمت",
      },
      { key: "admin_price_request_delete", title: "حذف درخواست قیمت" },
    ],
  },
  headers: {
    title: "هدرها",
    actions: [
      { key: "admin_headers_read", title: "نمایش هدرها" },
      { key: "admin_header_read", title: "نمایش هدر" },
      { key: "admin_header_create", title: "ایجاد هدر" },
      { key: "admin_header_update", title: "ویرایش هدر" },
      { key: "admin_header_delete", title: "حذف هدر" },
    ],
  },
  admins: {
    title: "مدیران",
    actions: [
      { key: "admin_admins_read", title: "نمایش مدیران" },
      { key: "admin_admin_read", title: "نمایش مدیر" },
      { key: "admin_admin_create", title: "ایجاد مدیر" },
      { key: "admin_admin_update", title: "ویرایش مدیر" },
      { key: "admin_admin_delete", title: "حذف مدیر" },
    ],
  },
};
