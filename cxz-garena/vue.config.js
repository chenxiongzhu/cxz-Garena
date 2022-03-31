const vueConfig = {
  devServer: {
    proxy: {
      "/apis": {
        target: "http://localhost:80",
        changeOrigin: true,
        pathRewrite: { "^/apis": "" },
      },
    },
  },
};

module.exports = vueConfig;
