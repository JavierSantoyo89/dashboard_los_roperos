import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar';
import 'fontsource-roboto'
import '../assets/css/dashboard.css'
import CardsHeaderCountProducts from '../components/CardsHeaderCountProducts'
import HouseIcon from '@material-ui/icons/House';
import CardsHeaderCountUsers from '../components/CardsHeaderCountUsers';
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    iconos:{
        color: 'white'
    }
}))

function Dashboard(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
            


                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeaderCountUsers icono={<HouseIcon className={classes.iconos}/>} titulo='Usuarios' texto='total de Usuarios' color='rgba(248,80,50,1)' font= 'white'/>  
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeaderCountProducts icono={<HouseIcon className={classes.iconos}/>} titulo='Productos' texto='total de productos' color='rgba(248,80,50,1)' font= 'white'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeaderCountProducts icono={<HouseIcon className={classes.iconos}/>} titulo='In-sale/Season' texto='In-sale' color='rgba(248,80,50,1)' font= 'white'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;


















