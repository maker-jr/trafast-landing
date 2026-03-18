import { useNavigate } from "react-router-dom";
import { type Path, type RouteParams } from "./router.types";
import AppRouter from "./router";

export default function useRouterNaviagte() {
  const routerNavigate = useNavigate();

  const navigate = <P extends Path>(
    path: P,
    params?: RouteParams<P>,
    options?: { isRelative: boolean }
  ) => {
    const resolvedPath = AppRouter.resolveRoute(path, params, options);
    routerNavigate(resolvedPath);
  };

  return navigate;
}
