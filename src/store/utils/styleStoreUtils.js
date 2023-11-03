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
        const innerHeight = state.windowSz.innerHeight
        if(innerHeight >= 900){
            height = '100vh'
        }else if(innerHeight <= 640){
            height = '120vh'
        }
    }
    return height
}

export {setContentTypographyVariant, setProjectSectionHeight}