import {Fragment} from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Model from '../content/model/model';
import Intro from "../content/intro/intro";

function Section({name, id}){
    const sectionTitle = name
    const sectionId = id
    const sectionStyles = useSelector((state) => state.styles.style.sections)

    const loadComponent = () => {
        return {
            'intro': <Intro/>,
            'project': true,
            'model': <Model/>
        }[sectionId]
    }

    const loadSectionStyle = (sectionId) => () => {
        return {
            ...sectionStyles.sx,
            ...sectionStyles[sectionId]
        }
    }


    return (
        <Grid container sx={loadSectionStyle(sectionId)} id={sectionId}>
            <Grid item {...sectionStyles.grids.titleGrid}>
                <Typography {...sectionStyles.title} gutterBottom>{sectionTitle}</Typography>
            </Grid>
            <Grid item  {...sectionStyles.grids.contentGrid}>
                {loadComponent()}
            </Grid>
        </Grid>
    )
}


export default Section;