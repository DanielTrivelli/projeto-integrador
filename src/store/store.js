import { configureStore } from '@reduxjs/toolkit'
import sectionsReducer from './sectionStore'
import styleReducer from './styleStore'

export default configureStore({
    reducer: {
        sections: sectionsReducer,
        styles: styleReducer
    },
})