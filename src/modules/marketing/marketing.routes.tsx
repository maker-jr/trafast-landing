import MarketingLayout from "./marketing.layout";
import LandingPage from "./pages/landing/landing.page";
import type { RouteType } from "@/router/router.types";

export const marketingPaths = ["/"] as const;

/**
 * The landing page is imported directly rather than through React.lazy. It is
 * the only route, so splitting it bought nothing and cost a round trip: the
 * browser had to download and run the router before it learned to ask for the
 * page, and showed a bare "Loading..." in the gap. Reach for lazy again when
 * there is a second route that most visitors will not open.
 */
export const marketingRoutes: RouteType[] = [
  {
    id: "marketing",
    element: <MarketingLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
];
