// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/main/pages/home";
import MainLayout from "./layouts/main_layout";
import { useState } from "react";

export default function AppRoutes() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="fixed left-3 top-3 p-2 rounded-full bg-amber-300 dark:bg-amber-800 w-8 h-8"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      ></div>
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}
