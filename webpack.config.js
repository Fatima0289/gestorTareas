const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Punto de entrada de tu aplicación (archivo principal desde el cual se construye el archivo)
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex (expresión regular) para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaderss para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir carpeta node_modules por todo su contenido
                use: {
                    loader: 'babel-loader', //Loader para transpilar JS moderno a JS compatible con más navegadores
                    options: {
                        presets: ['@babel/preset-env'], //Preset de babel para convertir JS moderno en versiones más antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },  //Carpeta desde la cual se obtienen los archivos que se muestran al ususario
        compress: true, //Habilitando compresión gzip (reduce el tamaño de los archivos para carga más rápida)
        port: 9000, //Puerto en el que se ejecuta el servidor de desarrollo
    }
}