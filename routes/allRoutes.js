const express = require("express");
const router = express.Router()
const User = require("../models/customerSchema");
var moment = require("moment");
const userController = require("../controllers/userController");

// Entry Points======= Get Request (Get Data From DB)
router.get("/", userController.user_index_get);

router.get("/view/:id", userController.user_view_get);

router.get("/edit/:id", userController.user_edit_get);

// Entry Points ======= Post Request (Send Data To DB)
router.post("/search", userController.user_search_post);

// Entry Points ======= Delete Request (Delelte Data From DB)
router.delete("/edit/:id", userController.user_delete);

// Entry Points ======= Update Request (Update Data In  DB)
router.put("/edit/:id", userController.User_update);

module.exports = router;
