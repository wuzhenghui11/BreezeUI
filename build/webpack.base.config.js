'use strict'
const path = require('path');

const resolve = function(dir) {
	return path.resolve(__dirname, '..', dir);

}
module.exports = {
	mode: 'none',
	entry: {
		index: resolve('src/main.js')
	},
	output: {
		path: resolve('dist'),
	},
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			'@': resolve('src');
		}
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				include: [resolve('src')]
			}
		]
	}
};
