const router = require("express").Router();

router.use("/user", require("./userRoutes"));
router.use("/posts", require("./blogRoutes"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

router.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = router;
