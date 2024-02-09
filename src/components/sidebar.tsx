import Image from "next/image";
import LogoutIcon from "./ui/logout-icon";
import { Separator } from "./ui/separator";
import LanguageIcon from "./ui/language-icon";
import ChangeLanguage from "./change-language";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 start-0 h-screen bg-gradient-sidebar w-[--sidebar-width] text-white">
      <div className="flex flex-col justify-between items-center h-full py-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/logo.png"}
            priority
            width={87}
            height={75}
            alt="york british academy logo"
          />
          <div className="text-center text-white pt-6">
            <p className="text-xs">welcome to</p>
            <h2 className="font-bold pb-1.5">Trainer Dashboard</h2>
            <Separator className="w-11/12 mx-auto bg-turquoise" />
          </div>
          <ul className="py-6"></ul>
        </div>
        <div className="w-full flex justify-around items-center">
          <ChangeLanguage />
          <button className="capitalize inline-flex justify-center items-center gap-1 text-xs">
            <LogoutIcon />
            sign out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
