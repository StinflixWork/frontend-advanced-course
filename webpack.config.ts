import {buildWebpackConfiguration} from "./config/build/buildWebpackConfiguration";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  return buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port: PORT,
  })
};
