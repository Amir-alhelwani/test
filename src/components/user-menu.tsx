import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserMenu = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="text-[#3D3D3D] text-xs dark:text-white">Hussam Ahmad</h2>
    </div>
  );
};

export default UserMenu;
