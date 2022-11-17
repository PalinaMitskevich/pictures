import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { paths, allPicturesUrl } from "../../constants"
import { Header } from "../../components/Header"
import { Picture } from "../../types"
import "./index.css"

export const AllPicturesPage: React.FC = () => {
    const [pictures, setPictures] = useState<Array<Picture>>([])

    useEffect( () => {
        const fetchPhotos = async () => {
            const response = await fetch(allPicturesUrl)
            const pictures = await response.json()
            setPictures(pictures as Picture[])
        }
        fetchPhotos()
    }, [])

    return (
        <>
            <Header />
            <div className="pictures-container">
                {pictures.map(({ thumbnailUrl, id }) => (
                    <Link to={`..${paths.PICTURE}${id}`} className="picture" key={id}>
                        <img alt="square" src={thumbnailUrl} />
                    </Link>
                ))}
            </div>
        </>
    )
}