import { createSlice } from '@reduxjs/toolkit'
import {windowSize} from "../utils/windowProps";
import {isTablet, isMobile, isBrowser, isIPhone13, browserName} from "react-device-detect";

const defaultState = {
    deviceTypes: {
        isTablet,
        isMobile,
        isBrowser,
        isIPhone13
    },
    browser: browserName,
    windowSz: windowSize(),
    style: {
        menu: {},
        sections: {},
    }
}

export const styleSlicer = createSlice({
    name: 'styles',
    initialState: defaultState,
    reducers: {
        updateStyles: (state) => {
            const newStyleState = {
                menu: {
                    // paddingTop: state.windowSz.innerHeight <= 740 && !state.deviceTypes.isIPhone13 ? '13vh' : '9.2vh',
                    appBar: {
                        backgroundColor: '#113946',
                        // height: '100%'
                    }
                },
                sections: {
                    title: {
                        variant: state.deviceTypes.isMobile ? 'h5' : 'h2',
                        align: state.deviceTypes.isMobile ? 'center' : 'left'
                    },
                    sx:{
                        width: '100vw',
                        height: '100vh'
                    },
                    grids: {
                        titleGrid: {
                            sx: {
                                // borderStyle: 'solid',
                                // height: state.deviceTypes.isMobile ? '40px' : `-${100/3}vh`,
                                // paddingTop: state.deviceTypes.isMobile ? '1vh' : '20vh',
                                // paddingLeft: state.deviceTypes.isMobile ? '' : '3vw',
                                display: 'grid',
                                placeItems: 'center'
                            },
                            xs: 12,
                            sm: 12,
                            md: 3,
                            lg: 3
                        },
                        contentGrid: {
                            sx: {
                                // borderStyle: 'solid',
                                // borderColor: 'green',
                                // position: state.deviceTypes.isMobile ? 'absolute': '',
                                paddingTop: '5vh',
                                paddingLeft: '2vw'
                            },
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: 6
                        }
                    },
                    intro: {
                        backgroundColor: '#FFF2D8',
                        justifyContent: state.deviceTypes.isMobile ? 'normal' : 'space-evenly',
                        alignItems: state.deviceTypes.isMobile ? 'normal' : 'center'
                    },
                    project: {
                        backgroundColor: '#EAD7BB',
                        justifyContent: state.deviceTypes.isMobile ? 'normal' : 'space-evenly',
                        alignItems: state.deviceTypes.isMobile ? 'normal' : 'center'
                    },
                    model: {
                        backgroundColor: '#BCA37F',
                        userSelect:'none',
                        justifyContent: state.deviceTypes.isMobile ? 'normal' : 'space-evenly',
                        alignItems: state.deviceTypes.isMobile ? 'normal' : 'center'
                    },
                    sectionContentStyle: {
                        intro: {
                            typography: {
                                variant: state.deviceTypes.isMobile ? 'inherit' : 'h6',
                                paragraph: true
                            }
                        },
                        project: {
                        },
                        model: {
                            width: state.deviceTypes.isMobile ? '90vw' : '40vw',
                            height: state.deviceTypes.isMobile ? '50vh' : '70vh',
                        },
                    }
                },
            }
            state.style = {
                ...state.style,
                ...newStyleState
            }
        },
        updateWindowSize: (state, action) => {
            state.windowSz = {...state.windowSz, ...windowSize()}
        },
        resetDefaultState: (state, action) => {
            state.initialState = {...defaultState};
        }
    },
})


export const { updateStyles, updateWindowSize, resetDefaultState } = styleSlicer.actions

export default styleSlicer.reducer