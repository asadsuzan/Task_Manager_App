import { Navigate, Route, Routes } from "react-router-dom";
import FullScreenLoader from "./components/Loader/FullScreenLoader";
import CompletedPage from "./pages/CompletedPage";
import DashboardPage from "./pages/DashboardPage";
import ImportantPage from "./pages/ImportantPage";
import InprogressPage from "./pages/InprogressPage";
import LoginPage from "./pages/LoginPage";
import MyDayPage from "./pages/MyDayPage";
import SignupPage from "./pages/SignupPage";
import TaskPage from "./pages/TaskPage";
import { getToken } from "./utility/localDb";


function App() {

  if (getToken()) {
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
        <FullScreenLoader />
      </>
    );

  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} replace />} />
          <Route path="/dashboard" element={<Navigate to={'/login'} replace />} />
          <Route path="/my_day" element={<Navigate to={'/login'} replace />} />
          <Route path="/important" element={<Navigate to={'/login'} replace />} />
          <Route path="/completed" element={<Navigate to={'/login'} replace />} />
          <Route path="/tasks" element={<Navigate to={'/login'} replace />} />
          <Route path="/inprogress" element={<Navigate to={'/login'} replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <FullScreenLoader />
      </>
    );

  }

}

export default App;
