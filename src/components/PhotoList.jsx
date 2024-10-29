import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/style.css'

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const accessKey = 'xAji8Bm1Jaz9OFWyN62xGEHKQTr2BMUZyHpoWnjHgro'; // Замените на ваш ключ

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/photos`, {
                    headers: {
                        Authorization: `Client-ID ${accessKey}`
                    }
                });
                setPhotos(response.data);
            } catch (error) {
                console.error("Ошибка при получении фотографий:", error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <div className="photo-list" clas>
                {photos.map(photo => (
                    <img className='photo' key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
