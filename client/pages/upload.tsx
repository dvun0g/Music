import { NextPage } from "next";

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