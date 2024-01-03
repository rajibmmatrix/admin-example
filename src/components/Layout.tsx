import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import useStore from "../hooks/useStore";

function Layout() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      {/* ========== MAIN CONTENT ========== */}
      <Header />
      <Sidebar />
      <Outlet />
      {/* ========== END MAIN CONTENT ========== */}
    </div>
  );
}

export default Layout;
