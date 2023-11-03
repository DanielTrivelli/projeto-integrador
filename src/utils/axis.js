import {inRange} from 'lodash'

const getElementYAxis = (element) => {
    return [
        element.offsetTop,
        element.offsetTop + element.offsetHeight
    ]
}

const getElementRangeYAxis = (yPos, elementYAxis) => {
    const appBarHeight = document.getElementById('appBar').offsetHeight
    const start = elementYAxis[0]  - appBarHeight
    const end = elementYAxis[1] - appBarHeight
    return {
        start,
        end,
        isInRange: inRange(yPos, start, end)
    }
}

export {getElementYAxis, getElementRangeYAxis};