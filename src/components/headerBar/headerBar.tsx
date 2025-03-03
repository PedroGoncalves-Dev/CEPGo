const HeaderBar = () => {
  return (
    <header className="flex h-16 items-center justify-end bg-white">
      <div className="mr-6 w-[80px]">
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
