import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  listOrders,
  placeOrder,
  updatingStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place-order", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware, userOrders);
orderRouter.get("/listorder", listOrders);
orderRouter.post("/updatingStatus", updatingStatus);

export default orderRouter;
