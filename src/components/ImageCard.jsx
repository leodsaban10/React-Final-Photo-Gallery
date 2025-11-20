
import { useGallery } from '../context/GalleryContext';

export default function ImageCard({ image }) {
    const { openModal } = useGallery();

    const handleImageClick = () => {
        openModal(image);
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={handleImageClick}
        >
            <img 
                src={image.urls.regular} 
                alt={image.alt_description || image.description || 'Unsplash image'} 
                className="w-full h-48 object-cover"
            />
            <div className="p-3">
                <p className="text-sm text-gray-600 truncate">
                    {image.alt_description || image.description || 'Beautiful image'}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    By {image.user.name}
                </p>
            </div>
        </div>
    )
}