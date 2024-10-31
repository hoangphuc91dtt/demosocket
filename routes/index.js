const authRouter = require("./authRoutes");
const postRouter = require("./postRoutes");

const appRouter = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/post", postRouter);
};
module.exports = appRouter;
