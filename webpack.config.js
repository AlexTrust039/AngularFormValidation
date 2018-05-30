module.exports = {

  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },

  module:{
    rules: [
      {
        test : /\.css$/, 
        use: [
            'style-loader',
            'css-loader'
             ]
      }
            ]
  },
}