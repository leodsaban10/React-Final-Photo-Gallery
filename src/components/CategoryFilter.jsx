
export default function CategoryFilter() {
    const categories = ['All', 'Birds', 'Technology', 'Space', 'Cars']

    return (

        <section className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-center gap-4 flex-wrap">
                    {categories.map((category) => (
                        <button key={category}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}