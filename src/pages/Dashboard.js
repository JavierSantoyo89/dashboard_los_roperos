import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar';
import 'fontsource-roboto'
import '../assets/css/dashboard.css'
import CardsHeaderCountProducts from '../components/CardsHeaderCountProducts'
import CardsHeaderCountUsers from '../components/CardsHeaderCountUsers';
import CardsHeaderCountSaleSeason from '../components/CardsHeaderCountSaleSeason'
import TableProducts from '../components/TableProducts'

import CheckroomIcon from '@material-ui/icons/CheckBox'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'
import FormatStrikethroughIcon from  '@material-ui/icons/FormatStrikethrough'
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    iconos:{
        color: 'white'
    },
    containerTabla:{
        marginTop: '40px'
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
                        <CardsHeaderCountUsers icono={<AccountCircleIcon className={classes.iconos}/>} titulo='Usuarios' texto='total de Usuarios' color='rgba(148,80,50,1)' font= 'white'/>  
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeaderCountProducts icono={<CheckroomIcon className={classes.iconos}/>} titulo='Productos' texto='total de productos' color='rgba(48,80,150,1)' font= 'white'/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeaderCountSaleSeason icono={<FormatStrikethroughIcon className={classes.iconos}/>} titulo='In-sale/Season' texto='In-sale' color='rgba(48,80,50,1)' font= 'white'/>
                    </Grid>

            </Grid>

        
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.containerTabla}>
                    <TableProducts />
                </Grid>
         
        </div>
    )
}

export default Dashboard;


















