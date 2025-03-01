import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/headerBar/headerBar";
import NavDesktop from "./components/sideNav/navDesktop";
import Home from "./pages";

const MainLyout = () => {
  return (
    <>
      <div className="flex flex-row">
        <NavDesktop />
        <div className="w-5/6">
          <HeaderBar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLyout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
