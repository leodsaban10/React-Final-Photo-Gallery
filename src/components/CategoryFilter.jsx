import { useGallery } from '../context/GalleryContext';

export default function CategoryFilter() {
    const { selectedCategory, fetchImages, isLoading } = useGallery();
    const categories = ['All', 'BIRDS', 'TECHNOLOGY', 'SPACE', 'CARS']

    const handleCategoryClick = (category) => {
        fetchImages(category);
    };

    return (

        <section className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((category) => (
                        <button 
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            disabled={isLoading}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md'
                            } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}