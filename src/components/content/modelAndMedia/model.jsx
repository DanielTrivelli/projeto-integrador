import { useSelector } from 'react-redux'
import {useEffect, useState} from "react";
import {Triangle} from "react-loader-spinner";

function Model({alt}){
    const defaultModelStyle = useSelector((state) => state.styles.style.sections.sectionContentStyle.model)
    const defaultLoaderStyle = useSelector((state) => state.styles.style.loader)
    const deviceTypes = useSelector((state) => state.styles.deviceTypes)
    const [loadingState, setLoadingState] = useState(true)

    const stopLoader = () => {
        if(loadingState){
            setTimeout(() => {
                setLoadingState(false)
            }, 50 )
        }
    }

    useEffect(() => {
        const modelElement = document.getElementById('modelv')
        if(!loadingState){
            setLoadingState(true)
        }
        modelElement.onload = stopLoader
        modelElement.src = "/projeto-integrador/static/model/Case_v22.glb"
        stopLoader()
    }, [alt]);

    const modelStyle = {
        ...defaultModelStyle,
        display: loadingState ? 'none' : '',
    }

    const loaderStyle = {
        div: {
            display: !loadingState ? 'none' : '',
            marginLeft: deviceTypes.isMobile ? '10vw' : '15vw',
            marginTop: deviceTypes.isMobile ? '3vh' : '5vh',
            height: defaultModelStyle.height,
            width: '90%',
        },
        loader: {
            ...defaultLoaderStyle,
            height: '90%',
            width: '90%',
            visible: loadingState,
        }
    }

    return(
        <>
            <div style={{...loaderStyle.div}}>
                <Triangle {...loaderStyle.loader}/>
            </div>
            <model-viewer camera-controls shadow-intensity="0.36" exposure="0.34" tone-mapping="commerce" style={modelStyle} alt={alt} id={'modelv'}>
                <div className="progress-bar hide" slot="progress-bar">
                    <div className="update-bar"></div>
                </div>
            </model-viewer>
        </>

    )
}

export default Model;