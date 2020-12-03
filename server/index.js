require('dotenv').config();

const mongoose = require('mongoose');

try {
  console.info('connecting to mongo db')
  mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

    console.info('connected to mongo db')

    const express = require("express");
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const path = require('path');
    const config = require("../webpack");
    const bodyParser = require('body-parser');
    const requestLog = require('./middlewares/requestLog');
    const rootRoutes = require('./routes');

    const PORT = process.env.PORT || 3000;
    const app = express();


    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
      noInfo: true,
      serverSideRender: true,
      publicPath: config.output.publicPath,
    });

    app.use(require('cookie-parser')());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(requestLog);

    app.use(middleware);

    app.use(webpackHotMiddleware(compiler));

    app.use('/public', express.static(path.resolve(__dirname, './public')));

    app.use(rootRoutes);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
} catch (e) {
  console.error('cannot connect to mongo db')
  throw e;
}
