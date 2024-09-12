import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/admin/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import Products from "./pages/admin/Products"
import Orders from "./pages/admin/Orders"
import Features from "./pages/admin/Features"
import ShopLayout from "./components/shop/ShopLayout"
import NotFound from "./pages/error/NotFound"
import Checkout from "./pages/cart/Checkout"
import Account from "./pages/account/Account"
import List from "./pages/shop/List"
import Home from "./pages/home/Home"
import CheckAuth from "./components/common/CheckAuth"
import AccessDenied from "./pages/error/AccessDenied"


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth >
            <AuthLayout />
          </CheckAuth>
        } >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth >
            <AdminLayout />
          </CheckAuth>
        } >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="/shop" element={<ShopLayout />} />
        <Route path="/" element={
          <CheckAuth>
            <Home />
          </CheckAuth>
        } />
        <Route path="/list" element={<List />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/access-denied" element={<AccessDenied />} />
      </Routes>
    </div>
  )
}

export default App
