import apiClient from "@/app/providers/apiClient";
import { Order } from "../../models/order.model";

const CRYPTO_EXCHANGER_ENDPOINT = "/order";

const orderEndpoints = {
  async createOrder(order: Order): Promise<Order> {
    return apiClient.post<Order>(`${CRYPTO_EXCHANGER_ENDPOINT}/create`, {
      order,
    });
  },
};

export default orderEndpoints;
