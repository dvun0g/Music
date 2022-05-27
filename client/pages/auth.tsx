import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { wrapper } from "../redux";

import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";

import AuthContent from "../components/Auth/AuthContent/AuthContent";

const Auth: NextPage = () => {    
    return (
        <AuthLayout>
            <AuthContent/>
        </AuthLayout>
    )
}

export default Auth;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
    const refreshToken = context.req.headers.cookie 
    if (refreshToken) {
        return {
            redirect: {destination: '/', permanent: false},
            props: []
        }
    }
    return {
        props: []
    }
})