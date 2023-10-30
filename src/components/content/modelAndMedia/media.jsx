import { useSelector } from 'react-redux'
import Box from "@mui/material/Box";


function Photo({id, src, alt}){
    const styles = useSelector((state) => state.styles)

    const setPhotoStyle = () => {
        if(id === 'render'){
            switch (styles.deviceTypes.isMobile){
            case true:
                return {
                    height: '65%',
                    width:  '80%',
                    marginLeft: '10vw',
                    marginTop: '-1vh'
                }
            case false:
                return {
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
                        height: '65%',
                        width:  '80%',
                        marginLeft: '10vw',
                        marginTop: '-1vh'
                    }
                case false:
                    return {
                        height: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        width: styles.windowSz.innerHeight >= 900 ? '90%' : '65%',
                        marginLeft: styles.windowSz.innerHeight >= 900 ? '75%' : '65%',
                        marginTop: styles.windowSz.innerHeight >= 900 ? '-1vh' : '-1vh'
                    }
            }
        }
    }

    let photoStyle = setPhotoStyle()

    return (
        <Box id={id}>
            <img style={{...photoStyle}} src={src} alt={alt}/>
        </Box>
    )
}

export default Photo;