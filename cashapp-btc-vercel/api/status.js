import { orders } from "../lib/orders.js";

export default function handler(req, res) {
  const orderId = req.query.orderId;
  const order = orders[orderId];

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  const expired = Date.now() > order.expireAt;

  return res.status(200).json({
    orderId: order.orderId,
    status: expired ? "expired" : order.status
  });
}
