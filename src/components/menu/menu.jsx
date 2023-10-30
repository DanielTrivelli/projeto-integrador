import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {MobileView, BrowserView, TabletView} from "react-device-detect";
import {eventListener, scrollToPs} from "../../utils/windowProps";
import { changeActiveSection, addSections } from '../../store/sectionStore'
import {updateWindowSize, updateStyles} from "../../store/styleStore";
import Section from "../section/section";
import {getElementYAxis} from "../../utils/axis";

const drawerWidth = 240;

function MenuBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const activeSection = useSelector((state) => state.sections.activeSection.id)
    const allSections = useSelector((state) => state.sections.content)
    const deviceType = useSelector((state) => state.styles.deviceTypes)
    const menuStyles = useSelector((state) => state.styles.style.menu)
    const dispatch = useDispatch()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const  handleWindowResize = () => {
        dispatch(updateWindowSize());
        dispatch(updateStyles());
    }

    const handleChangeSection = (sectionId) => () => {
        if(sectionId !== activeSection){
            const element = document.getElementById(sectionId)
            scrollToPs(element)
            dispatch(changeActiveSection({
                id: sectionId,
                yAxis: getElementYAxis(element)
            }))
        }
    }


    useEffect(() => {
        if(allSections.length === 0){
            dispatch(addSections(
                [
                    {name: 'Introdução', id: 'intro'},
                    {name: 'Projeto', id: 'project'},
                    {name: 'Modelo e Fotos', id: 'modelAndMedia'}
                ]
            ))
            dispatch(updateStyles());
        }
        eventListener('add','resize', handleWindowResize);
        return () => {
            eventListener('remove', 'resize', handleWindowResize);
        };
    });


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {allSections.map((item) => (
                    <ListItem key={`${item.id}-drawer`} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={handleChangeSection(item.id)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const chooseView = (component) => {
        if(deviceType.isTablet){
            return (
                <TabletView style={{paddingTop: '3vh'}}>
                    {component}
                </TabletView>
            )
        }else if(deviceType.isMobile){
            return (
                <MobileView style={{paddingTop: menuStyles.paddingTop}}>
                    {component}
                </MobileView>
            )
        }else if(deviceType.isBrowser){
            return (
                <BrowserView>
                    {component}
                </BrowserView>
            )
        }
    }

    const loadContent = () => {
        const component = (
            <Grid container>
                {
                    allSections.map(
                        (item) => <Section {...item} key={`${item.id}-box-content`}></Section>
                    )
                }
            </Grid>
        )
        return chooseView(component);
    }

    return (
        <Box>
            <CssBaseline />
            <AppBar position={'sticky'} component="nav" sx={menuStyles.appBar} id={'appBar'}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: '10px', sm: 'block' } }}
                    >
                        Desenvolvimento de um protótipo integrado em bengala para auxiliar no deslocamento de
                        pessoas com deficiência visual
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {allSections.map((item) => (
                            <Button
                                key={item.id}
                                sx={{color: activeSection === item.id ? '#fff' : '' }}
                                onClick={handleChangeSection(item.id)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main">
                {loadContent()}
            </Box>
        </Box>
    );
}


export default MenuBar;