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