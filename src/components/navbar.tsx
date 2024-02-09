import ChangeTheme from "./change-theme";
import Notification from "./notification";
import UserMenu from "./user-menu";

const Navbar = () => {
  return (
    <header className="fixed z-20 top-0 start-[--sidebar-width] w-[calc(100%_-_var(--sidebar-width))] bg-light-gray dark:bg-[#868585]/50 h-[--nav-height] flex justify-between items-center px-4">
      <div></div>
      <div className="flex justify-center items-center gap-2">
        <ChangeTheme />
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
