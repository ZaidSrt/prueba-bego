

import { useState } from "react";
import Chevron from "@/assets/icons/Chevron";


export default function ToggleData({ data = {} as DestinationDetalle }) {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 px-8 py-6 flex items-center justify-between">
        <span className="text-white text-sm">{data.name}</span>
        <div className={`w-5 cursor-pointer ${isOpen && 'rotate-180'}`} onClick={() => setIsOpen(!isOpen)}>
          <Chevron fill={isOpen ? "#FFEE00" : "#FFFFFF"} />
        </div>
      </div>
      {isOpen &&
        <div className="text-white px-2 mt-8 flex flex-col gap-6 text-sm">
          <span>{data.address}</span>
          <div>
            <span>
              {data.startDate && new Date(data.startDate).toLocaleDateString("es-MX", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>

          <span>{data.contact_info?.telephone}</span>
          <span>{data.contact_info?.email}</span>
        </div>
      }
    </div>
  );
}