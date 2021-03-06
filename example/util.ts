/**
 * @author WMXPY
 * @namespace SlayTheSpire
 * @description Util
 * @override Example
 */

import * as Path from "path";

export const joinExamplePath = (...paths: string[]): string => {

    return Path.resolve(__dirname, ...paths);
};

export const joinStaticPath = (...paths: string[]): string => {

    return Path.resolve(__dirname, '..', 'static', ...paths);
};
