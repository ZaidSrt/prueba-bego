import { http } from "@/utils/http";

export async function getNextOrders() {
  try {
    const response = await http.get("orders/upcoming");
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getOrders() {
  try {
    const response = await http.get("orders");
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};