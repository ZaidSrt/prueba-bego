

import Image from "next/image";

import Chevron from "@/assets/icons/Chevron";
import Notification from "@/assets/img/Notification.png";
import Link from "next/link";

export default function Header({ title = "" }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Link className="w-[25px]" href={"/"}>
        <div className="w-5">
          <Chevron fill="#fff" className="rotate-90" />
        </div>
      </Link>
      <h4 className="text-white text-xl">{title}</h4>
      <div className="w-[25px]">
        <Image className="cursor-pointer" src={Notification} alt="Notification" width={24} height={26} />
      </div>
    </header>
  );
}