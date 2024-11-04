import express from  'express'
import authMiddleware  from '../middleware/auth.js'
import { placeOrder, userOrders, verifyOrder,listOrders, updateStatus } from '../controllers/orderController.js'

//router created
const orderRouter = express.Router();

//create endpoints
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userOrders",authMiddleware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus)

export default  orderRouter;
