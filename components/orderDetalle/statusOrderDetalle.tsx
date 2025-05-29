

import PointEnd from "@/assets/img/Point-end.png";
import Image from "next/image";

export default function StatusOrderDetalle({ item, index }: StatusOrderDetalleProps) {
  return (
    <>
      {index != 0 && <div className={`${item.active ? 'bg-bego' : 'bg-gray-500'} w-1 h-6 ml-3`}></div>}
      <div className="flex items-center gap-6">
        {item.active ?
          <div className="bg-bego p-1.5 w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
          </div> :
          <Image src={PointEnd} alt="Point end" width={28} height={28} />
        }
        <span className={`${item.active ? 'text-white' : 'text-gray-300/50'}`}>{item.status}</span>
      </div>
    </>
  );
}