import "@fortawesome/fontawesome-free/css/all.min.css";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../server/route/app.router";
import superjson from "superjson";

import { loggerLink } from "@trpc/client/links/loggerLink";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";

import { url } from "../constants";

import type { FunctionComponent, ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
interface LayoutProps {
  children: ReactElement;
}
type Layout = FunctionComponent<LayoutProps>;

export type NextPageWithLayout = NextPage & {
  layout?: Layout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.layout ?? (({ children }) => <>{children}</>);

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
