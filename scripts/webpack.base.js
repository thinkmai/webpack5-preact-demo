const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: [path.resolve(__dirname, "../src/index.js")],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "",
	},
	resolve: {
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat", // Must be below test-utils
			"react/jsx-runtime": "preact/jsx-runtime",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "preact demo",
			template: path.resolve(__dirname, "index.html"),
			inject: true,
		}),
	],
};
