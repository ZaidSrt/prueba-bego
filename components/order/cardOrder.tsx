
import Image from "next/image";

import FTL from "@/assets/img/FTL.png";
import FCL from "@/assets/img/FCL.png";
import Pickup from "@/assets/img/Pickup.png";
import Location from "@/assets/img/Location.png";
import Eye from "@/assets/img/Eye.png";

import getFullDate from "@/utils/functions";
import Link from "next/link";
import BtnHome from "./btnOrder";
import StatusHome from "./statusOrder";
import BreadcrumbHome from "./Breadcrumb";


export default function CardHome({ item = {} as Orders }) {

  let styleBtnRight = { borderBottomLeftRadius: '50px', borderBottomRightRadius: '40px', borderTopLeftRadius: '50px' };
  let [startDestination, endDestinations] = item.destinations;

  let [startLocation, startCity] = startDestination.address.split(',');
  let [startDate, startTime] = getFullDate(startDestination.start_date);

  let [endLocation, endCity] = endDestinations.address.split(',');
  let [endDate, endTime] = getFullDate(endDestinations.end_date);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-gray-400">Order</span>
        <span className="text-white">#{item?.order_number}</span>
      </div>

      <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50">
        <div className="flex items-center justify-between px-4 pt-3 pb-4 border-b border-b-gray-300/25 ">
          <div className="flex items-center gap-5">
            {item.type == "FTL" ?
              <Image src={FTL} alt="FCL" width={40} height={12} /> :
              <Image src={FCL} alt="FCL" width={28} height={18} />
            }
            <span className="text-white">{item.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`${item.status == 1 ? 'bg-gray-600' : item.status == 3 ? 'bg-blue-600' : 'bg-yellow-300'} p-1.5 rounded-full`}></span>
            <span className="text-white text-xs">{item.status_string}</span>
          </div>
        </div>

        <div className="px-4 py-10 flex flex-col gap-8 relative">
          <StatusHome city={startCity} date={startDate} height={18} image={Pickup} location={startLocation} time={startTime} width={28} action="PICKUP" imageClassName="w-[28px]" />
          <BreadcrumbHome className="left-7.5 top-5/12" width={2} />
          <StatusHome city={endCity} date={endDate} height={18} image={Location} location={endLocation} time={endTime} width={13} action="DROPOFF" imageClassName="w-[28px]" />
        </div>

        <div className="pt-5 flex justify-between relative">
          <BtnHome start_date={startDestination.start_date} status={item.status} />
          <Link href={`./orders/${item._id}`} style={styleBtnRight} className="bg-bego border-none outline-none px-8 py-4 text-xs font-semibold flex gap-3 cursor-pointer">
            Resume
            <Image src={Eye} alt="Eye" width={21} height={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}