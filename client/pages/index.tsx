import type { NextPage } from 'next';

import MainLayout from '../components/Layout/MainLayout/MainLayout';
import MainPlayer from '../components/Main/MainPlayer/MainPlayer';

const Main: NextPage = () => {
  return (
    <MainLayout>
      <MainPlayer />
    </MainLayout>
  )
}

export default Main;
