import { NuxtThunkDispatch, wrapper } from '../redux';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { songFetch } from '../redux/actionCretors/Song/SongActionCretor';

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const dispatch = store.dispatch as NuxtThunkDispatch
  await dispatch(songFetch())
  return {
    props: []
  }
})
