// By default, clerkMiddleware() will not protect any routes. All routes are public and you must opt-in to protection for routes.

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard"])

export default clerkMiddleware((auth,req) => {
    if(isProtectedRoute(req)) // if request is sent to one of the protected route
        auth().protect()
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};