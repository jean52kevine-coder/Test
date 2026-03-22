import { ReactNode, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import PageBackground from "./PageBackground";

const Footer = lazy(() => import("./Footer"));
const ChatWidget = lazy(() => import("./ChatWidget"));
const BackgroundPaths = lazy(() =>
  import("./ui/background-paths").then((m) => ({ default: m.BackgroundPaths }))
);

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen relative w-full max-w-full overflow-x-hidden">
    <PageBackground />
    <Suspense fallback={null}>
      <BackgroundPaths />
    </Suspense>
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20 pb-16 sm:pb-0 relative z-[1]">{children}</main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
    <Suspense fallback={null}>
      <ChatWidget />
    </Suspense>
  </div>
);

export default Layout;
