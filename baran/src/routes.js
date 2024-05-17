import Admin from "./pages/Admin"
import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, CATEGORIES_ROUTE } from "./utils/consts"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Categories from "./pages/Categories"
import Contacts from "./pages/Contacts"
import ProductPage from "./pages/ProductPage"
import About from "./pages/About"
import { ABOUT_ROUTE } from "./utils/consts"
import { Component } from "react"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: <ProductPage/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: CATEGORIES_ROUTE,
        Component: <Categories/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <Contacts/>
    },
]