import {useState} from "react";
import {useSelector} from "react-redux";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Photo from "./media";
import Model from "./model";

const steps = [
    {
        label: 'Modelo 3D do protótipo',
        component: <Model alt={'Modelo 3D do protótipo'}/>,
    },
    {
        label: 'Modelo 3D do protótipo renderizado',
        component: <Photo src={'/projeto-integrador/static/images/prototipo_renderizado.png'} id={'render'} alt={'Modelo 3D do protótipo renderizado'}/>,
    },
    {
        label: 'Visao superior do protótipo acoplado a bengala',
        component: <Photo src={'/projeto-integrador/static/images/prototipo_vista_superior.jpg'} id={'superior'} alt={'Visao superior do protótipo acoplado a bengala'}/>,
    },
    {
        label: 'Visao lateral do protótipo acoplado a bengala',
        component: <Photo src={'/projeto-integrador/static/images/prototipo_vista_lateral.jpg'} id={'lateral'} alt={'Visao lateral do protótipo acoplado a bengala'}/>,
    },
];

function ModelAndMedia() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;
    const modelAndMediaStyle = useSelector((state) => state.styles.style.sections.modelAndMedia)


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box>
            <Paper {...modelAndMediaStyle.paper}>
                <Typography {...modelAndMediaStyle.typography}>{steps[activeStep].label}</Typography>
            </Paper>
            <Box {...modelAndMediaStyle.boxContent}>
                {steps[activeStep].component}
            </Box>
            <MobileStepper
                {...modelAndMediaStyle.mobileStepper}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Proximo
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{...modelAndMediaStyle.typography}}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Anterior
                    </Button>
                }
            />
        </Box>
    );
}

export default ModelAndMedia;