import {createSlice} from '@reduxjs/toolkit'

const defaultState = {
    content: [],
    activeSection: {
        id: '',
        yAxis: []
    }
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
                return null
            })
        },
        updateSectionYAxis: (state, action) => {
            const payload = action.payload
            state.content = state.content.map(item => {
                let sectionSettings = {...item}
                if(payload.section === sectionSettings.id){
                    sectionSettings = {
                        ...sectionSettings,
                        yAxis: payload.yAxis
                    }
                }
                return sectionSettings
            })
        },
        changeActiveSection: (state, action) => {
            const payload = action.payload
            if(payload.id !== state.activeSection.id){
                state.activeSection = {
                    id: payload.id,
                    yAxis: [...payload.yAxis]
                }
            }
        },
        resetDefaultState: (state, action) => {
            state.initialState = {...defaultState};
        }
    },
})


export const { addSections, updateSectionYAxis, changeActiveSection, resetDefaultState } = sectionsSlicer.actions

export default sectionsSlicer.reducer