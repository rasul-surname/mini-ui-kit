const path = require('path')

module.exports = {
	mode: 'production', // указываем в каком режиме делать компиляцию
	entry: './src/index.ts', // указываем стартовую точку нашего приложения
	output: {
		filename: 'index.js', // название файла которое будет генерироваться на выходе
		path: path.resolve(__dirname, 'dist'), // путь к папке в которой будет сборка нашего приложения
		libraryTarget: 'umd', // позволяет пользователям нашей либы использовать как require, так и import
		clean: true, // папка будет очищаться при каждой сборке
	},
	resolve: {
		extensions: ['.ts', '.tsx'], // указываем какие расширения можно не указывать при импорте
	},
	externals: {
		// указываем какие модули исключить из сборки
		react: 'react',
	},
	module: {
		rules: [
			{
				test: /\.css/, // файлы к которым будут применяться модули
				use: ['style-loader', 'css-loader'], // модули, которые используем
				exclude: /node_modules/, // указываем папки которые необходимо исключить
			},
			{
				test: /\.(ts|tsx)?$/, // файлы к которым будут применяться модули
				use: ['ts-loader'], // модули, которые используем
				exclude: /node_modules/, // указываем папки которые необходимо исключить
			},
		],
	},
}
