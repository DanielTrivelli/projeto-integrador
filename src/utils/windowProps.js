import {getElementRangeYAxis} from './axis'

export const windowSize = () => {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export const eventListener = (action, type, callback) => {
    let windowEventListenerType = null;
    if(action === 'add'){
        windowEventListenerType = window.addEventListener;
    }else{
        windowEventListenerType = window.removeEventListener;
    }
    windowEventListenerType(type, callback);
}

export const scrollToPs = (element) => {
    window.scrollTo({
        top: element.offsetTop - document.getElementById('appBar').offsetHeight,
        left: 0,
        behavior: "smooth",
    })
}

export const onScroll = (store, action) => () => {
    const windowScrollY = window.scrollY
    const sectionsState = store.getState().sections
    const {id, yAxis} = sectionsState.activeSection
    if(!getElementRangeYAxis(windowScrollY, yAxis).isInRange){
        const allAxis = sectionsState.content.filter((item) =>  item.id !== id).map((content) => [
            content.id,
            ...content.yAxis
        ])
        const rangeAxis = allAxis.map((y) => [
            y,
            getElementRangeYAxis(windowScrollY, [y[1], y[2]]).isInRange
        ])
        let thisSection = rangeAxis.filter((axis) => axis[1])
        if(thisSection.length){
            thisSection = thisSection.flat()
            const [sectionId, sectionYAxisTop, sectionYAxisBottom] = thisSection[0]
            if(sectionId !== id){
                store.dispatch(action({
                    id: sectionId,
                    yAxis: [sectionYAxisTop, sectionYAxisBottom]
                }))
            }
        }
    }
}
