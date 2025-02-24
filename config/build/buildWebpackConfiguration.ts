import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfiguration(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
