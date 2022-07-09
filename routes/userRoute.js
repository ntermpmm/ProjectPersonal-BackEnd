const express = require("express");
const userController = require("../controllers/userController");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/me", userController.getUser);
router.get("/alluser", userController.getAllUser);
router.put("/:id", upload.single("profilePic"), userController.updateUser);
router.put("/password/:id", userController.updateUserPassword);
router.delete("/:id", userController.deleteUser);

module.exports = router;
