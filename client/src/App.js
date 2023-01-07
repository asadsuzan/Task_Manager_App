import { Route, Routes } from "react-router-dom";
import CompletedPage from "./pages/CompletedPage";
import DashboardPage from "./pages/DashboardPage";
import ImportantPage from "./pages/ImportantPage";
import InprogressPage from "./pages/InprogressPage";
import LoginPage from "./pages/LoginPage";
import MyDayPage from "./pages/MyDayPage";
import SignupPage from "./pages/SignupPage";
import TaskPage from "./pages/TaskPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my_day" element={<MyDayPage />} />
        <Route path="/important" element={<ImportantPage />} />
        <Route path="/completed" element={<CompletedPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/inprogress" element={<InprogressPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
