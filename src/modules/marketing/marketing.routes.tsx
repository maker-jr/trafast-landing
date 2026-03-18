/* eslint-disable react-refresh/only-export-components */
import MarketingLayout from "./marketing.layout";
import { Suspense, lazy } from "react";
import type { RouteType } from "@/router/router.types";

const LandingPage = lazy(() => import("./pages/landing/landing.page"));

export const marketingPaths = ["/"] as const;
export const marketingRoutes: RouteType[] = [
  {
    id: "marketing",
    element: <MarketingLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
];
