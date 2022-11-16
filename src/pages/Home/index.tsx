import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../constants";
import "./index.css"

export type Photo = {
    albumId: number
    id: number
    thumbnailUrl: string
    title: string
    url: string
}

export const Home: React.FC = () => {
    const [photos, setPhotos] = useState<Array<Photo>>([])

    useEffect( () => {
        const fetchPhotos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
            const photos = await response.json()
            setPhotos(photos as Photo[])
        }
        fetchPhotos()
    }, [])



    return (
        <div className='photos-container'>
            {photos.map(({ thumbnailUrl, id }) => (
                <Link to={`${paths.PICTURE}/${id}`} className='photo' key={id}>
                    <img alt='square' src={thumbnailUrl} />
                </Link>
            ))}
        </div>
    )
}