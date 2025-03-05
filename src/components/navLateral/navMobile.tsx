import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logs } from "lucide-react";
import { NavLink } from "react-router-dom";
import IconsRedesSociais from "../iconsRedesSociais/iconsRedesSociais";
import { useState } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLink = () => {
    setIsOpen(false);
  };
  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Logs />
        </SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col">
          <SheetHeader>
            <SheetTitle>
              <div className="mx-auto w-[180px]">
                <img
                  src="/logo.svg"
                  alt="CEPGo logo"
                  className="object-contain"
                />
              </div>
            </SheetTitle>
            <SheetDescription className="text-center">
              Menu de navegação
            </SheetDescription>
          </SheetHeader>

          <ul className="mt-10 divide-y">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `block h-full w-full font-semibold leading-[3rem] opacity-70 ${isActive && "scale-105 font-bold text-blue-950"}`
                }
                onClick={handleClickLink}
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={"/sobre"}
                className={({ isActive }) =>
                  `block h-full w-full font-semibold leading-[3rem] opacity-70 ${isActive && "scale-105 font-bold text-blue-950"}`
                }
                onClick={handleClickLink}
              >
                Sobre o CEPGo
              </NavLink>
            </li>
          </ul>

          <div className="mb-8 mt-auto flex items-center justify-center gap-5">
            <IconsRedesSociais
              sizeLinkedin={55}
              sizeGitHub={55}
              classNameLinkedin="cursor-pointer text-[#204560]  transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
              classNameGithub="cursor-pointer text-[#204560]  transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
