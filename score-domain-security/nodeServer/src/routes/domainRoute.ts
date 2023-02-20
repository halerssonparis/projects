import { Router } from "express";
import DomainController from "../controllers/domainController";
import { Domain } from "../models/domain/controller";

const router = Router();

const domainController = new DomainController(new Domain());

router.post("/", (req, res) => {
    const domain = req.body.domain;

    try {
        domainController.createDomain(domain);

        res.status(201);
    } catch (error) {
        //Log Sentry
        res.status(401);
    }
});

export default router;