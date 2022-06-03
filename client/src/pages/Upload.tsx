import { FC, lazy, Suspense } from "react";

import UploadLayout from "../components/Layout/UploadLayout/UploadLayout";


const Upload = lazy(() => import ('../components/Upload/Upload'))

const UploadPage: FC = () => {
    return (
        <UploadLayout>
            <Suspense>
                <Upload />
            </Suspense>
        </UploadLayout>
    )
}

export default UploadPage;