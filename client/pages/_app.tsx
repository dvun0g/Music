import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { wrapper } from '../redux';

import { useActions } from '../hooks/useActions';

import '../styles/global.scss';

const WrappedApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
    const {authCheck} = useActions()
    
    useEffect(() => {
      if (localStorage.getItem('accessToken')) {
        authCheck()
      }
    }, [])

    return (
      <Component {...pageProps} />
    )
}

export default wrapper.withRedux(WrappedApp);
