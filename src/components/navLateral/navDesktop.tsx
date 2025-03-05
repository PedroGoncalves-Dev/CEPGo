import { Cpu, House } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";
import IconsRedesSociais from "../iconsRedesSociais/iconsRedesSociais";

const NavDesktop = () => {
  return (
    <aside className="hidden min-h-screen flex-col bg-azulPrimary lg:flex lg:w-1/4 2xl:w-1/5">
      <div className="mt-7 flex justify-center">
        <div className="w-[230px]">
          <img src="/logo.svg" alt="CEPGo logo" className="object-contain" />
        </div>
      </div>

      <Separator className="mx-auto mt-2 w-2/3 opacity-15" />

      <nav className="mt-16">
        <ul className="flex flex-col text-sm text-white opacity-60 xl:text-base">
          <NavLink
            to={"/"}
            end
            className={({ isActive }) =>
              `py-3 pl-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-200 hover:bg-opacity-20 ${isActive && "scale-105 bg-slate-200 bg-opacity-20"}`
            }
          >
            <li className="flex items-center gap-3">
              {" "}
              <House /> Home
            </li>
          </NavLink>

          <NavLink
            to={"/sobre"}
            className={({ isActive }) =>
              `py-3 pl-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-200 hover:bg-opacity-20 ${isActive && "scale-105 bg-slate-200 bg-opacity-20"}`
            }
          >
            <li className="flex items-center gap-3">
              {" "}
              <Cpu /> Sobre o CEPGo
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="mb-8 mt-auto flex items-center justify-center gap-5">
        <IconsRedesSociais
          sizeLinkedin={50}
          sizeGitHub={50}
          classNameGithub="cursor-pointer text-white opacity-25 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
          classNameLinkedin="cursor-pointer text-white opacity-25 transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
        />
      </div>
    </aside>
  );
};

export default NavDesktop;
