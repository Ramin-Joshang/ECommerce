import { getUserData } from "@/helper";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ children }) => {

    const user = getUserData();

    const location = useLocation();


    if (!user && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        return <Navigate to="/auth/login" />
    }
    if (user && user?.role === "user" && location.pathname.includes("/admin")) {
        console.log("hi")
        return <Navigate to="/access-denied" />
    }
    if (user && !(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        if (user?.role === "admin") {
            return <Navigate to="/admin/dashboard" />
        } else {
            console.log("klsjfld")
            return <Navigate to="/" />
        }
    }
    if (user && user?.role === "admin" && location.pathname.includes("/")) {
        return <Navigate to="/admin/dashboard" />
    }

    return <>{children}</>
}


export default CheckAuth;