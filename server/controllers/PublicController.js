const isObject = require('is-object');

class PublicController {
  static show(req, res) {
    const webpackStats = res.locals.webpackStats;
    const { assetsByChunkName, publicPath } = webpackStats.toJson();
    const html = PublicController.renderHtml({
      assets: PublicController.massageAssets(assetsByChunkName, publicPath),
      preloadState: {

      },
      locale: 'en',
      csrf: '',
    });

    res.send(html);
  }

  static massageAssets(assetsByChunkName, publicPath) {
    const manifest = PublicController.normalizeAssets(assetsByChunkName.main)
    const assets = Object.values(manifest).reduce((mappings, value) => {
      const javascriptKey = /\.js$/.test(value) ? 'javascript' : '';
      const cssKey = /\.css$/.test(value) ? 'css' : '';
      const assetKey = javascriptKey + cssKey;
      return {
        ...mappings,
        [assetKey]: [...(mappings[assetKey] || []), `${publicPath}${value}`],
      };
    }, {});
    return assets;
  }


  static normalizeAssets(assets) {
    if (isObject(assets)) {
      return Object.values(assets);
    }

    return Array.isArray(assets) ? assets : [assets];
  }


  static renderHtml({
    csrf = '', assets, preloadState, locale,
  }) {
    return `
      <!DOCTYPE html>
      <html lang="${locale}">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="csrf-token" content="${csrf}" />
          <title>Image Upload</title>
          ${(assets && assets.css && assets.css.map((src) => `<link href="${src}" rel="stylesheet">`).join('')) || ''}
          <link href="https://fonts.googleapis.com/css?family=Sarabun" rel="stylesheet">
          <script>
            window.preloadState = ${JSON.stringify(preloadState).replace(/</g, '\\u003c')}
          </script>
        </head>
        <body>
          <div id="root" lang="${locale}"></div>
          ${(assets
        && assets.javascript
        && assets.javascript.map((src) => `<script src="${src}" type="text/javascript"></script>`).join(''))
      || ''}
        </body>
      </html>
    `;
  }
}

module.exports = PublicController;
