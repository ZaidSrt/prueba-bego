
import { useState } from "react";

import Image from "next/image";
import Main from "./layouts/main";
import Chevron from "@/assets/img/Chevron.png";
import Notification from "@/assets/img/Notification.png";
import Search from "@/assets/img/Search.png";
import FCL from "@/assets/img/FCL.png";
import Pickup from "@/assets/img/Pickup.png";
import Location from "@/assets/img/Location.png";
import Breadcrumb from "@/assets/img/Breadcrumb.png";
import Eye from "@/assets/img/Eye.png";


export default function Home() {

  const navMenu = ["Upcoming", "Completed", "Past"];

  const [navActive, setNavActive] = useState<string>("Upcoming");

  return (
    <Main>
      <div className="container m-auto py-8 px-5">
        <header className="flex items-center justify-between">
          <div className="w-[25px]">
            <Image className="cursor-pointer" src={Chevron} alt="Chevron" width={10} height={18} />
          </div>
          <h4 className="text-white text-xl">Cargo Orders</h4>
          <div className="w-[25px]">
            <Image className="cursor-pointer" src={Notification} alt="Notification" width={24} height={26} />
          </div>
        </header>

        <nav className="flex items-start justify-between mt-10">
          {navMenu.map((item: string, index: number) => (
            <div className="w-[100px]" key={`nav-${index}`}>
              <span className={`${navActive == item ? 'text-bego' : 'text-white'} text-lg cursor-pointer`} onClick={() => setNavActive(item)}>{item}</span>
              {navActive == item && <span className="block mt-1 border border-bego w-1/3"></span>}
            </div>
          ))}
        </nav>

        <div className="mt-10 flex items-center border border-b-gray-500/50 justify-between gap-4">
          <Image src={Search} alt="Search" />
          <input type="text" className="w-full outline-none text-white text-lg py-2" />
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Order</span>
              <span className="text-white">#7804GNZ</span>
            </div>

            <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50">

              <div className="flex items-center justify-between px-4 pt-3 pb-5 border-b border-b-gray-300/25 ">
                <div className="flex items-center gap-5">
                  <Image src={FCL} alt="FCL" width={28} height={18} />
                  <span className="text-white">FCL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 p-1.5 rounded-full"></span>
                  <span className="text-white text-xs">In transit</span>
                </div>
              </div>

              <div className="px-4 py-10 flex flex-col gap-8 relative">
                <div className="flex items-center justify-between gap-4">
                  <Image src={Pickup} alt="Pickup" width={28} height={18} />

                  <div className="flex items-end justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-gray-100/50 text-[10px]">PICKUP</span>
                      <span className="text-white">New York</span>
                      <span className="text-gray-300/50 text-sm">25 Mortada street, Gainalkes..</span>
                    </div>

                    <div className="flex flex-col items-end justify-end h-full">
                      <span className="text-gray-300/50 text-xs">01/04/23</span>
                      <span className="text-white text-sm">10:45</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-7.5 top-5/12">
                  <Image src={Breadcrumb} alt="Breadcrumb" width={2} />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="w-[28px] flex items-center justify-center">
                    <Image src={Location} alt="Location" width={13} height={18} />
                  </div>

                  <div className="flex items-end justify-between w-full">
                    <div className="flex flex-col">
                      <span className="text-gray-100/50 text-[10px]">PICKUP</span>
                      <span className="text-white">New York</span>
                      <span className="text-gray-300/50 text-sm">25 Mortada street, Gainalkes..</span>
                    </div>

                    <div className="flex flex-col items-end justify-end h-full">
                      <span className="text-gray-300/50 text-xs">01/04/23</span>
                      <span className="text-white text-sm">10:45</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 flex justify-between relative">
                <button style={{ borderBottomLeftRadius: '40px', borderBottomRightRadius: '50px', borderTopRightRadius: '50px' }} className="bg-bego border-none outline-none px-8 py-4 text-xs font-semibold">Its time for pickup</button>
                <button style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '40px', borderTopLeftRadius: '50px' }} className="bg-bego border-none outline-none px-8 py-4 text-xs font-semibold flex gap-3">
                  Resume
                  <Image src={Eye} alt="Eye" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div >
    </Main >
  );
}
