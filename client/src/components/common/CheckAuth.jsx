import { getUserData } from "@/helper";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ children }) => {

    const user = getUserData();

    const location = useLocation();


    if (location.pathname === "/") {
        if (!user) {
            return <Navigate to="/auth/login" />;
        } else {
            if (user?.role === "admin") {
                return <Navigate to="/admin/dashboard" />;
            } else {
                return <Navigate to="/shop/home" />;
            }
        }
    }

    if (
        !user &&
        !(
            location.pathname.includes("/login") ||
            location.pathname.includes("/register")
        )
    ) {
        return <Navigate to="/auth/login" />;
    }

    if (
        user &&
        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {
        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/shop/home" />;
        }
    }

    if (
        user &&
        user?.role !== "admin" &&
        location.pathname.includes("admin")
    ) {
        return <Navigate to="/unauth-page" />;
    }

    if (
        user &&
        user?.role === "admin" &&
        location.pathname.includes("shop")
    ) {
        return <Navigate to="/admin/dashboard" />;
    }

    return <>{children}</>;
}



export default CheckAuth;