
const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'pxrdj5olOV4P9ugFQn2_Heih4AP7-ieHW5KcF3kTME0'

async function fetchImagesByCategory(category) {

    const searchQuery = category === 'All' ? 'nature' : category.toLowerCase();
    const url = `${UNSPLASH_BASE_URL}/search/photos?query=${searchQuery}&per_page=12&orientation=landscape`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Client-ID ${ACCESS_KEY}`
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error('Error fetching images:', error);
        return []
    }
}

export { fetchImagesByCategory }