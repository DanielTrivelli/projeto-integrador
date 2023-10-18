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