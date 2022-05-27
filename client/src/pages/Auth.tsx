import { FC } from "react";

import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";

import AuthContent from "../components/Auth/AuthContent/AuthContent";

const Auth: FC = () => {
    return (
        <AuthLayout>
            <AuthContent/>
        </AuthLayout>
    )
}

export default Auth;