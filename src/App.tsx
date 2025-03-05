import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/headerBar/headerBar";
import NavDesktop from "./components/navLateral/navDesktop";
import Home from "./pages/home";
import { Toaster } from "@/components/ui/sonner";
import Sobre from "./pages/sobre";

const MainLyout = () => {
  return (
    <>
      <div className="flex flex-row">
        <NavDesktop />
        <div className="w-full lg:w-3/4 2xl:w-4/5">
          <HeaderBar />
          <main className="px-8 py-6">
            <Outlet />

            <Toaster
              position="top-center"
              toastOptions={{
                classNames: {
                  icon: "text-green-500",
                },
                style: {
                  background: "white",
                  color: "black",
                  border: "1px solid #dfdede",
                },
              }}
            />
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
            <Route path="/sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
