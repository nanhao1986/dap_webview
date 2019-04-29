
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'dap_webview',
      dll: false,

      routes: [{
        path: '/',
        component: '../Boards',
        routes: [
          {
            path: '/',
            component: './index.js'
          },
          {
            path: '/Dashboard',
            component: './Dashboard.js'
          },
          {
            path: '/DapSystem/:?id',
            component: './DapSystem/$id$.js',
          },

        ]
      }],

    }],
  ],
  proxy: {
    "/api": {
      "target": "http://localhost:8080/api/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
