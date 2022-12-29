import express from "express";
import CollectionController from "../controller/CollectionController";

const router = express.Router();

router.get("/collections", CollectionController.getCollections);

("1");

export = router;
