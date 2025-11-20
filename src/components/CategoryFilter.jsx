import { useGallery } from '../context/GalleryContext';
import { useState } from 'react';

export default function CategoryFilter() {
    const { selectedCategory, fetchImages, searchImages, isLoading } = useGallery();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    
    const allCategories = [
        'Birds',
        'Technology', 
        'Space',
        'Cars',
        'Nature',
        'Architecture', 
        'Food',
        'Travel',
        'Sports',
        'Animals',
        'Art',
        'Music',
        'Fashion',
        'Abstract'
    ];

    const handleCategoryClick = (category) => {
        fetchImages(category);
        setSearchQuery(''); // Clear search when category is selected
    };

    const handleDropdownClick = (category) => {
        fetchImages(category);
        setIsDropdownOpen(false);
        setSearchQuery(''); // Clear search when category is selected
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            searchImages(searchQuery.trim());
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (

        <section className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-center items-center gap-6 flex-wrap">
                    
                    {/* Single dropdown for all categories */}
                    <div className="relative">
                        <button 
                            onClick={toggleDropdown}
                            disabled={isLoading}
                            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 text-lg ${
                                selectedCategory 
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md'
                            } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {selectedCategory ? `${selectedCategory}` : 'Select Category'}
                            <span className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-10 min-w-56 max-h-64 overflow-y-auto">
                                {allCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleDropdownClick(category)}
                                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors border-b border-gray-100 last:border-b-0 ${
                                            selectedCategory === category ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search Field */}
                    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search photos..."
                                disabled={isLoading}
                                className={`px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg min-w-64 ${
                                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearchSubmit(e);
                                    }
                                }}
                            />
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}