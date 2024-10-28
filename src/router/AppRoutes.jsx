import { Route, Routes } from "react-router-dom";
// Layout

import { DashboardPage } from "../pages/DashboardPage";


const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        
      </Routes>
    );
}
export default AppRoutes;