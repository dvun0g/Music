import { FC } from "react";

import UploadLayout from "../components/Layout/UploadLayout/UploadLayout";

import Upload from "../components/Upload/Upload";


const UploadPage: FC = () => {
    return (
        <UploadLayout>
            <Upload />
        </UploadLayout>
    )
}

export default UploadPage;