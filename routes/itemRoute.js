const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();

router.post("/", itemController.createItem);
router.get("/all", itemController.getAllItems);
router.get("/:id", itemController.getItemById);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;