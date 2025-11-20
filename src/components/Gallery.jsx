import ImageCard from "./ImageCard"
import { useGallery } from '../context/GalleryContext';
import { useEffect } from 'react';

export default function Gallery() {
    const { images, isLoading, fetchImages } = useGallery();

    // Load initial images when component mounts
    useEffect(() => {
        fetchImages('All');
    }, []);

    return (
        <main className="bg-gray-50 py-8 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="text-xl text-gray-600">Loading images...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {images.map((image) => (
                            <ImageCard 
                                key={image.id} 
                                image={image}
                            />
                        ))}
                    </div>
                )}
                
                {!isLoading && images.length === 0 && (
                    <div className="text-center text-gray-600 text-xl mt-20">
                        No images found. Try a different category!
                    </div>
                )}
            </div>
        </main>
    )
}