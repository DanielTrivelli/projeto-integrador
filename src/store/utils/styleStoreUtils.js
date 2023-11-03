const setContentTypographyVariant = (state) => {
    let variant = 'inherit'
    if(state.deviceTypes.isBrowser){
        variant = state.windowSz.innerHeight <= 570 ? 'h7' : 'h6'
    }
    return variant
}

const setProjectSectionHeight = (state) => {
    let height = '121vh'
    const innerHeight = state.windowSz.innerHeight
    if(state.deviceTypes.isBrowser){
        if(innerHeight >= 900){
            height = '100vh'
        }else if(innerHeight <= 640){
            height = '120vh'
        }
    }
    return height
}

export {setContentTypographyVariant, setProjectSectionHeight}