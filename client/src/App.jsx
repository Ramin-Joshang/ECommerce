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
import NotFound from "./store/error/NotFound"
import Checkout from "./pages/cart/Checkout"
import Account from "./pages/account/Account"
import List from "./pages/shop/List"
import Home from "./pages/home/Home"
import CheckAuth from "./components/common/CheckAuth"


function App() {



  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*  common component */}
      <h1>Header component</h1>

      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={true} user={{ name: "Ramin", role: "user" }}>
            <AuthLayout />
          </CheckAuth>
        } >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={true} user={{ name: "Ramin", role: "admin" }}>
            <AdminLayout />
          </CheckAuth>
        } >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="/shop" element={<ShopLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
