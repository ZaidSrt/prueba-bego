
import { useEffect, useState } from "react";
import { getOrders } from "@/services/orders";

import Main from "./layouts/main";

import Header from "@/components/header";
import CardHome from "@/components/order/cardOrder";
import NavHome from "@/components/order/navHome";
import SearchHome from "@/components/order/searchHome";
import Load from "@/components/load";
import Empty from "@/components/empty";


export default function Home() {

  const navMenu = ["Upcoming", "Completed", "Past"];

  const [navActive, setNavActive] = useState<string>("Upcoming");
  const [orders, setOrders] = useState<OrdersData>({});
  const [ordersFilter, setOrdersFilter] = useState<Orders[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    getAllOrders();
  }, []);

  useEffect(() => {
    filterOrderData();
  }, [orders, searchValue, navActive]);

  function filterOrderData() {
    if (JSON.stringify(orders) == "{}") return;

    let orderData: Orders[] = orders[navActive];
    if (searchValue != "") orderData = orderData.filter(order => order.order_number.toLowerCase().includes(searchValue!.toLowerCase()));

    setOrdersFilter(orderData);
  }

  async function getAllOrders() {

    let [orders, ordersPast] = await Promise.all([getOrders("upcoming"), getOrders('past')]);
    if (orders.status != 200 || ordersPast.status != 200) {
      setIsLoad(false);
      return
    };

    setOrders({
      "Upcoming": orders.result.filter((item: Orders) => item.status == 1),
      "Completed": orders.result.filter((item: Orders) => item.status == 3),
      "Past": ordersPast.result
    });

    setIsLoad(false);
  }


  return (
    <Main>
      <Header title="Cargo Orders" />

      <NavHome navActive={navActive} navMenu={navMenu} setNavActive={setNavActive} />
      <SearchHome searchValue={searchValue} setSearchValue={setSearchValue} />

      {isLoad ?
        <div className="w-full h-50 flex items-center justify-center">
          <Load />
        </div> :
        ordersFilter.length === 0 ?
          <div className="w-full h-50 flex items-center justify-center">
            <Empty />
          </div> :
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ordersFilter.map((item: Orders, index: number) => <CardHome key={`card-${index}`} item={item} />)}
          </div>
      }
    </Main >
  );
}
