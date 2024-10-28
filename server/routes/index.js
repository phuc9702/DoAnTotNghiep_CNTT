const { notFound, errorHanddler } = require("../middlewares/error-handdler")
const auth = require("./auth.route")
const initRoutes = (app) => {
    app.use("/api/v1/auth",auth )



    app.use(notFound)
    app.use(errorHanddler)
}
module.exports= initRoutes