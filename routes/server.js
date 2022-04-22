import { Router } from "express";

import { getWsiteData, setWsiteData } from "../controllers/server.js";

const URL = '/api/wsite/data';

const router = Router();

router.get(URL, getWsiteData);
router.post(`${URL}/set`, setWsiteData);

export default router;
