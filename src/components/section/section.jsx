import {useEffect, memo} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {changeActiveSection, updateSectionYAxis} from "../../store/sectionStore";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Intro from "../content/intro/intro";
import Project from "../content/project/project";
import ModelAndMedia from "../content/modelAndMedia/modelAndMedia";
import {getElementYAxis} from '../../utils/axis'

function Section({name, id}){
    const sectionTitle = name
    const sectionId = id
    const sectionStyles = useSelector((state) => state.styles.style.sections)
    const dispatch = useDispatch()

    const loadComponent = () => {
        return {
            'intro': <Intro/>,
            'project': <Project/>,
            'modelAndMedia': <ModelAndMedia/>,
        }[sectionId]
    }

    const loadSectionStyle = (sectionId) => () => {
        return {
            ...sectionStyles.sx,
            ...sectionStyles[sectionId]
        }
    }

    useEffect(() => {
        const element = document.getElementById(sectionId)
        if(element){
            const yAxis = getElementYAxis(element)
            dispatch(updateSectionYAxis({
                section: sectionId,
                yAxis: yAxis
            }))
            if(sectionId === 'intro'){
                dispatch(changeActiveSection({
                    id: sectionId,
                    yAxis: yAxis
                }))
            }
        }
    }, [dispatch, sectionId, sectionStyles]);


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

const SectionMemo = memo(Section, (oldProps, newProps) => {
    const oldYAxis = oldProps.yAxis
    const newYAxis = newProps.yAxis
    if(oldYAxis){
        return oldYAxis[0] !== newYAxis[0]
    }
    return true
})

export default SectionMemo;