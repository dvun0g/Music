import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import { wrapper } from "../redux";

import UploadLayout from "../components/Layout/UploadLayout/UploadLayout";

import Upload from "../components/Upload/Upload";

const UploadPage: NextPage = () => {
    return (
        <UploadLayout>
            <Upload />
        </UploadLayout>
    )
}

export default UploadPage;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
    const refreshToken = context.req.headers.cookie
    if (!refreshToken) {
        return {
            redirect: {destination: '/auth', permanent: false},
            props: []
        }
    }
    return {
        props: []
    }
})
