import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "../views/product/ProductsView.vue";
import DetailProduct from "../views/product/DetailProduct.vue";
import ShoppingCart from "../views/cart/ShoppingCart.vue";
import LoginView from "@/views/LoginView.vue";
import AdminView from "@/views/admin/AdminView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "detail-product",
    component: DetailProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  // {
  //   path: "/*",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
