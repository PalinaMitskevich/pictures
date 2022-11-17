import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IoIosArrowBack as LeftArrow, IoIosArrowForward as RightArrow } from "react-icons/io"

import { Picture } from "../../types"
import { paths, pictureUrl } from "../../constants"
import { Header } from "../../components/Header"
import { ArrowBack } from "../../components/ArrowBack"
import "./index.css"

export const PicturePage: React.FC = () => {
    const { pictureId } = useParams()
    const [picture, setPicture] = useState<Picture>({} as Picture)

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(`${pictureUrl}${pictureId}`)
            const photos = await response.json()
            setPicture(photos as Picture)
        }
        fetchPhotos()
    }, [pictureId])

    const prevPictureId = Number(pictureId) === 1 ? 12 : Number(pictureId) - 1
    const nextPictureId = Number(pictureId) === 12 ? 1 : Number(pictureId) + 1

    return (
        <>
            <Header />
            <ArrowBack />
            <div className="container">
                <Link to={`..${paths.PICTURE}${prevPictureId}`}>
                    <LeftArrow className="arrow" />
                </Link>
                <div>
                    <img alt="square" src={picture.url} />
                    <p className="picture-description">Description: {picture.title}</p>
                </div>
                <Link to={`..${paths.PICTURE}${nextPictureId}`}>
                    <RightArrow className="arrow" />
                </Link>
            </div>
        </>
    )
}