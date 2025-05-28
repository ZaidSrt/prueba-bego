


import Header from "@/components/header";
import Main from "../layouts/main";
import Image from "next/image";

import PickupCircle from "@/assets/img/Pickup-circle.png";
import Breadcrumb from "@/assets/img/Breadcrumb.png";
import PointEnd from "@/assets/img/Point-end.png";
import Chevron from "@/assets/img/Chevron.png";


export default function OrderDetallePage() {
  return (
    <Main>
      <Header title="Cargo Details" />

      <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 mt-10 px-8 py-6 flex flex-col gap-4">
        <div className="flex flex-col">
          <span className="text-white text-xs">Referencia A1180</span>
          <span className="text-white">Order #7804GNZ</span>
        </div>

        <div className="flex flex-col gap-8 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="mt-2">
              <Image src={PickupCircle} alt="Pickup" width={40} height={40} />
            </div>

            <div className="flex items-end w-full">
              <div className="flex flex-col">
                <span className="text-gray-100/50 text-[10px]">PICKUP</span>
                <span className="text-white">New York</span>
                <span className="text-gray-300/50 text-sm">25 Mortada street, Gainalkes..</span>
                <div className="flex items-center gap-2 ml-2 mt-2">
                  <span className="bg-blue-600 p-1 rounded-full"></span>
                  <span className="text-gray-300/50 text-xs">Accepted</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-4.5 top-3/10">
            <Image src={Breadcrumb} alt="Breadcrumb" width={4} />
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <div className="border border-gray-300/25 w-[30px] h-[30px] rounded-full bg-black"></div>
            </div>
            <div className="flex items-end w-full">
              <div className="flex flex-col">
                <span className="text-gray-100/50 text-[10px]">PICKUP</span>
                <span className="text-white">New York</span>
                <span className="text-gray-300/50 text-sm">25 Mortada street, Gainalkes..</span>
                <div className="flex items-center gap-2 ml-2 mt-2">
                  <span className="bg-blue-600 p-1 rounded-full"></span>
                  <span className="text-gray-300/50 text-xs">Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 mt-20 flex flex-col gap-4 relative pt-10">
        <div className="flex items-center justify-center absolute -top-10 left-0 right-0">
          <div className="w-[80px] h-[80px] border-8 border-gray-800/75 rounded-full p-2 flex items-center justify-center bg-black">
            <svg className="rounded-full" stroke="currentColor" fill="#FFF" stroke-width="0" viewBox="0 0 512 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-center mt-2">
          <span className="text-white">10:30 PM</span>
        </div>

        <div className="pt-5 pb-8 px-8">
          <div className="flex items-center gap-6">
            <div className="bg-bego p-1.5 w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
            </div>
            <span className="text-white">Created Order</span>
          </div>
          <div className="bg-bego w-1 h-6 ml-3"></div>

          <div className="flex items-center gap-6">
            <div className="bg-bego p-1.5 w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
              </svg>
            </div>
            <span className="text-gray-300/50">Created Order</span>
          </div>
          <div className="bg-gray-500 w-1 h-6 ml-3"></div>

          <div className="flex items-center gap-6">
            <Image src={PointEnd} alt="Point end" width={28} height={28} />
            <span className="text-gray-300/50">Created Order</span>
          </div>
        </div>

        <div className="bg-bego border-none outline-none p-4 font-semibold w-full rounded-b-3xl flex justify-center">Track Order</div>
      </div>

      <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 mt-10 px-8 py-6 flex items-center justify-between">
        <span className="text-white text-sm">Pickup Data</span>
        <div>
          <Image src={Chevron} alt="Chevron" className="rotate-270" width={10} height={18} />
        </div>
      </div>

      <div className="text-white px-2 mt-8 flex flex-col gap-6 text-sm">
        <span>Isidro Fabela 10, Valle Verde y Terminal, 50140 Toluca de Lerdo, México</span>
        <div>
          <span>14 de Octubre 2023</span>
          <span>10:30</span>
        </div>

        <span>+525567890346</span>
        <span>johndoe@gmail.com</span>
      </div>
    </Main>
  );
}