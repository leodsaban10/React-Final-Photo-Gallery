import { fetchImagesByCategory } from "../services/unsplashApi"
import React, { createContext, useReducer, useContext } from "react"

const initialState = {
    images: [],
    selectedCategory: 'All',
    isLoading: false,
    selectedImage: null,
    isModalOpen: false
};

const ACTION_TYPES = {
    SET_LOADING: 'SET_LOADING',
    SET_IMAGES: 'SET_IMAGES',
    SET_CATEGORY: 'SET_CATEGORY',
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
};

const galleryReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case ACTION_TYPES.SET_IMAGES:
            return { ...state, images: action.payload, isLoading: false };
        case ACTION_TYPES.SET_CATEGORY:
            return { ...state, selectedCategory: action.payload };
        case ACTION_TYPES.OPEN_MODAL:
            return { ...state, selectedImage: action.payload, isModalOpen: true };
        case ACTION_TYPES.CLOSE_MODAL:
            return { ...state, selectedImage: null, isModalOpen: false };
        default:
            return state;
    }
};


const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(galleryReducer, initialState);

    const setLoading = (isLoading) => {
        dispatch({ type: ACTION_TYPES.SET_LOADING, payload: isLoading });
    };

    const setImages = (images) => {
        dispatch({ type: ACTION_TYPES.SET_IMAGES, payload: images });
    };

    const setCategory = (category) => {
        dispatch({ type: ACTION_TYPES.SET_CATEGORY, payload: category });
    };

    const openModal = (image) => {
        dispatch({ type: ACTION_TYPES.OPEN_MODAL, payload: image });
    };

    const closeModal = () => {
        dispatch({ type: ACTION_TYPES.CLOSE_MODAL });
    };

    // API function to fetch images by category
    const fetchImages = async (category) => {
        setLoading(true);
        try {
            const images = await fetchImagesByCategory(category);
            setImages(images);
            setCategory(category);
        } catch (error) {
            console.error('Failed to fetch images:', error);
            setLoading(false);
        }
    };

    const value = {
        ...state,
        setLoading,
        setImages,
        setCategory,
        openModal,
        closeModal,
        fetchImages
    };

    return (
        <GalleryContext.Provider value={value}>
            {children}
        </GalleryContext.Provider>
    );
};

export const useGallery = () => {
    const context = useContext(GalleryContext);
    if (!context) {
        throw new Error('useGallery must be used within a GalleryProvider');
    }
    return context;
};