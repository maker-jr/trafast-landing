/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LazyRouteFunction, RouteObject } from "react-router-dom";
import { paths } from "./root.paths";

type GetRouteParams<T extends string> = string extends T
  ? Record<string, string>
  : T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof GetRouteParams<Rest>]: string }
  : T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: string }
  : object;

export type Path = (typeof paths)[number];
export type RouteParams<P extends Path> = GetRouteParams<P>;
export type RouteType = Omit<RouteObject, "children"> & {
  id?: string;
  title?: string;
  path?: Path;
  resource?: string;
  resourcePermission?: string;
  index?: boolean;
  children?: RouteType[];
  lazy?: LazyRouteFunction<object>;
};
