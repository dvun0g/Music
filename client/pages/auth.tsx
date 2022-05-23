import { NextPage } from "next";
import AuthContent from "../components/Auth/AuthContent/AuthContent";

import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";


const Auth: NextPage = () => {
    return (
        <AuthLayout>
            <AuthContent/>
        </AuthLayout>
    )
}

export default Auth;