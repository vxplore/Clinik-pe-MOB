import { Outlet, useLocation, matchPath } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { routeMeta } from "../../app/routeMeta";

export default function AppShell() {
  const location = useLocation();

  const meta = Object.entries(routeMeta).find(([path]) =>
    matchPath(path, location.pathname)
  )?.[1] ?? {
    header: "back",
    showBottomNav: true,
  };
  console.log("Route Meta:", meta);

  return (
    <div className="app-frame">
      {/* Header */}
      <Header variant={meta.header} title={meta.title} />

      {/* Scrollable content */}
      <main className="app-content bg-gray-50/50 px-4 py-3">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      {meta.showBottomNav && <BottomNav />}
    </div>
  );
}
