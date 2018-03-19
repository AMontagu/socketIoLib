module.exports = {
	name: 'default',
	mode: 'development',
	entry: './index.js',
	target: 'node',
	output: {
		library: 'myLibrary',
		libraryTarget: 'umd',
		filename: 'myLibrary.js'
	},
	devtool: 'cheap-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ['es2015']
					}
				}
			}
		]
	}
};
