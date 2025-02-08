import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
  const Login = lazy(() => import("./pages/login/Login"));

  return (
    <Router>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
