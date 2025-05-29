import { http } from "@/utils/http";

export async function getOrders(status = "") {
  try {
    let query = "orders";
    if (status != "") query = `${query}/${status}`;

    const response = await http.get(query);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export async function getOrdersById(id: string | string[] | undefined) {
  try {
    const response = await http.get(`orders?id=${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};