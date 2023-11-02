const setContentTypographyVariant = (state) => {
    let variant = 'inherit'
    if(state.deviceTypes.isBrowser){
        variant = state.windowSz.innerHeight <= 570 ? 'h7' : 'h6'
    }
    return variant
}

const setProjectSectionHeight = (state) => {
    let height = '110vh'
    if(state.deviceTypes.isBrowser){
        height = state.windowSz.innerHeight >= 900 ? '100vh' : height
    }
    return height
}

export {setContentTypographyVariant, setProjectSectionHeight}