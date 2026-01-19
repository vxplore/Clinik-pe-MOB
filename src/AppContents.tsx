import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import AppShell from "./layouts/AppShell/AppShell";
import DashboardPage from "./pages/dashboard/DashboardPage";
import SplashPage from "./pages/auth/SplashPage";
import AssignmentPage from "./pages/assignments/AssignmentPage";
import AssignmentPageDetails from "./pages/assignments/AssignmentPageDetails";
import AddTest from "./pages/Test/AddTest";
function AppContents() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/assignments" element={<AssignmentPage />} />
        <Route path="/assignments/:id" element={<AssignmentPageDetails />} />
        <Route path="/assignments/:id/add-test" element={<AddTest />} />
      </Route>

      {/* No AppShell */}
    </Routes>
  );
}

export default AppContents;
