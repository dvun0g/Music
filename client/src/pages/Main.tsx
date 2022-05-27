import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";

import MainLayout from "../components/Layout/MainLayout/MainLayout";

import MainPlayer from "../components/Main/MainPlayer/MainPlayer";

const Main: FC = () => {
    const {songFetch} = useActions()
    
    useEffect(() => {
        songFetch()
    }, [])
    
    return (
        <MainLayout>
            <MainPlayer />
        </MainLayout>
    )
}

export default Main;