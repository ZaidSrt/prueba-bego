
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getOrdersById } from "@/services/orders";

import Header from "@/components/header";
import Main from "../layouts/main";

import PickupCircle from "@/assets/img/Pickup-circle.png";
import StatusHome from "@/components/order/statusOrder";
import BreadcrumbHome from "@/components/order/Breadcrumb";
import StatusOrderDetalle from "@/components/orderDetalle/statusOrderDetalle";
import ToggleData from "@/components/orderDetalle/toggleData";
import Load from "@/components/load";
import Empty from "@/components/empty";




export default function OrderDetallePage() {

  const router = useRouter();
  const { orderID } = router.query;

  const [order, setOrder] = useState({} as Orders);
  const [destination, setDestination] = useState({} as OrderDestinationData);
  const [destinationActive, setDestinationActive] = useState({} as DestinationDetalle);
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    if (orderID == undefined) return;
    getOrder();
  }, [orderID]);

  async function getOrder() {
    let response = await getOrdersById(orderID);
    if (response.status != 200) {
      setIsLoad(false);
      return
    };

    let [startDestination, endDestinations] = response.result.destinations;
    startDestination.name = "Pickup Data";
    endDestinations.name = "Dropoff Data";

    let [startLocation, startCity] = startDestination.address.split(',');
    let [endLocation, endCity] = endDestinations.address.split(',');

    setOrder(response.result);
    setDestinationActive(startDestination);
    setDestination({
      start: { location: startLocation, city: startCity, item: startDestination },
      end: { location: endLocation, city: endCity, item: endDestinations }
    });
    setIsLoad(false);
  }

  return (
    <Main>
      <Header title="Cargo Details" />

      {isLoad ?
        <div className="w-full h-50 flex items-center justify-center">
          <Load />
        </div> :
        JSON.stringify(order) == "{}" ?
          <div className="w-full h-50 flex items-center justify-center">
            <Empty />
          </div> :
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-10">
            <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 px-8 py-6 flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-white text-xs">Referencia {order.reference_number}</span>
                <span className="text-white">Order #{order.order_number}</span>
              </div>

              <div className="flex flex-col gap-8 relative">
                <StatusHome contentClassName="items-start" image={PickupCircle} width={40} height={40} imageClassName="mt-2" action="PICKUP" city={destination.start?.city} location={destination.start?.location} item={destination.start?.item} onClick={setDestinationActive} />
                <BreadcrumbHome className="left-4 top-3/10" width={4} />
                <StatusHome contentClassName="items-end" imageClassName="w-[40px] h-[40px]" action="DROPOFF" city={destination.end?.city} location={destination.end?.location} item={destination.end?.item} onClick={setDestinationActive} />
              </div>
            </div>

            <div className="border border-gray-300/25 rounded-3xl bg-gray-900/50 mt-10 flex flex-col gap-4 relative pt-10">
              <div className="flex items-center justify-center absolute -top-10 left-0 right-0">
                <div className="w-[80px] h-[80px] border-8 border-gray-800/75 rounded-full p-2 flex items-center justify-center bg-black">
                  <svg className="rounded-full" stroke="currentColor" fill="#FFF" strokeWidth="0" viewBox="0 0 512 512" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center mt-2">
                <span className="text-white uppercase">{order.end_date && new Date(order.end_date).toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}</span>
              </div>

              <div className="pt-5 pb-8 px-8">
                {order.status_list?.pickup.map((item: Pickup, index: number) => <StatusOrderDetalle key={index} item={item} index={index} />)}
              </div>

              {order.status >= 3 && <div className="bg-bego border-none outline-none p-4 font-semibold w-full rounded-b-3xl flex justify-center cursor-pointer" onClick={() => console.log("Track Order")}>Track Order</div>}
            </div>

            <ToggleData data={destinationActive} />
          </div>
      }
    </Main>
  );
}