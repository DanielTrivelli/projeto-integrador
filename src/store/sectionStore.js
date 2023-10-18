import {createSlice} from '@reduxjs/toolkit'

const defaultState = {
    content: [],
    activeSection: 'Intro'
}

export const sectionsSlicer = createSlice({
    name: 'sections',
    initialState: defaultState,
    reducers: {
        addSections: (state, action) => {
            const alreadyIn = Object.values(state.content).map(item => item.id)
            state.content = Object.entries(action.payload).map(item => {
                if (!alreadyIn.includes(item.id)) {
                    return item[1]
                }
            })
        },
        changeActiveSection: (state, action) => {
            const payload = action.payload
            if(payload !== state.activeSection){
                state.activeSection = payload
            }
        },
        resetDefaultState: (state, action) => {
            state.initialState = {...defaultState};
        }
    },
})


export const { addSections, changeActiveSection, resetDefaultState } = sectionsSlicer.actions

export default sectionsSlicer.reducer