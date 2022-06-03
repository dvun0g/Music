import { FC, lazy, Suspense } from "react";

import AuthLayout from "../components/Layout/AuthLayout/AuthLayout";

const AuthContent = lazy(() => import("../components/Auth/AuthContent/AuthContent"))

const Auth: FC = () => {
    return (
        <AuthLayout>
            <Suspense>
                <AuthContent/>
            </Suspense>
        </AuthLayout>
    )
}

export default Auth;