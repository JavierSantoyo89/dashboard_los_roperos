import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar';
import 'fontsource-roboto'
import '../assets/css/dashboard.css'
import CardsHeaderCountUsers from '../components/CardsHeaderCountUsers';
import CardsHeaderCountProducts from '../components/CardsHeaderCountProducts';
import CardsHeaderCountSaleSeason from '../components/CardsHeaderCountSaleSeason';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
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
            </Grid>


            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeaderCountUsers />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeaderCountProducts />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeaderCountSaleSeason />
            </Grid>
        </div>
    )
}

export default Dashboard;