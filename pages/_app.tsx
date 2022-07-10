import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import type { FunctionComponent, ReactElement } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
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
function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
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

export default MyApp;
