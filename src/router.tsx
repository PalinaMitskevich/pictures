import React from "react"
import { createBrowserRouter } from "react-router-dom"

import { AllPicturesPage } from "./pages/AllPicturesPage"
import { PicturePage } from "./pages/PicturePage"
import { paths } from "./constants"

export const router = createBrowserRouter([
    {
        path: paths.ALL_PICTURES,
        element: <AllPicturesPage />,
    },
    {
        path: `${paths.PICTURE}:pictureId`,
        element: <PicturePage />,
    }
])