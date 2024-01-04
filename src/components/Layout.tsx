import { Outlet, Navigate } from "react-router-dom";
import { Header, Sidebar } from "@components";
import { useStore } from "@hooks";

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
