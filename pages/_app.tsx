import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/LayoutComponent';
import store, { persistor } from '@/store';
import SpinnerComponent from '@/components/UI/SpinnerComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<SpinnerComponent />} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </PersistGate>
    </Provider>
  );
}
