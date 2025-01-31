import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header flex items-center justify-center">
        <div>
          <div className="mt-4">
            <p className="text-2xl font-bold">Doscmart React Coding</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          {/* <SignedOut >
            <Link to="/sign-in" className="item-center flex">Sign In</Link>
          </SignedOut> */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
