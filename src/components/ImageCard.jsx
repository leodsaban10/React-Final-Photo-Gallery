
export default function ImageCard() {

    const imageData = {
        url: "https://via.placeholder.com/300x200",
        title: "Sample Image",
        category: "Birds"
    }
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={imageData.url} alt={imageData.title} className="w-full h-48 object-cover"/>
        </div>
    )
}