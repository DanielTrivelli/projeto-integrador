import {useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import Box from "@mui/material/Box";
import {Triangle} from "react-loader-spinner";



function Photo({id, src, alt}){
    const styles = useSelector((state) => state.styles)
    const [loadingState, setLoadingState] = useState(true)

    const setPhotoStyle = () => {
        if(id === 'render'){
            switch (styles.deviceTypes.isMobile){
                case true:
                    return {
                        display: loadingState ? 'none' : '',
                        height: '65%',
                        width:  '80%',
                        marginLeft: '10vw',
                        marginTop: '-1vh'
                    }
                case false:
                    return {
                        display: loadingState ? 'none' : '',
                        height: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        width: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        marginLeft: styles.windowSz.innerHeight >= 900 ? '75%' : '65%',
                        marginTop: styles.windowSz.innerHeight >= 900 ? '1vh' : '1vh'
                    }
            }

        }else{
            switch (styles.deviceTypes.isMobile){
                case true:
                    return {
                        display: loadingState ? 'none' : '',
                        height: '65%',
                        width:  '80%',
                        marginLeft: '10vw',
                        marginTop: '-1vh'
                    }
                case false:
                    return {
                        display: loadingState ? 'none' : '',
                        height: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        width: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        marginLeft: styles.windowSz.innerHeight >= 900 ? '75%' : '65%',
                        marginTop: styles.windowSz.innerHeight >= 900 ? '-1vh' : '-1vh'
                    }
            }
        }
    }

    const photoStyle = setPhotoStyle()
    const loaderStyle = {
        div: {
            display: !loadingState ? 'none' : '',
            marginLeft: photoStyle.marginLeft,
            marginTop: '4vh',
            height: photoStyle.height,
            width: photoStyle.width,
            position: 'relative'
        },
        loader: {
            ...styles.style.loader,
            height: photoStyle.height,
            width: photoStyle.width,
            visible: loadingState,
        }
    }


    useEffect(() => {
        const imgElement = document.getElementById('img')
        if(!loadingState){
            setLoadingState(true)
        }
        imgElement.onload = () => {
            setTimeout(() => {
                setLoadingState(false)
            }, 50 )
        }

        imgElement.src = src;
    }, [id]);



    return (
        <Box id={id}>
            <div style={{...loaderStyle.div}}>
                <Triangle {...loaderStyle.loader}/>
            </div>
            <img id={'img'} style={{...photoStyle}} alt={alt}/>
        </Box>
    )
}

export default Photo;