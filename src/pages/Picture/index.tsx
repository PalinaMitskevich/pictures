import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack } from "react-icons/io";
import { Photo } from "../Home"
import { paths } from "../../constants";
import './index.css'

export const Picture: React.FC = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState<Photo>({} as Photo)

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            const photos = await response.json()
            setPhoto(photos as Photo)
        }
        fetchPhotos()
    }, [id])


    return (
        <>
            <Link to={paths.HOME}>
                <IoIosArrowRoundBack className='back'/>
            </Link>
            <div className='information-container'>
                <Link to={`${ Number(id) === 1 ? 12 : Number(id) - 1}`}>
                    <IoIosArrowBack className='icon-back' />
                </Link>
                <div>
                    <img alt='square' src={photo.url} />
                    <p className='photo-description'>Description: {photo.title}</p>
                </div>
                <Link to={`${ Number(id) === 12 ? 1 : Number(id) + 1}`}>
                    <IoIosArrowForward className='icon-back'/>
                </Link>
            </div>
        </>
    )
}