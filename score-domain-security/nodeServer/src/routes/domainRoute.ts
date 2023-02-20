import { Router } from "express";
import DomainController from "../controllers/domainController";
import { isDomain } from "../utils";
import { Domain } from "../models/domain/controller";

const router = Router();

const domainController = new DomainController(new Domain());

router.post("/", (req, res) => {
    const domain = req.body.domain;
    try {
        if (isDomain(domain)) {
            domainController.createDomain(domain);

            res.status(201);
        } else {
            //Log Sentry
            res.status(401);
        }
    } catch (error) {
        //Log Sentry
        res.status(401);
    }
});

export default router;