

import Image from "next/image";

import Chevron from "@/assets/img/Chevron.png";
import Notification from "@/assets/img/Notification.png";
import Link from "next/link";

interface HeaderProps {
  title: string
}

export default function Header({ title = "" }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Link className="w-[25px]" href={"/"}>
        <Image className="cursor-pointer" src={Chevron} alt="Chevron" width={10} height={18} />
      </Link>
      <h4 className="text-white text-xl">{title}</h4>
      <div className="w-[25px]">
        <Image className="cursor-pointer" src={Notification} alt="Notification" width={24} height={26} />
      </div>
    </header>
  );
}