import webpack from 'webpack'
import {buildWebpackConfiguration} from "./config/build/buildWebpackConfiguration";
import {BuildPath} from "./config/build/types/config";
import path from "path";

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfiguration({
  mode: 'production',
  paths,
  isDev
})

export default config;