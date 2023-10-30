import {useState} from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';


const steps = [
    {
        label: 'Software',
        subtitle: 'Como o protótipo identifica um obstaculo?',
        description: `Foi desenvolvido um código em C++ projetado para realizar um mapeamento da distância entre o
        sensor e qualquer obstáculo. A proximidade do obstáculo é refletida na frequência das pulsações do motor de
        vibração, que aumenta à medida que o obstáculo se aproxima e diminui à medida que se afasta. O código é
        configurado para ler os dados do sensor e, com base nessa leitura, calcular um tempo de atraso apropriado,
        a qual é diretamente relacionado à distância do obstáculo. Isso permite que o motor de vibração seja acionado
        em uma frequência que os usuários possam sentir e interpretar, dando resposta tátil sobre a proximidade de
        objetos.`,
    },
    {
        label: 'Hardware',
        subtitle: 'Como funciona a parte elétrica?',
        description: `A estrutura física do protótipo foi modelada e produzida em filamento de PLA branco, um
        termoplástico biodegradável originado de recursos renováveis, como amido de milho ou cana-de-açúcar.
        A produção do modelo 3D durou aproximadamente 3 horas para cada um dos dois módulos e permitiu a criação de uma
        estrutura robusta que facilitou a integração do sensor, do motor de vibração, do Arduino e da bateria.
        Vale ressaltar que os dois módulos foram projetados com um mecanismo que impede o desencaixe acidental,
        garantindo estabilidade. Para isso, as duas peças foram configuradas de modo que fiquem conectadas efetuando o
        encaixe de maneira segura.`,
    },
    {
        label: 'Chassi',
        subtitle: 'Onde a parte elétrica fica?',
        description: `A estrutura física do protótipo foi modelada e produzida em filamento de PLA branco, um
        termoplástico biodegradável originado de recursos renováveis, como amido de milho ou cana-de-açúcar.
        A produção do modelo 3D durou aproximadamente 3 horas para cada um dos dois módulos e permitiu a criação de uma
        estrutura robusta que facilitou a integração do sensor, do motor de vibração, do Arduino e da bateria.
        Vale ressaltar que os dois módulos foram projetados com um mecanismo que impede o desencaixe acidental,
        garantindo estabilidade. Para isso, as duas peças foram configuradas de modo que fiquem conectadas efetuando o
        encaixe de maneira segura.`,
    },
];


function Project(){
    const projectStyle = useSelector((state) => state.styles.style.sections.sectionContentStyle.project)

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1 !== steps.length ? prevActiveStep + 1 : 0);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
                <Step key={step.label} >
                    <StepLabel
                        optional={
                            (
                                <Typography {...projectStyle.stepSubTitleTypography}>{step.subtitle}</Typography>
                            )
                        }
                    >
                        <Typography {...projectStyle.stepTitleTypography}>{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                        <Typography {...projectStyle.typography}>{step.description}</Typography>
                        <div>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                            >
                                {index === steps.length - 1 ? 'Inicio' : 'Proximo'}
                            </Button>
                            <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                            >
                                Voltar
                            </Button>
                        </div>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    );
}


export default Project;