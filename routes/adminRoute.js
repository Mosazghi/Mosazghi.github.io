const express = require("express");
const router = express.Router();
const {
  getFag,
  getAlleFag,
  renderAdmin,
  setFag,
  updateFag,
  deleteFag,
} = require("../controllers/fagController");

router.get("/", renderAdmin);
router.get("/alleFag", getAlleFag);
router.get("/:id", getFag);
router.post("/", setFag);
router.put("/", updateFag);
router.delete("/", deleteFag);

module.exports = router;
