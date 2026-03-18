import { routes } from "./root.routes";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import type { Path, RouteParams } from "./router.types";

export default class AppRouter {
  static resolveRoute = <P extends Path>(
    path: P,
    params?: RouteParams<P>,
    options?: { isRelative: boolean }
  ) => {
    let resolvedPath: string =
      !path.startsWith("/") && !options?.isRelative ? `/${path}` : path;

    const paramsAsStrings: {
      [i: string]: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } = params || ({} as any);

    Object.keys(paramsAsStrings).forEach((key) => {
      resolvedPath = resolvedPath.replace(`:${key}`, paramsAsStrings[key]);
    });
    return resolvedPath;
  };
}

export const router = createBrowserRouter(routes as RouteObject[]);
