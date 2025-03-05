import NavMobile from "../navLateral/navMobile";

const HeaderBar = () => {
  return (
    <header className="flex h-16 items-center justify-between bg-white px-6 lg:justify-end">
      <NavMobile />
      <div className="w-[80px]">
        <img
          src="/logo-pedro.svg"
          alt="Logo pedro"
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default HeaderBar;
