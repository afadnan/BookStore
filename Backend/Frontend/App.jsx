import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/courses/Courses";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";
function App() {
  const [authUser, setAuthser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
