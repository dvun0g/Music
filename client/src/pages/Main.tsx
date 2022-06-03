import { FC, lazy, Suspense, useEffect } from "react";
import { useActions } from "../hooks/useActions";

import MainLayout from "../components/Layout/MainLayout/MainLayout";

const  MainPlayer = lazy(() => import ("../components/Main/MainPlayer/MainPlayer"))

const Main: FC = () => {
    const {songFetch} = useActions()
    
    useEffect(() => {
        songFetch()
    }, [])
    
    return (
        <MainLayout>
            <Suspense>
                <MainPlayer />
            </Suspense>
        </MainLayout>
    )
}

export default Main;