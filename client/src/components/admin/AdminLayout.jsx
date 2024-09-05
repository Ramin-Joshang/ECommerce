import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            {/* admin sidebar */}
            <Header />
            <div className="flex flex-1 flex-col">
                {/* admin header */}
                <Sidebar />
                <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;