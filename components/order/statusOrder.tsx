

import Image from "next/image";

export default function StatusOrder({ city = "", location = "", date = "", time = "", image, width = 0, height = 0, action = "", item = {} as DestinationDetalle, onClick = () => { }, imageClassName = "", contentClassName = "items-center", }: CardStatusHomeProps) {

  let limit = 30;

  return (
    <div className={`flex justify-between gap-4 ${contentClassName} ${JSON.stringify(item) != "{}" && "cursor-pointer"}`} onClick={() => onClick(item)}>
      <div className={`flex items-center justify-center ${imageClassName}`}>
        {image ?
          <Image src={image} alt="Pickup" width={width} height={height} /> :
          <div className="border border-gray-300/25 w-[30px] h-[30px] rounded-full bg-black"></div>
        }
      </div>

      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col">
          <span className="text-gray-100/50 text-[10px]">{action}</span>
          <span className="text-white">{city}</span>
          <span className="text-gray-300/50 text-sm">{location.length > limit ? `${location.slice(0, limit)}...` : location}</span>

          {JSON.stringify(item) != "{}" &&
            <div className="flex">
              <div className="flex items-center gap-2 mt-2 bg-gray-800/50 rounded-lg px-2">
                <span className={`p-1 rounded-full ${item?.status == 0 ? 'bg-gray-600' : ''}`}></span>
                <span className="text-gray-300/50 text-xs">{item?.status_string}</span>
              </div>
            </div>
          }
        </div>

        {(date != "" || time != "") &&
          <div className="flex flex-col items-end justify-end h-full">
            <span className="text-gray-300/50 text-xs">{date}</span>
            <span className="text-white text-sm">{time}</span>
          </div>
        }
      </div>
    </div>
  );
}