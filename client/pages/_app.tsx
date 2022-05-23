import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux';

import '../styles/global.scss';

const WrappedApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(WrappedApp);
