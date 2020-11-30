const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack");

const PublicController = require('./router/PublicController');

const PORT = process.env.PORT || 3006;
const app = express();

const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  serverSideRender: true,
  publicPath: config.output.publicPath,
});

app.use(middleware);

app.use(webpackHotMiddleware(compiler));

app.use(express.static("public"));

app.get("/", PublicController.show);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
