const router = require("express").Router();
const authRoutes = require("./auth.routes");

/* GET home page */
router.get("/", (req, res, next) => {
    console.log(resutls)

    res.json("All good in here");
});

// router.use("/auth", authRoutes);

module.exports = router;

