
import './App.css'
import CategoryFilter from './components/CategoryFilter'
import Gallery from './components/Gallery'
import Header from './components/Header'
import ImageModal from './components/ImageModal'
import { GalleryProvider } from './context/GalleryContext'

function App() {

  return (
    <>
      <GalleryProvider>
        <Header />
        <CategoryFilter/>
        <Gallery/>
        <ImageModal />
      </GalleryProvider>
    </>
  )
}

export default App
