import About from "../pages/About";
import { Forgot, SignIn, SignUp } from "../components/page_components/Auth";
import Basket from "../pages/Korzina";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Categories from "../components/page_components/Products/Categories";
import Observe from "../components/page_components/Products/Observe";

export const publicRoutes = [
  {
    name: "Sign In",
    path: "/sign-in",
    component: SignIn,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Forgot",
    path: "/forgot",
    component: Forgot,
  },
]


export const privateRoutes = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },
  {
    name: "Products",
    path: "/products",
    component: Products,
  },
  {
    name: "Products/:id",
    path: "/products/:id",
    component: Categories,
  },
  {
    name: "Products/:id/:item",
    path: "/products/:id/:item",
    component: Observe,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Basket",
    path: "/buy-products",
    component: Basket,
  },
]