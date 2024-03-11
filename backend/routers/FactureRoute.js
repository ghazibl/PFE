import  express  from "express";
import { createFacture,getFactures,getFactureByStatues } from "../controller/FactureController.js";

const router = express.Router();
router.post("/", createFacture);
router.get("/", getFactures);  
router.get("/status/:status", getFactureByStatues);
export default router;  