
import { useGallery } from '../context/GalleryContext';

export default function ImageModal() {
    const { isModalOpen, selectedImage, closeModal } = useGallery();
    
    if (!isModalOpen || !selectedImage) {
        return null;
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative">
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
                >
                    ✕
                </button>
                
                {/* Image */}
                <img 
                    src={selectedImage.urls.full} 
                    alt={selectedImage.alt_description || selectedImage.description || 'Unsplash image'} 
                    className="w-full h-auto rounded-t-lg"
                />
                
                {/* Image Details */}
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {selectedImage.alt_description || selectedImage.description || 'Beautiful Image'}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <p><span className="font-semibold">Photographer:</span> {selectedImage.user.name}</p>
                        <p><span className="font-semibold">Likes:</span> {selectedImage.likes}</p>
                        <p><span className="font-semibold">Views:</span> {selectedImage.views || 'N/A'}</p>
                    </div>
                    {selectedImage.user.bio && (
                        <p className="mt-3 text-gray-700 text-sm italic">"{selectedImage.user.bio}"</p>
                    )}
                </div>
            </div>
        </div>
    )
}