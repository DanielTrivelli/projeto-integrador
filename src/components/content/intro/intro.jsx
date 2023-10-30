import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Intro(){
    const introStyle = useSelector((state) => state.styles.style.sections.sectionContentStyle.intro)
    const censo_2019 = 'https://biblioteca.ibge.gov.br/visualizacao/livros/liv101846.pdf'
    const lei_brasileira_inclusao_pessoa_com_deficiencia = 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm'

    const goTo = (event) => {
        event.preventDefault()
        window.open(event.target.href, "_blank");
    }

    return(
        <>
            <Typography {...introStyle.typography}>
                A visão é um dos sentidos mais importantes para o ser humano, pois, a partir dela, é possível se relacionar
                com o ambiente, registrando e organizando informações, à nível cerebral, sendo à longa ou curta distância.
            </Typography>
            <Typography {...introStyle.typography}>
                Segundo pesquisa <Link href={censo_2019} underline="hover" onClick={goTo} >Ciclos de vida de 2019</Link>, realizada pelo Instituto Brasileiro de Geografia e
                Estatística (IBGE), o Brasil possuía cerca de <b>7 Milhões de habitantes</b> considerados deficientes visuais.
                Entende-se por Deficiência Visual um grande espectro de níveis de visão, podendo compreender desde a
                ausência de visão periférica até a ausência total de visão.
            </Typography>
            <Typography {...introStyle.typography}>
                Segundo o <b>Artigo 46</b> da <Link href={lei_brasileira_inclusao_pessoa_com_deficiencia} underline="hover" onClick={goTo}>Lei Brasileira de Inclusão da Pessoa com Deficiência</Link>, é assegurado o <b>direito ao
                transporte e à mobilidade</b> das pessoas com deficiência, em igualdade de oportunidades com as demais
                pessoas, por meio da identificação e eliminação de todos os obstáculos e barreiras ao seu acesso.
                Entretanto, essa garantia <b>não reflete a realidade dessa população</b>.
            </Typography>
        </>

    )
}

export default Intro;