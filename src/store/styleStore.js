import { createSlice } from '@reduxjs/toolkit'
import {windowSize} from "../utils/windowProps";
import {isTablet, isMobile, isBrowser, isIPhone13, browserName} from "react-device-detect";
import {setContentTypographyVariant, setProjectSectionHeight} from "./utils/styleStoreUtils";

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
            const contentVariantType =  setContentTypographyVariant(state)
            const projectSectionHeight = setProjectSectionHeight(state)

            const newStyleState = {
                menu: {
                    appBar: {
                        backgroundColor: '#113946',
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
                        alignItems: state.deviceTypes.isMobile ? 'normal' : 'center',
                        height: projectSectionHeight
                    },
                    modelAndMedia: {
                        paper: {
                            square: true,
                            elevation: 0,
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                backgroundColor: '#BCA37F',
                            }
                        },
                        boxContent: {
                            sx: {
                                height: '50vh',
                                maxWidth: 400,
                                width: '100%',
                                p: 2
                            }
                        },
                        mobileStepper: {
                            variant: 'text',
                            position: 'static',
                            sx: {
                                backgroundColor: '#BCA37F'
                            }
                        },
                        typography: {
                            variant: contentVariantType,
                            fontWeight: 'bold'
                        },
                        backgroundColor: '#BCA37F',
                        userSelect:'none',
                        justifyContent: state.deviceTypes.isMobile ? 'normal' : 'space-evenly',
                        alignItems: state.deviceTypes.isMobile ? 'normal' : 'center'
                    },
                    sectionContentStyle: {
                        intro: {
                            typography: {
                                variant: contentVariantType,
                                paragraph: true
                            }
                        },
                        project: {
                            typography: {
                                variant: contentVariantType,
                                paragraph: true
                            },
                            stepTitleTypography: {
                                variant: state.deviceTypes.isMobile ? 'h6' : 'h5',
                            },
                            stepSubTitleTypography: {
                                variant: state.deviceTypes.isMobile ? 'h7' : 'h6',
                                color: '#5a5a5a'
                            },
                        },
                        model: {
                            width: state.deviceTypes.isMobile ? '90vw' : '45vw',
                            height: state.deviceTypes.isMobile ? '50vh' : '100%',
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