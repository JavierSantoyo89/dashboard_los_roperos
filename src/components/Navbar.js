import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import HouseIcon from '@material-ui/icons/House';
import {Button} from '@material-ui/core/'
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight:'16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        BorderRadius: '50%'
    }
}))
function Navbar(props){
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge = 'start' className={classes.menuButton} color='inherit'>
                        <Button href="http://localhost:1689/" ><HouseIcon/>  </Button>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Los roperos
                    </Typography>
                    <IconButton color='inherit'>
                        <img src={require('../assets/img/FB_IMG_1636420573599.jpg')} alt ='Img user' width='40px' height='40px' className= {classes.imagen}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;