import { Suspense, lazy } from "react";
import MarketingLayout from "./marketing.layout";
import LandingPage from "./pages/landing/landing.page";
import type { RouteType } from "@/router/router.types";

/**
 * The landing page is imported directly: it is what almost everyone comes for,
 * and splitting it cost a round trip before anything could render.
 *
 * Terms and Privacy are the opposite — rarely opened, so they are split out and
 * fetched on demand. Their fallback is a plain cream screen rather than the
 * word "Loading", so a slow fetch reads as the page arriving, not as a fault.
 */
const TermsPage = lazy(() => import("./pages/legal/terms.page"));
const PrivacyPage = lazy(() => import("./pages/legal/privacy.page"));

const legal = (element: React.ReactNode) => (
  <Suspense fallback={<div style={{ minHeight: "100vh", background: "#FBF8F2" }} />}>
    {element}
  </Suspense>
);

export const marketingPaths = ["/", "/terms", "/privacy"] as const;

export const marketingRoutes: RouteType[] = [
  {
    id: "marketing",
    element: <MarketingLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/terms", element: legal(<TermsPage />) },
      { path: "/privacy", element: legal(<PrivacyPage />) },
    ],
  },
];
